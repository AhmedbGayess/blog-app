import React from "react";
import { Link } from "react-router-dom";
import PostsList from "./PostsList";

const DashboardPage = () => (
    <div>
        <Link to="/create">New Post</Link>
        <PostsList />
    </div>
);

export default DashboardPage;
