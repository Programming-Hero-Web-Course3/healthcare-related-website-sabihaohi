import React from 'react';
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap';
import './Appointment.css'
import AppointmentImg from '../../images/appointment.jpg'
import { Link } from 'react-router-dom';

const Appointment = () => {
    return (
        <div>
            <h2 className="mt-4">Reservation</h2>

            <div className="reason">
                <Container>
                    <div className="row p-3 ">
                        <div className="col-12 col-md-7">
                            <Form className=" w-75 mx-auto mb-5">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="fw-bold">Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="fw-bold" >Age</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Age" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className="fw-bold">Address</Form.Label>
                                    <Form.Control type="address" placeholder="Enter your address" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className="fw-bold">Phone Number</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Your Number" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className="fw-bold">Choose from our service</Form.Label>
                                    <FloatingLabel controlId="floatingSelect">
                                        <Form.Select aria-label="Floating label select example">
                                            <option>Open this select menu</option>
                                            <option value="1">Yoga</option>
                                            <option value="2">Meditation</option>
                                            <option value="3">Brething</option>
                                            <option value="3">Total Body</option>

                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>



                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className="fw-bold">Your Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </Form.Group>

                                <Link to="/home"><Button variant="secondary" type="submit">
                                    Submit
                                </Button></Link>
                            </Form>

                        </div>
                        <div className="col-12 col-md-5">
                            <img src={AppointmentImg} alt="" />
                            <div className="w-100">
                                <h4 className="fw-bold">Gift a Yoga Pack</h4>
                                <p className="text-start w-50 mx-auto">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias provident destiny is about voles.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>


        </div>
    );
};

export default Appointment;