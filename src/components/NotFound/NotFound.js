import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>404</h2>
            <h4>Not Found!</h4>
            <h5>This page is not avilable</h5>
            <Link to="/home">
            <Button variant='primary'>go to Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;