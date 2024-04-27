import { SET_POSTS, ADD_POST, UPDATE_COMMENTS } from "../actions/actionConstants";

const initialState = {
    posts: [],
}

export default function postReducer (state = initialState, action) {
    switch(action.type) {
        case ADD_POST:
            const newPost = {
                newPost: action.payload,
                upvotes: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
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
            }

        case UPDATE_COMMENTS:
            const { post, comment } = action;
            const updatedPost = {
                ...post,
                comments: [...post.comments, comment]
            }

            const postIndex = state.posts.find(p => p.id === post.id);

            const updatedState = [...state.posts];
            updatedState[postIndex] = updatedPost;

            return {
                ...state,
                posts: updatedState
            }

        default:
            return state;
    }
}