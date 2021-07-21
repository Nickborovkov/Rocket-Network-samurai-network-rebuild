import axios from "axios"

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,    
    headers: {
        "API-KEY": `615f021e-7620-44af-ab57-d51cc287ef65`
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status` , {status})
    }
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
    },
    loginUser(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logoutUser() {
        return instance.delete(`auth/login`)
    }
}
