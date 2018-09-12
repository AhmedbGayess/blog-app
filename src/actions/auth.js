import { firebase, provider } from "../firebase/firebase";

export const login = (uid) => ({
    type: "LOGIN",
    uid
});

export const startLogin = (uid) => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(provider);
    };
};

export const logout = () => ({
    type: "LOGOUT"
});

export const startLogout = () => {
    return (dispatch) => {
        return firebase.auth().signOut();
    };
};