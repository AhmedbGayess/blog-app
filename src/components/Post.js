import React from "react";
import { Link } from "react-router-dom";
import { ListGroupItem } from "react-bootstrap";

const Post = ({ title, publishedAt, id }) => (
    <div className="postcard">
        <Link to={`/edit/${id}`} className="post-link">
            <ListGroupItem>
                <h3 className="postcard__title">{title}</h3>
                <p  className="postcard__text">{publishedAt}</p>
            </ListGroupItem>
        </Link>
    </div>

);

export default Post;