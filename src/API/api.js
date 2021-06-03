import axios from "axios"

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,    
    headers: {
        "API-KEY": `73d7fae6-2e54-4fcc-850d-c4a2fa0fd90a`
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {return response.data})
        )
    },
    getProfile(userId) {
        console.warn(`Obsolete method. Please use profileAPI object`)
        return (                        
            profileAPI.getProfile(userId)
        )        
    },
    followUser(userId) {
        return (
            instance.post(`follow/${userId}`).then(response => {return response.data})
        )
        
    },
    unFollowUser(userId) {
        return (
            instance.delete(`follow/${userId}`).then(response => {return response.data})
        )
        
    },
}

export const authAPI = {
    auth() {
        return (
            instance.get(`auth/me`).then(response => {return response.data})
        )
    },
}

export const profileAPI = {
    getProfile(userId) {
        return (            
            instance.get(`profile/${userId}`).then(response => {return response.data})
        )        
    },
    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)
        )
    },
    updateStatus(status) {
        return (
            instance.put(`profile/status/` , {status: status})
        )
    }
}


