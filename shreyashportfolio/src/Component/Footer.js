import React from "react";
import "../Styles/Footer.css";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <>
      <footer>
        <div className="navLinkContainer">
          <ul className="flexRow footerLink">
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
        <p>COPYRIGHT &#169; ALL RIGHT RESERVED</p>
      </footer>
    </>
  );
}
export default Footer;
