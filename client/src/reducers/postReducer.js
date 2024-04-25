import { ADD_POST, DELETE_POST, UPDATE_POST } from "../actions/actionConstants";


const initialState = {
    posts: [ 
        {
            newPost: [
                "This is an example post", 
                `You can create your own post by pressing the "New Post" button on the top right of the screen`
            ],
            id: 0,
            upvotes: 0
        }
    ],
    comments: [],
    upvotes: 0,
    id: 1
}

export default function postReducer (state = initialState, action) {
    switch(action.type) {
        case ADD_POST:
            const newPost = {
                newPost: action.payload,
                upvotes: 0,
                id: state.id
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                id: state.id + 1
            }
        default:
            return state;
    }
}