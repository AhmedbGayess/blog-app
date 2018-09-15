import React from "react";
import { connect } from "react-redux";
import { Grid, Button } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import { startEditPost, startDeletePost } from "../actions/posts";
import { startSetPublicPosts } from "../actions/publicPosts";
import PostForm from "./PostForm";

class EditPostPage extends React.Component {
    onSubmit = (post) => {
        this.props.editPost(this.props.currentPost.id, post);
        this.props.history.push("/dashboard");
        this.props.setPublicPosts();
    }
    onDelete = () => {
        this.props.deletePost({ id: this.props.currentPost.id });
        this.props.history.push("/dashboard");
        this.props.setPublicPosts();
    }
    render() {
        return (
            <div>
                <Grid>
                    <LinkContainer to={this.props.currentPost.link}>
                        <Button className="post-button">Post Preview</Button>
                    </LinkContainer>
                    <PostForm
                        currentPost={this.props.currentPost}
                        onSubmit={this.onSubmit}
                    />
                    <Button onClick={this.onDelete}>Delete Post</Button>
                </Grid>

            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    currentPost: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    editPost: (id, updates) => dispatch(startEditPost(id, updates)),
    deletePost: (data) => dispatch(startDeletePost(data)),
    setPublicPosts: () => dispatch(startSetPublicPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
