import {
    configureStore,
    combineReducers,
    createReducer,
    getDefaultMiddleware,
  } from "@reduxjs/toolkit";
  import { persistStore, persistReducer } from "redux-persist";
  import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  import types from "./types";
  import thunk from "redux-thunk";
  import axios from "axios";
  
  const initialState = {
    userEmail: null,
    userPassword: null,
    userStatus: null,
    userToken: null,
    userTasks: null,
    userPoint: null,
  };
  
  const reducer = {
    [types.LOGIN_USER]: (state, { payload }) => {
      console.log("reducer --->LOGIN", payload);
      return {
        userEmail: payload.email,
        userPassword: payload.password,
      };
    },
    [types.REGISTR_USER]: (state, { payload }) => {
      console.log("reducer --->REGISTR", payload);
  
      const data = JSON.stringify({
        email: payload.email,
        password: payload.password,
      });
  
      const registerUser = async () => {
        await axios
          .post(`https://kidslike.goit.co.ua/api/auth/signup`, data, {
            headers: { "Content-Type": "application/json" },
          })
          .then((res) => {
            console.log(res);
            return {
              userEmail: res.data.user.email,
              userPassword: null,
              userStatus: res.status,
              userToken: res.data.token,
              userTasks: res.data.user.tasks,
              userPoint: res.data.user.points,
            };
          });
      };
      registerUser();
    },
    [types.USER_SIGNOUT]: () => initialState,
  };
  
  const user = createReducer(initialState, reducer);
  
  const rootReducer = combineReducers({ user });
  
  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
    blacklist: ["_persist"],
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk,
    }),
  });
  
  export const persistor = persistStore(store);
  