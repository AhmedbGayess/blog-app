const postsDefaultState = [];

export default (state = postsDefaultState, action) => {
    switch (action.type) {
        case "CREATE_POST":
            return [
                ...state,
                action.post
            ];
        case "DELETE_POST":
            return state.filter((post) => post.id !== action.id);
        case "EDIT_POST":
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        ...action.updates
                    }
                } else {
                    return post;
                }
            });
        case "SET_POSTS": 
            return action.posts;
        default:
            return state;
    }
};
