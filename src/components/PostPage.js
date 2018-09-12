import React from "react";
import { connect } from "react-redux";

const PostPage = (props) => (
    <div>
        <h1>{props.currentPost.title}</h1>
        <p>{props.currentPost.body}</p>
        <p>{props.currentPost.publishedAt}</p>
    </div>
);

const mapStateToProps = (state, props)  => ({
    currentPost: state.posts.find((post) => post.link === `/posts/${props.match.params.id}`)
});

export default connect(mapStateToProps)(PostPage);