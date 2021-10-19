
import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Classes.css'
import classImg from '../../images/classes.jpg'
import service1 from '../../images/service1.png'
import service2 from '../../images/service2.png'
import service3 from '../../images/service3.jpg'
import service4 from '../../images/service4.jpg'
import Class from '../Class/Class';

const Classes = () => {
    // use state
    const [classes, setClasses] = useState([])

    // use effect
    useEffect(() => {
        fetch('./classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))

    }, [])
    return (
        <div>
            <Carousel className="carousel-container">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={classImg}
                        alt="First slide"
                    />
                    <Carousel.Caption className="fw-bold text-start">
                        <h1 className="text-dark">Our Classes</h1>
                        <p className="text-dark">Make Your Body Perfect</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            <div className="mt-5 mb-5">
                <Container>
                    <div className="row gx-5">
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-6">
                                    <img className="img-fluid" src={service1} alt="" />
                                </div>

                                <div className="col-6">
                                    <img className="img-fluid" src={service2} alt="" />

                                </div>

                                <div className="col-6">
                                    <img className="img-fluid" src={service3} alt="" />
                                </div>

                                <div className="col-6">
                                    <img className="img-fluid" src={service4} alt="" />
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-6  text-start">
                            <h1 className="fw-bold">We Provide Great yoga Services for You</h1>

                            <p>Yoga Fit is where you can find balance, harmony and energy. Yoga Fit is where you can find balance, harmony and energy.Yoga Fit is where you can gain balance of metabolism. Maintain healthy weight, beautiful strong body and control
                                your hunger.</p>

                            <div className="text-start fw-bold mt-5">
                                <p>Professionals Advance Equipment</p>
                                <p>The Result That You Will Imediatly Notice</p>
                                <p>Professional Tranning For You</p>
                                <p>Flexible Hours Of Tranning</p>

                            </div>
                        </div>
                    </div>

                </Container>
            </div>
            <hr />

            <div className="mt-5 mb-5">
                <h1 className="fw-bold">Our Classes</h1>
                <p className="text-secondary fs-5">Choose Yor Level and Focus</p>

                <Container>
                    <div className="mt-2 mb-5 row gy-5">
                        {
                            classes.map(classes => <Class
                                class={classes}
                                key={classes.id}
                            >

                            </Class>)
                        }
                    </div>
                </Container>
            </div>


        </div>
    );
};

export default Classes;