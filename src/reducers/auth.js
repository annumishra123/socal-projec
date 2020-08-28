import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {
    // name: "Fake Name",
    // email: "test@gmail.com",
    // password: "qwer1234",
  },
};

// REDUCER
export default function (state = initialState, action) {
  const { type, payload } = action;


  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true };

    case LOGOUT_SUCCESS:
    case LOGIN_FAIL:
    case REGISTER_SUCCESS:
      return { ...state, user: { ...payload }, isAuthenticated: false };


    default:
      return state;
  }
}
