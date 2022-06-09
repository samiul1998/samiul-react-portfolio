import React from 'react';
import Homepage from '../Homepage/Homepage';
import Nav from '../Nav/Nav';
import Projects from '../Projects/Projects';
import SamiulImage from '../SamiulImage';
import Skills from '../Skills/Skills';
import './Home.css';

const Home = () => {
    return (
        <div>

            <Nav></Nav>
            <SamiulImage></SamiulImage>
            <Homepage></Homepage>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;