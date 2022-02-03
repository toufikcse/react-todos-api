import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>This is Header</h2>
            <Link to="/home">Home</Link>
            <Link to="/contract">Contract</Link>
            <Link to="/about">About Us</Link>
            <Link to="/chart">Chart</Link>
        </div>
    );
};

export default Header;