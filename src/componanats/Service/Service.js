import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import details from '../../images/service-personal.jpg'

const Service = (props) => {
    const { img, title, description, price, duration, rules } = props.service;
    console.log(title);
    return (
        <div>
            <div className="mt-5 mb-5">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <img className="img-fluid" src={details} alt="" />
                        </Col>
                        <Col className="mt-5 text-start" xs={12} md={6}>
                            <h2>About Private Lessons</h2>
                            <p>It’s time to roll out your yoga mat and discover the combination of physical and mental exercises that for thousands of years have hooked yoga practitioners around the globe. The beauty of yoga is that you don’t have to be a yogi or yogini to reap the benefits. Whether you are young or old, overweight or fit, yoga has the power to calm the mind and strengthen the body. Don’t be intimidated by yoga terminology, fancy yoga studios and complicated poses. Yoga is for everyone.</p>
                        </Col>
                    </Row>
                </Container>


            </div>
            <hr />

            <div className="col-12 col-md-4 mx-auto">
                <div className="text-align-center ">
                    <div className="course shadow-sm ">
                        <div className="course-image img-fluid">
                            <img src={img} alt="" />
                        </div>
                        <div className="mt-4 p-4">
                            <h3 className="fw-bold"> {title}</h3>
                            <p className=""> {description}</p>
                            <p className="fw-bold"> Price : {price} </p>
                            <p className="fw-bold"> Duration : {duration} Days</p>
                            <p className="fw-bold"> Days : {rules}</p>
                            <Link to="/appointment-confirm"><button className="btn-dark p-2 border-none fw-bold button">Confirm Enroll Course</button></Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Service;