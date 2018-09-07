import React from "react";
import { connect } from "react-redux";
import { editPost, deletePost } from "../actions/posts";
import PostForm from "./PostForm";

class EditPostPage extends React.Component {
    render() {
        return (
            <div>
                edit
                <PostForm />
            </div>
        );
    }
};

const mapStateToProps = (state)  => ({

});

const mapDispatchToProps = (dispatch) => ({
    editPost: (id, updates) => dispatch(editPost(id, updates)),
    deletePost: ({id}) => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);