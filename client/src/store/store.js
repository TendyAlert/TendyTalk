import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../reducers/authReducer";
import postReducer from "../reducers/postReducer";


const rootReducer = combineReducers ({
    auth: authReducer,
    posts: postReducer
});


const store = configureStore({ reducer: rootReducer })


export default store;