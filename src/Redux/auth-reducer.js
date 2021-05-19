import { authAPI } from "../api/api"
import {stopSubmit} from "redux-form"

const SET_USER_DATA = 'blackberry/auth/SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
}


const authReducer = (state = initialState, action) => {
   switch(action.type) {
       case SET_USER_DATA:
          return {
              ...state, 
              ...action.payload,
              
        }
        
        case TOGGLE_IS_FETCHING: {
          return { ...state, isFetching: action.isFetching }
        }
  
   default: 
       return state;

  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth }})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })


//thunk

    export const getAuthUserData = () => async (dispatch) => {
     let response = await authAPI.me();
         if (response.data.resultCode === 0) {
               let {id,email,login} = response.data.data;
               dispatch(setAuthUserData(id, email, login, true));
           }
       }
       
  

export const login = (email,password,rememberMe) => async (dispatch) => {
  
  let response = await authAPI.Login(email,password,rememberMe)
    
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
        dispatch(stopSubmit("login",{_error: message}));
      }
    
} 

export const logout = () => async (dispatch) => {
   let response = await authAPI.Logout()

      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
  }
}


export default authReducer;