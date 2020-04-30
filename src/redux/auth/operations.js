// import axios from "axios";
import types from "./types";
import { services } from "../../services/services";

export const registerUser = (param) => async (dispatch, getState) => {
  // console.log("param REGISTR", param);
  const data = await services.createUser(param);
  if (!data) {
    dispatch({ type: types.USER_SIGNOUT, payload: {} });
  } else {
    // console.log("data", data);

    dispatch({ type: types.REGISTR_USER, payload: data.data });
  }
};

export const loginUser = (param) => async (dispatch, getState) => {
  // console.log("param LOGIN", param);

  const data = await services.userSignIn(param);
  if (!data) {
    dispatch({ type: types.USER_SIGNOUT, payload: {} });
  } else {
    // console.log("data", data);

    dispatch({ type: types.LOGIN_USER, payload: data.data });
  }
};
export const logoutUser = (param) => async (dispatch, getState) => {
  // console.log("param LOGOUT", param);

  dispatch({ type: types.USER_SIGNOUT, payload: {} });
};

export const pointUser = (param) => async (dispatch, getState) => {
  // console.log("param POINT", param);

  dispatch({ type: types.ADD_POINT, payload: param });
};
