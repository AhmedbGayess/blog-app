import React from "react";
import { Link } from "react-router-dom";

const PostLink = (props) => (
    <div>
        <Link to={props.post.link}>
            <h1>{props.post.title}</h1>
            <p>{props.post.publishedAt}</p>
        </Link>
    </div>
);

export default PostLink



