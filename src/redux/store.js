import { configureStore, combineReducers, createReducer} from "@reduxjs/toolkit"

const reducer = createReducer({name:"user"}, {})


const rootReducer = combineReducers({application:reducer})

export const store = configureStore({reducer:rootReducer})