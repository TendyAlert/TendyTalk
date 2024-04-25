import { UPDATE_AUTH, ADD_POST } from "./actionConstants"

export const updateAuth = (payload) => ({
    type: UPDATE_AUTH,
    payload
})


export const addPost = (payload) => ({
    type: ADD_POST,
    payload
})