import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            
            <h2 id="hi">&nbsp;&nbsp;Gugan V</h2>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software developer</h3>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/Education">Education</Link>
            </nav>
            
        </header>
        
        
    );
};

export default Header;
