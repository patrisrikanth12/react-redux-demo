import { ADD_POSTS, DELETE_POST } from "./actionTypes";

export function addPosts(posts) {
    return {
        type: ADD_POSTS,
        payload: posts
    };
}

export function deletePost(id) {
    return {
        type: DELETE_POST,
        payload: id
    };
}