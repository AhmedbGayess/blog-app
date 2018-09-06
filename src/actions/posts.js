const createPost = (post) => ({
    type: "CREATE_POST",
    post
});

const deletePost = ({ id } = {}) => ({
    type: "DELETE_POST",
    id
});

const editPost = (id, updates) => ({
    type: "EDIT_POST",
    id,
    updates
});

export { createPost, deletePost, editPost }