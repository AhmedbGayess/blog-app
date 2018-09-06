const postsDefaultState = [];

const postsReducer = (state = postsDefaultState, action) => {
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
                }
            });
        default:
            return state;
    }
};

export default postsReducer;