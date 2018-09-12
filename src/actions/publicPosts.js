import database from "../firebase/firebase";

const setPublicPosts = (posts) => ({
    type: "SET_PUBLIC_POSTS",
    posts
});

export const startSetPublicPosts = () => {
    return (dispatch) => {
        return database.ref("users").once("value").then((snapshot) => {
            const users = [];
            snapshot.forEach((snapshotChild) => {
                users.push(
                    snapshotChild.val().posts
                );
                const posts = [];
                users.forEach((user) => {
                    for (const key of Object.keys(user)) {
                        posts.push({
                            id: key,
                            ...user[key]
                        })
                    }
                });
                dispatch(setPublicPosts(posts));
            });
        });
    }
}
