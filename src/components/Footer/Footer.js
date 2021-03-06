import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        // show header text & button into header image
        <div>
            <hr />
            <div className="my-5">
                <h3 className="text-center">Subscribe Newsletter</h3>
                <InputGroup className="mb-3 w-50 mx-auto">
                    <FormControl
                        placeholder="Enter your email id"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <div className="mx-2">
                        <Button variant="primary" size="md">Subscribe</Button>{' '}
                    </div>
                </InputGroup>
            </div>

            {/* display contact info */}
            <footer className="footer-container text-white py-4">
                <div className="footer-info d-flex justify-content-center">
                    <div className="ms-5">
                        <h3 className="text-warning">US Office</h3>
                        <p>4761 Jackeline Corner Apt. 488 <br /> 593-665-7572 <br />edux@email.com</p>
                    </div>

                    {/* display social icon */}
                    <div className="me-5">
                        <h3 className="text-warning">Follow Us On</h3>
                        <div className="d-flex icon-container">
                            <div className="icon">
                                <a href="http://instagram.com/"> <FontAwesomeIcon icon={faInstagramSquare} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                            </div>
                            <div className="icon">
                                <a href="http://youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://facebook.com/"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                {/* display copyright  */}
                <p className="mt-2 mb-2 bg-dark">
                    <small><FontAwesomeIcon icon={faCopyright} /> 2021 EduX. All rights reserved.</small>
                </p>
            </footer>
        </div>
    );
};

export default Footer;