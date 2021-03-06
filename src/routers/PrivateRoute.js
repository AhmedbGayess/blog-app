import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
    loggedIn,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            loggedIn ? (
                <Component {...props}/>
            ) : (
                <Redirect to="/" />
            )
        )}/>
    );

const mapStateToProps = (state) => ({
    loggedIn: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);