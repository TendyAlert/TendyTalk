import { UPDATE_AUTH } from "../actions/actionConstants";

const initialState = {
    username: '',
    id: 1
}


export default function authReducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_AUTH:
            return{
                ...state,
                username: action.payload.username
            }
        default:
            return state;
    }
}