import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
  
    postsData:[
        {id:1,message:'Hi, how are you?',likesCount:'15 likes'},
        {id:2,message:'Its my new post',likesCount:'20 likes'},
        {id:3,message:'Look this post',likesCount:'15 likes'},
        {id:4,message:'Looking for a job',likesCount:'8 likes'},
        {id:5,message:'Reading posts',likesCount:'10 likes'},
        {id:6,message:'I have a new car',likesCount:'17 likes'},
        {id:7,message:'Welcome to the group',likesCount:'16 likes'},
       ],
    profile: null,
    status: ""
       
};


const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
      case ADD_POST: {
        let newPost = {
          id: 5,
          message: action.newPostText,
          likesCount: 0
        };
        return {
        ...state,
        postsData:[...state.postsData, newPost],
        };
      }
      
      case SET_USER_PROFILE: {
        return {
          ...state,
          profile: action.profile

        }
        
      }
      case SET_STATUS: {
        return {
          ...state,
          status: action.status

        }
        
      }
      case DELETE_POST: {
        return {
          ...state,
          postsData: state.postsData.filter(p => p.id != action.postId)
        }
      }
      default:
        return state;
      
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const deletePost = (postId) => ({type: DELETE_POST, postId})


//thunks

export const getUserProfile = (userId) => {
  return (dispatch) => {
   /*  dispatch(toggleIsFetching(true)) */
  
    usersAPI.getProfile(userId).then(response => {
      
      dispatch(setUserProfile(response.data));
        });
    }
}

export const getStatus = (userId) => {
  return (dispatch) => {
   /*  dispatch(toggleIsFetching(true)) */
  
    profileAPI.getStatus(userId).then(response => {
      
      dispatch(setStatus(response.data));
        });
    }
}

export const updateStatus = (status) => {
  return (dispatch) => {
   /*  dispatch(toggleIsFetching(true)) */
  
    profileAPI.updateStatus(status).then(response => {
      
      if(response.data.resultCode === 0) {
      dispatch(setStatus(status));
      }
    });
  }
}

//
export default profileReducer;

