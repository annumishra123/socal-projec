import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./types";
import userData from '../data.json'

toast.configure()

let user = {
  
};

// Login USER
export const login = (email, password) => (dispatch) => {
  
  if (email === userData.user.username && password === userData.user.password) {
    toast.success("User Login!!")

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  } else {
    toast.error("Invalid credentials")
  }
};



// LOGOUT USER
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};
