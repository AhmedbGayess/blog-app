import React from "react";
import { connect } from "react-redux";
import PostLink from "./PostLink";

const HomePage = (props) => (
    <div>
        {props.posts.map((post) => (
            <PostLink key={post.id} post={post} />
        ))}
    </div>
);

const mapStateToProps = (state) => ({
    posts: state.publicPosts
});

export default connect(mapStateToProps)(HomePage)

