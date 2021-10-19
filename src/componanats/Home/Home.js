import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Home.css';
import banner1 from '../../images/banner3.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner1.jpg'
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import Class from '../Class/Class';
import reason from '../../images/reason-pic.png'
import logo from '../../images/logo.png'


const Home = () => {
    // use state
    const [classes, setClasses] = useState([])

    // use effect
    useEffect(() => {
        fetch('./home-classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))

    }, [])
    console.log(classes)

    return (
        <div>
            {/* bannner part */}
            <Carousel className="carousel-container">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="fw-bold text-start">
                        <h1>Meditation</h1>
                        <p className="ms-5">Practice For All</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="fw-bold text-start">
                        <h1>Inspiration</h1>
                        <p className="ms-5 text-dark">For Joyful Living</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="fw-bold text-start">
                        <h1>Essential Yoga</h1>
                        <p className="ms-5">For Busy Person</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            {/* 2nd part */}
            <div className="mt-5 mb-5">
                <div className="mt-5 mb-5">
                    <h1>Yoga is Your Natural State</h1>

                    <div className="hr-div" height="20">
                        <span>
                            <img className="logo" src={logo} alt="" />
                        </span>
                    </div>
                    <br /><br />

                    <p className="text-secondary fs-5">Yoga Studio includes 8 classes. Choose your level and focus to find the
                        perfect class for you.</p>
                </div>

                <Container>
                    <div className="mt-5">
                        <div className="row ">
                            <div className="col-11 col-md-4 ">
                                <img className="yoga-image" src={icon1} alt="" />
                                <h3 className="mt-4">Choose the Class</h3>
                                <p>A wide variety of classes for all ages</p>
                            </div>

                            <div className="col-11 col-md-4">
                                <img className="yoga-image" src={icon2} alt="" />
                                <h3 className="mt-4">Yoga Challenge</h3>
                                <p>Yoga has the power to discover potential</p>
                            </div>

                            <div className="col-11 col-md-4 ">
                                <img className="yoga-image" src={icon3} alt="" />
                                <h3 className="mt-4">Your First Visit</h3>
                                <p>Yoga Fit is where you van find balance...</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="mt-5 mb-5">
                <h1 className="fw-bold">Our Classes</h1>
                <p className="text-secondary fs-5">Choose Yor Level and Focus</p>

                <Container>
                    <div className="mt-5 mb-5 row gy-5">
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

            <div className="mt-5 mb-4">
                <h1>The Main Reasons to PracticeYoga:</h1>
                <div className="reason p-1 mt-5">
                    <Container>
                        <div className="row mt-3 ">
                            <div className="col-12 col-md-4 mt-5">
                                <div>
                                    <h3>Good for Health</h3>
                                    <p>Yoga Fit is where you can find balance, harmony and energy. Yoga Fit is where you can find balance, harmony and energy.</p>
                                </div>
                                <div className="mt-5">
                                    <h3>Good for Body</h3>
                                    <p>Yoga Fit is where you can gain balance of metabolism. Maintain healthy weight, beautiful strong body and control
                                        your hunger.</p>
                                </div>
                            </div>


                            <div className="col-12 col-md-4 reason-img">
                                <img className="img-fluid" src={reason} alt="" />
                            </div>


                            <div className="col-12 col-md-4 mt-5">
                                <div>
                                    <h3>Good for Cardio</h3>
                                    <p>Good for Cardio
                                        Yoga Fit iimproves blood circulation and decreases blood pressure of the body. A lower pulse rate helps your heart.</p>
                                </div>
                                <div className="mt-5">
                                    <h3>Good for Breathing</h3>
                                    <p>Yoga Fit improves your raspiratory by helping your lungs work more efficiently. Breathing excercises are a</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Home;