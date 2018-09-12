import React from "react";

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
                error: "The title and the body are both necessary."
            }));
        } else {
            this.setState(() => ({ error: ""}));
            this.props.onSubmit({
                title: this.state.title,
                body: this.state.body
            });
        }
    }; 
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Post Title"
                    onChange={this.onTitleChange}
                    value={this.state.title}
                />
                <textarea
                    placeholder="Post Body"
                    onChange={this.onBodyChange}
                    value={this.state.body}
                />
                <button>Add Post</button>
            </form>
        );
    }
};

