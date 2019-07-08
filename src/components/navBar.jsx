import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <img src={require("../resources/img/logo-white.png")} alt="Pola's logo" className="logo" />
            <img src={require("../resources/img/logo.png")} alt="Pola's logo" className="logo-black" />
            <ul className="main-nav js--main-nav">
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#location">Location</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#developers">Creators</a></li>
            </ul>
            <a className="mobile-nav-icon js--nav-icon">
                <i className="fas fa-bars"></i>
            </a>
        </nav>
    );
}

export default NavBar;