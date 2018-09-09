import React from "react";
import { Link } from "react-router-dom";
import PostsListFilters from "./PostsListFilters";
import PostsList from "./PostsList";

const DashboardPage = () => (
    <div>
        <Link to="/create">New Post</Link>
        <PostsListFilters />
        <PostsList />
    </div>
);

export default DashboardPage;
