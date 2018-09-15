import React from "react";
import { Link } from "react-router-dom";
import { ListGroupItem } from "react-bootstrap";

const PostLink = (props) => (
    <div className="postcard">
        <Link to={props.post.link} className="post-link">
            <ListGroupItem>
                <h2 className="postcard__title">{props.post.title}</h2>
                <p className="postcard__text">{props.post.publishedAt}</p>
            </ListGroupItem>
        </Link>
    </div>
);

export default PostLink



