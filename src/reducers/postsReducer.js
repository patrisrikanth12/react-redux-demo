import { ADD_POSTS, DELETE_POST } from "../actions/actionTypes";

function postsReducer(state = {posts: []}, action) {
    if(action.type === ADD_POSTS) {
        console.log("posts added to store: ");
        console.log(action.payload);
        return {posts: action.payload};
    } else if(action.type === DELETE_POST) {
        console.log("post deleted");
        const posts = state.posts.filter((post) => post.id != action.payload);
        return {posts: posts};
    } else {
        return {...state};
    }
}

export default postsReducer;