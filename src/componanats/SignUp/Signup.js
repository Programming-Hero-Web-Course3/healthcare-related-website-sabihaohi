import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Signup.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const Signup = () => {
    const { setEmail, setPassword, setUserName, setUser, setError, signInWithGoogle, handleCreateNewUser, verifyEmail, updateUserName, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                setUser(result.user);
                setError('');
                history.push(redirect_uri);
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePassChange = (event) => {
        setPassword(event.target.value)
    }
    const handleNameChange = (event) => {
        setUserName(event.target.value)
    }
    const onSubmit = (data) => {
        handleCreateNewUser()
            .then((userCredential) => {
                setUser(userCredential.user);
                setError('');
                verifyEmail();
                updateUserName();
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    return (
        <Container fluid className="signup-full-container">
            <Container>
                <Row>
                    <Col md={12} lg={5} className="mt-3 mt-lg-0 p-3 p-lg-5 bg-light ms-auto">
                        <Row>
                            <Col xs={6}>
                                <img src={logo} alt="" className="img-fluid" />
                            </Col>
                            <Col xs={6} className="d-flex align-items-center justify-content-end">
                                <h2 className="fw-bold ms-lg-4 text-right">SIGN UP</h2>
                            </Col>
                        </Row>
                        <h6 className="mb-5 ms-lg-4">Sign up and get one time free seviece.</h6>
                        <button className="btn-signInMethod fw-bold" onClick={handleGoogleSignIn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg> Sign up with Google</button>

                        <div className="hr-div" height="20">
                            <span>
                                Or Sign Up with Email
                            </span>
                        </div>


                        {/* Sign Up With Email Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-3 mt-lg-4">

                            <label htmlFor="fullName" className="fw-bold">Full Name*</label>
                            <input className="input-field" type="text" {...register("fullName", { required: true })} placeholder="Full Name" onBlur={handleNameChange} />
                            {errors.fullName && <p className="text-danger input-error-message">This field is required.</p>}

                            <label htmlFor="email" className="fw-bold">Email*</label>
                            <input className="input-field" type="email" {...register("email", { required: true })} placeholder="example@email.com" onBlur={handleEmailChange} />
                            {errors.email && <p className="text-danger input-error-message">This field is required</p>}

                            <label htmlFor="password" className="fw-bold">Password*</label>
                            <input className="input-field" type="password" {...register("password", { required: true, minLength: 6 })} placeholder="minimum 6 characters" onBlur={handlePassChange} />
                            {errors.password && <p className="text-danger input-error-message">{errors.password.type === 'required' ? <span>This field is required</span> : <span>Minimum six characters long</span>}</p>}


                            <button type="submit" className="btn-signInMethod signup-submit">Sign Up</button>
                        </form>
                        <h6 className="text-center">Already have an account? <Link to="/login">Log In</Link></h6>
                    </Col>
                </Row>
            </Container>
        </Container >
    );
};

export default Signup;