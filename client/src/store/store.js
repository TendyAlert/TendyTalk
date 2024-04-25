import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    comments: [],
    upvotes: 0
}

    