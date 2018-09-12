import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin, startLogout } from "../actions/auth";

class Header extends React.Component {
    state = {
        loggedIn: false
    }
    onLoginLogout = () => {
        if (this.state.loggedIn) {
            this.props.startLogout().then(() => {
                this.setState(() => ({
                    loggedIn: false
                }));
            })
        } else {
            this.props.startLogin().then(() => {
                this.setState(() => ({
                    loggedIn: true
                }));
            });
        }
    }
    render() {
        return (
            <div>
                <Link to="/">
                    <h1>Anonymous Thoughts</h1>
                </Link>
                <button onClick={this.onLoginLogout}>{this.state.loggedIn ? "Logout" : "Login"}</button>
                <Link to="/dashboard">My Page</Link>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: dispatch(startLogin),
    startLogout: dispatch(startLogout)
});

export default connect(undefined, mapDispatchToProps)(Header);