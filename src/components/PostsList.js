import React from "react";
import { connect } from "react-redux";
import visiblePosts from "../selectors/posts";
import Post from "./Post";

const PostsList = (props) => (
    <div>
    {
        props.posts.length === 0 ? (
          <div>
            No posts to show
          </div>
        ) : (
            props.posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })
          )
      }
    </div>
);

const mapStateToProps = (state) => ({
    posts: visiblePosts(state.posts, state.filters)
});

export default connect(mapStateToProps)(PostsList);