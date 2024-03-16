import React, { useState } from "react";
import "../Styles/Home.css";
import { HashLink as Link } from "react-router-hash-link";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <div className="flexRow desktopNav">
        <div className="myName">MyPortfolio</div>
        <div className="">
          <ul className="flexRow navLinks">
            <li>
              <Link to="#about">ABOUT</Link>
            </li>
            <li>
              <Link to="#skills">SKILLS</Link>
            </li>
            <li>
              <Link to="#project">PROJECTS</Link>
            </li>
            <li>
              <Link to="#contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`flexRow hamburgerFix hamburgerNav ${isOpen ? "open" : ""}`}
      >
        <div className="myName">Roronoa Zoro </div>
        <div className="hamburgerMenu">
          <div
            className={`hamburgerIcon ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menuLinks ${isOpen ? "open" : ""}`}>
            <li>
              <Link to="#about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="#skills" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="#project" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="#contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
