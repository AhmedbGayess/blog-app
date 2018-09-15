import React from "react";
import { connect } from "react-redux";
import { ListGroup } from "react-bootstrap";
import visiblePosts from "../selectors/posts";
import PostLink from "./PostLink";

const HomePagePostsList = (props) => (
    <ListGroup>
        {props.posts.map((post) => {
            return <PostLink key={post.id} {...post} />;
        })}
    </ListGroup>

);

const mapStateToProps = (state) => ({
    posts: visiblePosts(state.publicPosts, state.filters)
});

export default connect(mapStateToProps)(HomePagePostsList);
