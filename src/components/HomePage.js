import React from "react";
import { Grid, Col} from "react-bootstrap";
import HomePagePostsList from "./HomePagePostsList";
import PostsListFilters from "./PostsListFilters";

const HomePage = () => (
    <div>
        <Grid>
            <Col md={4} >
                <div className="homepage-message">
                    <h2 className="homepage-message__title">Write what you want, stay anonymous.</h2>
                    <p className="homepage-message__body">Welcome to Anonymous Thoughts. Here you can express yourself as you want. Write your thoughts, your ideas, your visions, what your feeling or whatever's on your mind, no one will know it's you unless you choose to add your name at the end of your post.</p>
                </div>
            </Col>
            <Col md={8}>
                <div className="homepage-list">
                    <h2 className="homepage-list__title">Thoughts people wrote</h2>
                    <div className="small-container">
                    <PostsListFilters />
                    
                    </div>
                    <HomePagePostsList />
                </div>
            </Col>
        </Grid>
    </div>
);

export default HomePage

