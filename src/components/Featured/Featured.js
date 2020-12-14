import React from 'react';
import './Featured.css';

// components
import './FeaturedItem';
import FeaturedItem from './FeaturedItem';

const Featured = ({data}) => {
    // console.log(data);
    return (
        <div className='featured-items-container'>
            {data.map((item) => {
                return <FeaturedItem key={item.id} {...item} />
            })}
        </div>
    )
}

export default Featured
