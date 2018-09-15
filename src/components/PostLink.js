import React from "react";
import { Link } from "react-router-dom";
import { ListGroupItem } from "react-bootstrap";

const PostLink = ({ title, publishedAt, link }) => (
    <div className="postcard">
        <Link to={link} className="post-link">
            <ListGroupItem>
                <h2 className="postcard__title">{title}</h2>
                <p className="postcard__text">{publishedAt}</p>
            </ListGroupItem>
        </Link>
    </div>
);

export default PostLink



