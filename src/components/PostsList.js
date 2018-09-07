import React from "react";
import { connect } from "react-redux";
import PostsListFilters from "./PostsListFilters";
import visiblePosts from "../selectors/posts";
import Post from "./Post";

const PostsList = (props) => (
    <div>
        <PostsListFilters />
        {props.posts.map((post) => {
            return <Post key={post.id} {...post}/>
        })}
    </div>
);

const mapStateToProps = (state) => ({
    posts: visiblePosts(state.posts, state.filters)
});

export default connect(mapStateToProps)(PostsList);