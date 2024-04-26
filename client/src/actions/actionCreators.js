import { UPDATE_AUTH, SET_POSTS, ADD_POST } from "./actionConstants"

export const updateAuth = (payload) => ({
    type: UPDATE_AUTH,
    payload
})

export const setPosts = (payload) => ({
    type: SET_POSTS,
    payload
})

export const addPost = (payload) => ({
    type: ADD_POST,
    payload
})