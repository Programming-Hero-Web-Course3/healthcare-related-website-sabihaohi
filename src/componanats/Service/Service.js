import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { img, title, description, price, duration, rules } = props.service;
    console.log(title);
    return (

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
                        <Link to="/home"><button className="btn-dark p-2 border-none fw-bold button">Confirm Enroll Course</button></Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Service;