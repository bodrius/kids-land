import { createReducer } from "@reduxjs/toolkit";

import types from "./types";

const initialState = {
  userEmail: null,
  userToken: null,
  userTasks: null,
  userPoint: null,
};

const reducer = {
  [types.LOGIN_USER]: (state, { payload }) => {
    console.log("reducer --->LOGIN", payload);
    return {
      userEmail: payload.user.email,
      userToken: payload.token,
      userTasks: payload.user.tasks,
      userPoint: payload.user.points,
    };
  },
  [types.REGISTR_USER]: (state, { payload }) => {
    console.log("payload", payload);
    return {
      userEmail: payload.user.email,
      userToken: payload.token,
      userTasks: payload.user.tasks,
      userPoint: payload.user.points,
    };
  },
  [types.USER_SIGNOUT]: () => initialState,
};

export const user = createReducer(initialState, reducer);
