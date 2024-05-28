import React from "react";
import logo from "/images/airbnb-logo.png";
import group_images from "/images/group-images.png"

const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="Airbnb logo" />
            </nav>
            <img src={group_images} alt="grouped images" />
            <div className="header-texts">
                <h1 className="big-text">Online Experiences</h1>
                <h3 className="small-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3> 
            </div>
        </header>
    )
}

export default Header;