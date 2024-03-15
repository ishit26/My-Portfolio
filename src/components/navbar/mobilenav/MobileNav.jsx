import React from 'react';
import './MobileNav.css';

const MobileNav = ({isOpen, toggleMenu}) => {
  return <>
    <div 
    className={`mobile-menu ${isOpen ? "active" : " "}`}  
    onClick={toggleMenu}>

        <div className="mobile-menu-container">
            <img className="logo" src="./assets/main-logo.png" alt="mainlogo" />

            <ul>
                <li>
                    <a className='menu-item' href="">Home</a>
                </li>

                <li>
                    <a className='menu-item' href="">Skills</a>
                </li>

                <li>
                    <a className='menu-item' href="">Experience</a>
                </li>

                <li>
                    <a className='menu-item' href="">Contact Me</a>
                </li>

                <button className="contact-btn" onClick={() => { window.open("https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:36577c13-6216-36e0-8d65-eb0af9b560e5", "_blank")}}>
                    Resume
                </button>
            </ul>
        </div>
    </div>
  </>
}

export default MobileNav;