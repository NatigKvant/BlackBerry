import { authAPI } from "../api/api"
import {stopSubmit} from "redux-form"

const SET_USER_DATA = 'SET_USER_DATA'
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
export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.AuthMe().then(data => {
      dispatch(toggleIsFetching(false))
        if (data.resultCode === 0) {
            let {id,email,login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
    }
  }

export const login = (email,password,rememberMe) => (dispatch) => {
  
  authAPI.Login(email,password,rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
        dispatch(stopSubmit("login",{_error: message}));
      }
    })
} 

export const logout = () => {
  return (dispatch) => {
    authAPI.Logout()
    .then(response => {
      dispatch(toggleIsFetching(false))
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
  }
} 

export default authReducer;