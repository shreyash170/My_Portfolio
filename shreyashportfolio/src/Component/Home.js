import React, { useState } from 'react';
import "../Styles/Home.css";

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
      };


    return (
        <>
        <div className = 'flexRow desktopNav'>
            <div className = 'myName'>Roronoa Zoro </div>
            <div className = ''>
                <ul className = 'flexRow navLinks'>
                    <li><a href = '/'>ABOUT</a></li>
                    <li><a href = '/'>SKILLS</a></li>
                    <li><a href = '/'>PROJECTS</a></li>
                    <li><a href = '/'>CONTACT</a></li>
                </ul>
            </div>
        </div>
        <div className={`flexRow hamburgerFix hamburgerNav ${isOpen ? 'open' : ''}`}>
        <div className = 'myName'>Roronoa Zoro </div>
        <div className = 'hamburgerMenu'>
            <div className = {`hamburgerIcon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className = {`menuLinks ${isOpen ? 'open' : ''}`}>
                <li><a href = '#about' onClick={toggleMenu}>About</a></li>
                <li><a href = '/' onClick={toggleMenu}>Experience</a></li>
                <li><a href = '/' onClick={toggleMenu}>Projects</a></li>
                <li><a href = '/' onClick={toggleMenu}>Contact</a></li>
            </div>
        </div>
        </div>

        </>
    );
  }
  
  export default Home;
