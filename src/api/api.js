import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY" : "7470744c-b0c9-4f19-8251-815a8819bbdf"
        }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return   instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
      },
      Follow(userId){
        return instance.post(`follow/${userId}`, {},)
        
      },
      unFollow(userId){
        return instance.delete(`follow/${userId}`)
        
      },
      getProfile(userId){
        console.warn('Please use ProfileAPI object')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
     getProfile(userId){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    Login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    Logout(){
        return instance.delete(`auth/login`)
    }
}


//test api//
