import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_USER,
} from "./types";

toast.configure()

let user = {
  name: "Fake Name",
  email: "test@gmail.com",
  password: "qwer1234",
};

// Login USER
export const login = (email, password) => (dispatch) => {

  if (email === user.email && password === user.password) {
    console.log("IF");
    toast.success("User Login!!")

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  } else {
    toast.error("Invalid credentials")
  }
};

// REGISTER USER
export const register = (newUser, history) => (dispatch) => {
  user = { ...newUser };
  dispatch({
    type: REGISTER_SUCCESS,
    payload: user,
  });
  history.push("/login");
};

// LOGOUT USER
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};

export const updateUser = (data) => (dispatch) => {

  dispatch({
    type: UPDATE_USER,
    payload: data,
  });
};
