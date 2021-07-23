import axios from "axios"

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,    
    headers: {
        "API-KEY": `c615b06a-40a9-4441-9618-a345e061e467`
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
    },
    changePhoto(photoFile) {
        let formData = new FormData()
        formData.append(`image`, photoFile)
        return instance.put(`profile/photo`,
            formData,
            {headers: {'Content-type': 'multipart/form-data'}})
    },
    updateUserInfo(profile) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
    },
    loginUser(email, password, rememberMe = false, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logoutUser() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    }
}