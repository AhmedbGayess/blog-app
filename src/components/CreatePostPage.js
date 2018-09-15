import React from "react";
import { connect } from "react-redux";
import { Grid } from "react-bootstrap";
import PostForm from "./PostForm";
import { startCreatePost } from "../actions/posts";
import { startSetPublicPosts } from "../actions/publicPosts";

class CreatePostPage extends React.Component {
    onSubmit = (post) => {
        this.props.createPost(post);
        this.props.history.push("/dashboard");
        this.props.setPublicPosts();
    };
    render() {
        return (
            <Grid>
                <PostForm onSubmit={this.onSubmit} />
            </Grid>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => dispatch(startCreatePost(post)),
    setPublicPosts: () => dispatch(startSetPublicPosts())
})

export default connect(undefined, mapDispatchToProps)(CreatePostPage);