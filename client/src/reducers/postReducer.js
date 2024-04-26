import { SET_POSTS, ADD_POST, DELETE_POST, UPDATE_POST } from "../actions/actionConstants";

const initialState = {
    posts: [],
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
        case SET_POSTS:
            const payload = action.payload
            const newPosts = payload.map(post => {
                const existingPost = state.posts.find(existingPost => existingPost.id === post._id)
                if(!existingPost) {
                    return {
                        title: post.title,
                        body: post.body,
                        comments: post.comments,
                        upvotes: post.upvotes,
                        id: post._id
                    }

                }
                return null;
            })

            const fileredPosts = newPosts.filter(post => post !== null)
            return {
                ...state,
                posts: [...state.posts, ...fileredPosts],
                id: state.id +1
            }
        default:
            return state;
    }
}