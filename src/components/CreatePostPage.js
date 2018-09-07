import React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { createPost } from "../actions/posts";

class CreatePostPage extends React.Component {
    onSubmit = (post) => {
        this.props.createPost(post);
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                create
                <PostForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post))
})

export default connect(undefined, mapDispatchToProps)(CreatePostPage);