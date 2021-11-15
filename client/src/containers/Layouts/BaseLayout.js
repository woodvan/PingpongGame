import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {   
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
} from 'reactstrap';

class BaseLayout extends Component {
    render() {
        const {children} = this.props
        return <Fragment>
            <Navbar color="dark" dark expand="md">
                <Container>
                <NavbarBrand href="/">Pingpong Game</NavbarBrand>
                <UncontrolledDropdown className="navbar-nav">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/">Admin</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/ranking">Ranking</Link>
                        </NavItem>
                    </Nav>
                </UncontrolledDropdown>
                </Container>
            </Navbar>
            <Container className="mt-5">
                {children}
            </Container>
        </Fragment>
    }
}
const mapStateToProps = state => {
    return {
      user: state.auth.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout)