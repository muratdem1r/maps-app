import api from "../services/api";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  SET_USER,
} from "../types/userTypes";

import jwt_decode from "jwt-decode";

export const login = (inputs) => (dispatch) => {
  dispatch({ type: LOGIN_START });

  api
    .post("login", inputs)
    .then((response) => {
      // axios returns JWT token
      const token = response.data.split(" ")[1];

      // save token to localStorage
      localStorage.setItem("token", token);

      // decode JWT token
      const user = jwt_decode(token);

      // save user
      dispatch({ type: LOGIN_SUCCESS, payload: user });
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
