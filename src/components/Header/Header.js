import React from 'react';
import './Header.css';
import { FormControl, InputGroup, Button, Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <div className="banner-container ">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src="../EduX.png"
                                width="50"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            /> EduX - Leading Online Learning
                        </Navbar.Brand>

                        <Nav className="me-0">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/courses">Courses</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/review">Review</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <div className="">
                    <div className="row d-flex banner align-items-center justify-content-center">
                        <div className="col-md-8">
                            <h1 className="title mt-5 text-warning">
                                A World Full Of Knowledge
                            </h1>
                            <p className="text-white fs-5 text-center mt-3">
                                Explore our integrated online learning destination that helps everyone
                                gain the skills they need to compete successfully.
                            </p>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Search courses..."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="text-white bg-success" id="button-addon2">Search</Button>
                            </InputGroup>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;