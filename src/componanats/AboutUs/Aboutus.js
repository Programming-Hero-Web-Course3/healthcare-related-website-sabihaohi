import React from 'react';
import './Aboutus.css'
import banner from '../../images/aboutbanner.jpg'
import { Carousel, Col, Container, Form, Row } from 'react-bootstrap';
import main from '../../images/aboutmain.png'
import { Button } from 'react-bootstrap';
import trainner1 from '../../images/trainner.jpg'
import trainner2 from '../../images/trainner1.jpg'
import trainner3 from '../../images/trainner2.jpg'
import balance from '../../images/balance.png'
import meditation from '../../images/maditation.png'
import breath from '../../images/breath.png'
import kundalini from '../../images/kundalini.png'
import principle from '../../images/aboutprincple.png'
import { Link } from 'react-router-dom';

const Aboutus = () => {
    return (
        <div>
            <Carousel className="carousel-container">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption className="fw-bold text-dark">
                        <h1>About Us</h1>
                        <p>Welcome To Your choice</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="reason">
                <Container className="w-75">
                    <div className="row">
                        <div className="col-11 col-md-6 mt-5">
                            <h2 className="mt-5">Find the Perfect Place for Your Practice</h2>
                            <p className="mt-4">Be yourself, follow your heart! In yogic sense, the phrase “be yourself – follow your heart” has a deeper meaning. It means aligning not only with the attributes of your personality, but also aligning with your true nature.</p>
                            <Link to="/appointment"> <Button className="button" variant=" bg-dark text-light ms-3">Make Appointment</Button></Link>

                        </div>
                        <div className="col-11 col-md-6">
                            <img className="img-fluid" src={main} alt="" />
                        </div>
                    </div>
                </Container>
            </div>

            <div className="mt-5 trainner p-3">
                <h2 className="mt-5">Dedicated Team</h2>
                <p>Yoga Instructors</p>
                <Container className="p-5">
                    <div className="row gx-5">
                        <div className="col-12 col-md-4 ">
                            <div className="bg-light p-2">
                                <div>
                                    <img className="img-fluid" src={trainner1} alt="" />
                                </div>
                                <div className="mt-2">
                                    <h4>Caroline Tylor</h4>
                                    <p>Practicing yoga in 1994 and has never looked back.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 ">
                            <div className="bg-light p-2">
                                <div>
                                    <img className="img-fluid" src={trainner2} alt="" />
                                </div>
                                <div className="mt-4">
                                    <h4>Melinda VoloVitz</h4>
                                    <p>Her teaching style is so light and accessible to all students.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 ">
                            <div className="bg-light p-2">
                                <div>
                                    <img className="img-fluid" src={trainner3} alt="" />
                                </div>
                                <div className="mt-2">
                                    <h4>velinda VoloVitz</h4>
                                    <p>Practicing yoga in 2000 and has never looked back.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>

            <div className="mt-5 p-5">
                <h2>Our Principles</h2>
                <p>Principles</p>
                <Container className="mt-5">
                    <div className="row">
                        <div className="col-12 col-md-4 text-start">
                            <div className="d-flex">
                                <img src={meditation} alt="" />
                                <div className="ms-5">
                                    <h3>Meditation</h3>
                                    <p>Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity </p>
                                </div>
                            </div>
                            <div className="d-flex mt-5">
                                <img src={balance} alt="" />
                                <div className="ms-5">
                                    <h3>Balance</h3>
                                    <p>Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-4">
                            <img className="img-fluid" src={principle} alt="" />
                        </div>


                        <div className="col-12 col-md-4 text-start">
                            <div className="d-flex">
                                <img src={kundalini} alt="" />
                                <div className="ms-5">
                                    <h3>Kundalini</h3>
                                    <p>Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity </p>
                                </div>
                            </div>

                            <div className="d-flex mt-5">
                                <img src={breath} alt="" />
                                <div className="ms-5">
                                    <h3>Breath</h3>
                                    <p>Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="mt-5 contact p-5">
                <h2>Contact Us</h2>
                <p>We Are Here For You</p>
                <Container>
                    <Row>
                        <Col className="mx-auto" xs={11} md={5} lg={4}>
                            <Form className="mt-4 bg-dark p-4 text-light mx-auto">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>E-mail Address</Form.Label>
                                    <Form.Control type="email" placeholder="E-mail" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Button variant="secondary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Aboutus;