import { apiLogin } from "store/services/fakeApi";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  SET_USER,
} from "../types/userTypes";

export const login = (inputs) => (dispatch) => {
  dispatch({ type: LOGIN_START });

  apiLogin(inputs.username, inputs.password)
    .then((response) => {
      if (response.data) {
        // save token to localStorage
        localStorage.setItem("user", response.data.username);

        // save user
        dispatch({ type: LOGIN_SUCCESS, payload: response.data.username });
      } else {
        //save error
        dispatch({ type: LOGIN_ERROR, payload: response.error });
      }
    })
    .catch((error) => {
      // save error
      dispatch({ type: LOGIN_ERROR, payload: error });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const setUser = (user) => (dispatch) => {
  dispatch({ type: SET_USER, payload: user });
};
