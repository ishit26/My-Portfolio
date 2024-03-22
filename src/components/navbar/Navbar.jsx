import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './mobilenav/MobileNav';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    
  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

        <nav className="nav-wrapper"> 
            <div className="nav-content">
                <img className="logo" src="./assets/main-logo.png" alt="logo" />

                <ul>
                    <li>
                        <a className="menu-item" href='#Banner'>Home</a>
                    </li>
                    <li>
                        <a className="menu-item" href='#skills'>Skills</a>
                    </li>
                    <li>
                        <a className="menu-item" href='#workexperience'>Experience</a>
                    </li>
                    <li>
                        <a className="menu-item" href='#contactme'>Contact Me</a>
                    </li>

                    <button className="contact-btn" onClick={() => { window.open("https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:1c01ccfa-525f-3182-a99e-92bfda73c2d6", "_blank")}}>
                        Resume
                    </button>
                </ul>

                <button className="menu-btn" onClick={toggleMenu}>
                    <span className={"material-symbols-outlined"}
                    style={{fontSize: "1.8rem"}}>
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar;
