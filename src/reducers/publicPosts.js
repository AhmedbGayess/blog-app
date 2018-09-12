const publicPostsDefaultState = [];

export default (state = publicPostsDefaultState, action) => {
    switch(action.type) {
        case "SET_PUBLIC_POSTS": 
            return action.posts;
        default:
            return state;
    }
};