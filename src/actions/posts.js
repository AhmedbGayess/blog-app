import uuid from "uuid";
import moment from "moment";

const createPost = (
    {
        title = "",
        body = "",
        publishedAt = 0
    } = {}) => ({
        type: "CREATE_POST",
        post: {
            title,
            body,
            publishedAt: moment().format("MMMM Do YYYY, HH:mm"),
            id: uuid()
        }
    });

const editPost = (id, updates) => ({
    type: "EDIT_POST",
    id,
    updates
});

const deletePost = ({ id } = {}) => ({
    type: "DELETE_POST",
    id
});

export { createPost, deletePost, editPost }