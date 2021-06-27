import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col text-center text-white">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home' className="text-white">Home</Link></li>
                            <li><a href="#location" className="text-white">Location</a></li>
                            <li><a href="#kittiestext" className="text-white">Meet the Kitties</a></li>
                            <li><Link to="/events" className="text-white">Events</Link></li>
                            <li><Link to="/meowchandise" className="text-white">Meowchandise</Link></li>
                            <li><Link to="/faqs" className="text-white">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="col text-center text-white">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" target="_blank" rel="noreferrer" href="http://instagram.com/"><i className="fa fa-instagram text-white" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" target="_blank" rel="noreferrer" href="http://www.facebook.com/"><i className="fa fa-facebook text-white" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" target="_blank" rel="noreferrer" href="http://twitter.com/"><i className="fa fa-twitter text-white" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" target="_blank" rel="noreferrer" href="http://youtube.com/"><i className="fa fa-youtube text-white" /></a> 
                    </div>
                    <div className="col text-center text-white">
                        <h5>Contact Us</h5>
                        <a role="button" className="btn btn-link text-white" href="tel:+15551231234"><i className="fa fa-phone" /> 1-555-123-1234</a><br />
                        <a role="button" className="btn btn-link text-white" href="mailto:youremail@thecatsmeow.com"><i className="fa fa-envelope-o" /> youremail@thecatsmeow.com</a>
                        <p>2323 21st Avenue South<br></br>
                        Nashville, TN 37212</p>
                    </div>
                </div>
            </div>

            <div class="row mt-5">
            <div class="col-md-12 text-center">
            <p class="copyright">
                This template is made with <i class="fa fa-heart" aria-hidden="true"></i> with the help from: 
                Icons made by Freepik from www.flaticon.com, Photos courtesy of Christine Knappe, Pacto Visual, Jae Park, 
                Kari Shea, Lina Angelov, Karina Vorozheevaand, Erik-Jan Leusink, Jari Hytönen, Kote Puerto, Kari Shea, James Sutton at www.unsplash.com 
                fizkes/ Getty Images www.catster.com, PM_BiscuitsAndGravy on Reddit Katmint™ Feline Wellness on Instagram
                "Crafting with Cat Hair" by Kaori Tsutaya.
            </p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;