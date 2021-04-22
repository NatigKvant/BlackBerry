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
      }
}

export const followAPI = {
    Follow(u){
        return instance.post(`follow/${u.id}`, {},)
        .then(response => {
            return response.data;
        })
    }
}

export const unFollowAPI = {
    unFollow(u){
        return instance.delete(`follow/${u.id}`)
        .then(response => {
            return response.data;
        })
   }
}

export const authMeAPI = {
    AuthMe(){
        return instance.get(`auth/me`)
        .then(response => {
            return response.data;
        })
    }
}
