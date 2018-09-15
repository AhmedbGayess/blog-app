import React from "react";
import { Form, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.currentPost ? props.currentPost.title : "",
            body: props.currentPost ? props.currentPost.body : "",
            error: ""
        }
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    }
    onBodyChange = (e) => {
        const body = e.target.value;
        this.setState(() => ({ body }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.body) {
            this.setState(() => ({
                error: "Please fill both the title and the body."
            }));
        } else {
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
                title: this.state.title,
                body: this.state.body
            });
        }
    };
    render() {
        return (
            <div>
                <div>
                    <h2>Your post</h2>
                    <p>Write whatever you want, whatever's on your mind, whatever you feel, no one will know it's you unless you add your name in the end, which you are free to choose to.</p>
                </div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <ControlLabel>Post Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Choose a meaningful title for your post"
                            onChange={this.onTitleChange}
                            value={this.state.title}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Post Body</ControlLabel>
                        <FormControl componentClass="textarea"
                            placeholder="Post Body"
                            onChange={this.onBodyChange}
                            value={this.state.body}
                            style={{ height: "500px" }}
                        />
                    </FormGroup>
                    <Button type="submit">Add Post</Button>
                    <p className="post__date">{this.state.error}</p>
                </Form>
            </div>

        );
    }
};

