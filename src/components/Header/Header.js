import React, {useState} from 'react';
import './Header.css';
import { BiSearchAlt2 } from "react-icons/bi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = e => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <div className="left-nav-menu">
                <nav className='main-nav'>
                    <ul>
                        <li>Products {isOpen ? (<BsChevronUp onClick={() => handleClick()} style={{ fontSize: '1rem', height: '13px' }} />) : (<BsChevronDown onClick={() => handleClick()} style={{ fontSize: '1rem', height: '13px' }} />)} </li>
                        <li>Collections</li>
                        <li>Gifts</li>
                        <li>Our magazine</li>
                    </ul>
                </nav>
            </div>
            {isOpen && (
                <div className="product-drop-down-menu">
                <ul>
                    <li>Sweaters</li>
                    <li>Scarves</li>
                    <li>Hats</li>
                    <li>Shoes</li>
                    <li>Coats</li>
                </ul>
            </div>
            )}
            <div className="right-nav-menu">
                <ul>
                    <li><span className='search-icon'><BiSearchAlt2 /></span></li>
                    <li>Log In</li>
                    <li><a href="#" className='btn signup-btn'>Sign Up</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
