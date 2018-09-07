import React from "react";
import { Link } from "react-router-dom";

const Post = ({ title, publishedAt, id }) => (
    <Link to={`/edit/${id}`}>
        <div>
            <h3>{title}</h3>
            <p>{publishedAt}</p>
        </div>
    </Link>
);

export default Post;