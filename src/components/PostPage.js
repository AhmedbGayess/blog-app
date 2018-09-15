import React from "react";
import { connect } from "react-redux";
import {Grid} from "react-bootstrap";

const PostPage = (props) => (
    <Grid className="post">
        <h1 className="post__title">{props.currentPost.title}</h1>
        <p className="post__body">{props.currentPost.body}</p>
        <p className="post__date">{props.currentPost.publishedAt}</p>
    </Grid>
);

const mapStateToProps = (state, props)  => ({
    currentPost: state.publicPosts.find((post) => post.link === `/posts/${props.match.params.id}`)
});

export default connect(mapStateToProps)(PostPage);