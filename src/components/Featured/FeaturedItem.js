import React from 'react';
import './Featured.css';

const FeaturedItem = ({heading, text, image}) => {
    return (
            <div className="item-container">
                <div className="item-text">
                    <h2>{heading}</h2>
                    <div>
                        <p>{text}</p>
                    </div>
                    <div>
                        <a href="#" className='btn'>Purchase Now</a>
                    </div>
                </div>
                <div className="item-image">
                    <img src={image} alt=""/>
                </div>
            </div>
    )
}

export default FeaturedItem
