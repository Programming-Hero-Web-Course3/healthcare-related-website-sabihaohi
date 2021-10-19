import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Blog.css'
import blogbanner from '../../images/blogbanner.jpg'
import blog1 from '../../images/blog1.jpg'
import blog2 from '../../images/blog2.jpg'
import blog3 from '../../images/blog3.jpg'
import blog4 from '../../images/blog4.jpg'
import blog5 from '../../images/blog5.jpg'

const Shop = () => {
    return (
        <div>
            <Carousel className="carousel-container">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={blogbanner}
                        alt="First slide"
                    />
                    <Carousel.Caption className="fw-bold text-start">
                        <h1 >Welcome To Our Blog</h1>
                        <p>Some Important Things For You</p>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            <div className="mt-5 mb-5">
                <h2>Our Blogs</h2>
                <Container className="mt-5">
                    <div className="row gy-5 gx-5">
                        <div className="col-12 col-md-6 ">
                            <div className="border p-2">
                                <img className="img-fluid" src={blog1} alt="" />
                                <div className="blog-details mt-4">
                                    <h3>New cross fit course</h3>
                                    <p>Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. </p>
                                    <div className="d-flex fw-bold ">
                                        <p>Date : 08 Jan</p>
                                        <p className="ms-3">Comments : 233</p>
                                        <p className="ms-3">Catagory : Cardio</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6  ">
                            <div className="border p-2">
                                <img className="img-fluid" src={blog2} alt="" />
                                <div className="blog-details mt-4">
                                    <h3>Practising yoga on the sea shore </h3>
                                    <p>Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. </p>
                                    <div className="d-flex fw-bold ">
                                        <p>Date : 08 Feb</p>
                                        <p className="ms-3">Comments : 33</p>
                                        <p className="ms-3">Catagory : Cycling</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6  ">
                            <div className="border p-2">
                                <img className="img-fluid" src={blog3} alt="" />
                                <div className="blog-details mt-4">
                                    <h3>Integer diam gravida fringilla</h3>
                                    <p>Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, </p>
                                    <div className="d-flex fw-bold ">
                                        <p>Date : 08 may</p>
                                        <p className="ms-3">Comments : 3</p>
                                        <p className="ms-3">Catagory : Cycling</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 ">
                            <div className="border p-2">
                                <img className="img-fluid" src={blog4} alt="" />
                                <div className="blog-details mt-4">
                                    <h3>Donec quis ex vel tincidunt</h3>
                                    <p>Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, </p>
                                    <div className="d-flex fw-bold ">
                                        <p>Date : 09 july</p>
                                        <p className="ms-3">Comments : 20</p>
                                        <p className="ms-3">Catagory : Meditation</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6  ">
                            <div className="p-2 border">
                                <img className="img-fluid" src={blog5} alt="" />
                                <div className="blog-details mt-4">
                                    <h3>Best cardio exercise</h3>
                                    <p>Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, </p>
                                    <div className="d-flex fw-bold ">
                                        <p>Date : 08 oct</p>
                                        <p className="ms-3">Comments : 3</p>
                                        <p className="ms-3">Catagory : Cardio</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </Container>
            </div >
        </div >
    );
};

export default Shop;