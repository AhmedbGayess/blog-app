import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { firebase } from "./firebase/firebase";
import AppRouter, {history} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetPosts } from "./actions/posts";
import { login, logout } from "./actions/auth";
import { startSetPublicPosts } from "./actions/publicPosts";
import './styles/styles.scss';

const store = configureStore();
store.dispatch(startSetPublicPosts());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetPosts());
    } else {
        store.dispatch(logout());
        if(history.location.pathname === "/dashboard" || history.location.pathname === "/create" || history.location.pathname.includes("/edit/"))
        history.push("/");
    }
});


ReactDOM.render(jsx, document.getElementById("app"));

