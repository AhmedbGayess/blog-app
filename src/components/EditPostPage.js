import React from "react";
import { connect } from "react-redux";
import { editPost, deletePost } from "../actions/posts";
import PostForm from "./PostForm";

class EditPostPage extends React.Component {
    onSubmit = (post) => {
        this.props.editPost(this.props.currentPost.id, post);
        this.props.history.push("/");
    }
    onDelete = () => {
        this.props.deletePost({id: this.props.currentPost.id});
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                edit
                <PostForm 
                    currentPost={this.props.currentPost}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onDelete} >Delete Post</button>
            </div>
        );
    }
};

const mapStateToProps = (state, props)  => ({
    currentPost: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    editPost: (id, updates) => dispatch(editPost(id, updates)),
    deletePost: (data) => dispatch(deletePost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);