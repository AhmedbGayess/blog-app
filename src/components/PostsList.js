import React from "react";
import { connect } from "react-redux";
import { ListGroup } from "react-bootstrap";
import visiblePosts from "../selectors/posts";
import Post from "./Post";

const PostsList = (props) => (
  <div>
    {
      props.posts.length === 0 ? (
        <div>
          <span>You have no posts.</span>
        </div>
      ) : (
          <ListGroup>
            {props.posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </ListGroup>
        )
    }
  </div>
);

const mapStateToProps = (state) => ({
  posts: visiblePosts(state.posts, state.filters)
});

export default connect(mapStateToProps)(PostsList);