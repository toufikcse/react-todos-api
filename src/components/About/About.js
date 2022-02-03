import React, { useContext } from 'react';
import {TodoContext} from '../../App';

const About = () => {
    const aboutUs = useContext(TodoContext);
    return (
        <div>
            <h2>{aboutUs}</h2>
        </div>
    );
};

export default About;