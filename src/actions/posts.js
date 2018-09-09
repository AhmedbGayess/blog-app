import moment from "moment";
import database from "../firebase/firebase";

const createPost = (post) => ({
    type: "CREATE_POST",
    post
});

export const startCreatePost = (postData = {}) => {
    return (dispatch) => {
        const {
            title = "",
            body = "",
            publishedAt = moment().format("MMMM Do YYYY, HH:mm")
        } = postData;
        const post = { title, body, publishedAt }
        return database.ref("posts").push(post).then((ref) => {
            dispatch(createPost({
                id: ref.key,
                ...post
            }));
        });
    }
};

const editPost = (id, updates) => ({
    type: "EDIT_POST",
    id,
    updates
});

export const startEditPost = (id, updates) => {
    return (dispatch) => {
        return database.ref(`posts/${id}`).update({
            ...updates
        }).then(() => {
            dispatch(editPost(id, updates));
        });
    }
};

const deletePost = ({ id } = {}) => ({
    type: "DELETE_POST",
    id
});

export const startDeletePost = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(deletePost({ id }));
        })
    }
}
