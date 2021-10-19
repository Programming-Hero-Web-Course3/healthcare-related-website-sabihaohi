import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="bg-light">
            <Container>
                <div className="notf-container">
                    <h1>404</h1>
                    <h2>Sorry. Page Not Found :(</h2>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;