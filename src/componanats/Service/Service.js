import React from 'react';
import { useParams } from 'react-router';

const Service = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h1>This is Course {serviceId}</h1>

        </div>
    );
};

export default Service;