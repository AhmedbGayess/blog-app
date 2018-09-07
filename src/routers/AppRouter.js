import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import DashboardPage from "../components/DashboardPage";
import CreatePostPage from "../components/CreatePostPage";
import EditPostPage from "../components/EditPostPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
    <Header />
        <Switch>
            <Route path="/" exact={true} component={DashboardPage} />
            <Route path="/create" component={CreatePostPage} />
            <Route path="/edit/:id" component={EditPostPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
        
    </Router>
);

export default AppRouter;