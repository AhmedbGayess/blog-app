import uuid from "uuid";
import moment from "moment";
import database from "../firebase/firebase";

const createPost = (post) => ({
    type: "CREATE_POST",
    post
});

export const startCreatePost = (postData = {}) => {
    return (dispatch,getState) => {
        const {
            title = "",
            body = "",
            publishedAt = moment().format("MMMM Do YYYY, HH:mm"),
            link = `/posts/${uuid()}`
        } = postData;
        const post = { title, body, publishedAt, link }
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/posts`).push(post).then((ref) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/posts/${id}`).update({
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/posts/${id}`).remove().then(() => {
            dispatch(deletePost({ id }));
        })
    };
};

const setPosts = (posts) => ({
    type: "SET_POSTS",
    posts
});

export const startSetPosts = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/posts`).once("value").then((snapshot) => {
            const posts = [];
            snapshot.forEach((snapshotChild) => {
                posts.push({
                    id: snapshotChild.key,
                    ...snapshotChild.val()
                });
            });
            dispatch(setPosts(posts));
        });
    }
};

