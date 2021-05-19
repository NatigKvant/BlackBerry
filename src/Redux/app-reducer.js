import { authAPI } from "../api/api"
import {stopSubmit} from "redux-form"
import { getAuthUserData, setAuthUserData } from "./auth-reducer"

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

let initialState = {
  initialized: false
}


const appReducer = (state = initialState, action) => {
   switch(action.type) {
       case INITIALIZED_SUCCESS:
          return {
              ...state, 
              initialized: true,
              
        }
        
        /* case TOGGLE_IS_FETCHING: {
          return { ...state, isFetching: action.isFetching }
        } */
  
   default: 
       return state;

  }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


//thunk
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess());
    });
     
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
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
  }
} 

export default appReducer;