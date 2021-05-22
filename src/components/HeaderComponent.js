import React, { Component }  from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <i class="fa fa-phone fa-lg"></i><a href="tel:615-123-4567"> 615-123-4567</a>
                                <i class="fa fa-paper-plane fa-lg"></i><a href="mailto:youremail@thecatsmeow.com"> youremail@thecatsmeow.com</a>
                            </div>
                            <div class="col text-right">
                                <a href="http://facebook.com/"> <i class="fa fa-facebook text-white fa-lg"></i></a>
                                <a href="http://instagram.com/"> <i class="fa fa-instagram text-white fa-lg"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="container">
                        <div className="row">
                            <div className="col">                                    
                                <Navbar dark expand="lg" sticky="top">

                                    <NavbarBrand id="text" href="/"><img src="/images/pawprint.png" alt="cat paw" width="75"
                                    height="75"></img>The Cat's Meow</NavbarBrand>
                                    <NavbarToggler onClick={this.toggleNav} />

                                    <Collapse navbar>
                                        <Nav navbar>
                                            <NavItem>
                                                <NavLink className="nav-item nav-link" to="/home">Home</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="#location">Location</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="#meetkitties">Meet The Kitties</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/events">Events</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/donate">Donate</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/">Meowchandise</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/">FAQS</NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

            </React.Fragment>
        );
    }
}

export default Header;