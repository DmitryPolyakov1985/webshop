import React from 'react';
import './Hero.css';
import '../Header/Header.css';

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className="hero-text-container">
                <h1 className='hero-heading'>The gift of happiness</h1>
                <p>Show your gratitude with one of our gift sets, large and small, specially designed to spread joy to someone you love.</p>
                <a href="#" className='btn signup-btn'>Shop Now</a>
            </div>
        </div>
    )
}

export default Hero
