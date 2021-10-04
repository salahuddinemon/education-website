import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import './Contact.css'

// display contact form 
const Contact = () => {
    return (
        <div className="contact-container">
            <Form>
                <h3>Keep in touch with us</h3>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="name" placeholder="Enter your name" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="phone" placeholder="Enter phone number" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control className="py-5" placeholder="Say Somthing" />
                </Form.Group>
                <Button variant="primary">Submit</Button>{' '}
            </Form>
        </div>
    );
};

export default Contact;