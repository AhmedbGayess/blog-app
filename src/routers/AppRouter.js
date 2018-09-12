import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import HomePage from "../components/HomePage";
import DashboardPage from "../components/DashboardPage";
import CreatePostPage from "../components/CreatePostPage";
import EditPostPage from "../components/EditPostPage";
import PostPage from "../components/PostPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
    <Header />
        <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/create" component={CreatePostPage} />
            <PrivateRoute path="/edit/:id" component={EditPostPage} />
            <Route path="/posts/:id" component={PostPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
        
    </Router>
);

export default AppRouter;