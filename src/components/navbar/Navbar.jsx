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

                    <button className="contact-btn" onClick={() => { window.open("https://acrobat.adobe.com/id/urn:aaid:sc:AP:1ee2c3d2-6529-492f-b0bc-98aa59498323", "_blank")}}>
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
