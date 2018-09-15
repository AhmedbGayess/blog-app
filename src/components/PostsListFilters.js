import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByTitle } from "../actions/filters";
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class PostsListFilters extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSortByChange = (e) => {
        if (e.target.value === "date") {
            this.props.sortByDate();
        } else if (e.target.value === "title") {
            this.props.sortByTitle();
        }
    }
    render() {
        return (
            <Form inline>
                <FormGroup>
                <ControlLabel>Search for a post</ControlLabel>{' '}
                    <FormControl
                        type="text"
                        placeholder="..."
                        value={this.props.filters.text}
                        onChange={this.onTextChange}
                    />
                    </FormGroup>{' '}
                    <FormGroup>
                    <ControlLabel>Sort by</ControlLabel>{' '}
                    <FormControl 
                        componentClass="select"
                        value={this.props.filters.sortBy}
                        onChange={this.onSortByChange}
                    >
                        <option value="date">Date</option>
                        <option value="title">Title</option>
                    </FormControl>
                    </FormGroup>
            </Form>
        );
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByTitle: () => dispatch(sortByTitle())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsListFilters);