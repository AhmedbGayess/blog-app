import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin, startLogout } from "../actions/auth";
import { Navbar, Nav, NavItem, Modal, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class AppHeader extends React.Component {
    state = {
        show: false
    };
    onLoginLogout = () => {
        if (this.props.loggedIn) {
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
    handleShow = () => {
        if (!this.props.loggedIn) {
            this.setState({ show: true })
        }
    }
    handleHide = () => {
        this.setState({ show: false });
    }
    render() {
        return (
            <div>

                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Anonymous Thoughts</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} onClick={this.onLoginLogout}>
                                {this.props.loggedIn ? "Logout" : "Login"}
                            </NavItem>
                            <LinkContainer to="/dashboard">
                                <NavItem eventKey={2} onClick={this.handleShow}>My Page
                            </NavItem>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            You are not Logged in!
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Please log in to access your page.
          </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.auth.uid
})

const mapDispatchToProps = (dispatch) => ({
    startLogin: dispatch(startLogin),
    startLogout: dispatch(startLogout),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);