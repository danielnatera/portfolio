import React from 'react'
import './Navbar.css'

const Navbar = ({isScrolling}) => {
    // Making that when the navbar is touched, it moves the page to the top
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    };

    return (
        <div className={`navbar ${isScrolling > 2 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop} >
                Luis Natera
            </div>
        </div>
    )
}

export default Navbar