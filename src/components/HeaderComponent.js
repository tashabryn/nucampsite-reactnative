import React, { Component }  from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state ={
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col text-left">
                                <i class="fa fa-phone fa-lg"></i><a href="tel:555-123-1234" className="text-white"> 555-123-1234</a> {' '}
                                <i class="fa fa-paper-plane fa-lg"></i><a href="mailto:youremail@thecatsmeow.com" className="text-white"> youremail@thecatsmeow.com</a>
                            </div>
                            <div className="col text-right">
                                <a className="btn btn-social-icon btn-instagram" target="_blank" rel="noreferrer" href="http://instagram.com/"><i className="fa fa-instagram text-white" /></a>{' '}
                                <a className="btn btn-social-icon btn-facebook" target="_blank" rel="noreferrer" href="http://www.facebook.com/"><i className="fa fa-facebook text-white" /></a>{' '}
                                <a className="btn btn-social-icon btn-twitter" target="_blank" rel="noreferrer" href="http://twitter.com/"><i className="fa fa-twitter text-white" /></a>{' '}
                                <a className="btn btn-social-icon btn-google" target="_blank" rel="noreferrer" href="http://youtube.com/"><i className="fa fa-youtube text-white" /></a> 
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar light expand="md">
                    <div className="container">
                        <div>                
                            <NavbarBrand id="text" href="/"><img src="/images/pawprint.png" alt="cat paw" width="75"
                            height="75"></img>{' '}The Cat's Meow</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} />
                        </div>
                        <div>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-item nav-link" to="/home">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <a className="nav-link" href="#location">Location</a>
                                    </NavItem>
                                    <NavItem>
                                        <a className="nav-link" href="#kittiestext">Meet The Kitties</a>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/events">Events</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/donate">Donate</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/meowchandise">Meowchandise</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/faqs">FAQS</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;