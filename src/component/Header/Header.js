import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header container mb-5">
            <Navbar collapseOnSelect expand="lg" bg="" variant="light">
                <Navbar.Brand href="/home" className="brand">TAKE A TRIP</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className="mr-auto nav-items" variant="secondary">
                        <Nav.Link ><Link className="nav-link" to ="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link className="nav-link" to ="/home">Destination</Link></Nav.Link>
                        <Nav.Link ><Link className="nav-link" to="/">Blog</Link></Nav.Link>
                        <Nav.Link ><Link className="nav-link" to="/">Contact</Link></Nav.Link>
                        <Nav.Link  className="login-button"><Link className="nav-link" to = "/login">{loggedInUser.isSignedIn ?  loggedInUser.name: 'login'}</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;