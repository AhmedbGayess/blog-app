import React from "react";
import { connect } from "react-redux";
import PostsListFilters from "./PostsListFilters";
import PostsList from "./PostsList";
import { Grid, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const DashboardPage = (props) => (
    <Grid>
        <div>
            <LinkContainer to="/create">
                <Button className="post-button">Create a new post</Button>
            </LinkContainer>
            {props.postsNumber > 0 ? <p>You currently have {props.postsNumber} post(s)</p> : ""}
        </div>
        <div className="small-container">
            <PostsListFilters />
        </div>
        <PostsList />
    </Grid>
);

const mapStateToProps = (state) => ({
    postsNumber: state.posts.length
});

export default connect(mapStateToProps)(DashboardPage);
