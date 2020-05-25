import React, { Component } from 'react';
import {
    Navbar,
    Nav
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false })
    render() {
        return (
            <div>
                <Navbar variant="dark" style={{ justifyContent: 'center', backgroundColor: 'rgb(26,188,156,0.8)' }}>
                    <Nav className="justify-content-end" style={{ float: 'left' }}>
                        {this.props.items.map((item, index) => (
                            <Link key={index} to={item.path} style={{ textDecoration: 'none' }}>
                                <Nav.Item className="nav-link" as="li" style={{ color: 'white', fontWeight: 'bold' }}>{item.name}</Nav.Item>
                            </Link>
                        ))}
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComponent;