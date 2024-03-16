import React from "react";
import "../Styles/Footer.css";

function Footer(){
    return(
        <>
         <footer>
            <div className="navLinkContainer">
            <ul className = 'flexRow footerLink'>
                    <li><a href = '/'>ABOUT</a></li>
                    <li><a href = '/'>SKILLS</a></li>
                    <li><a href = '/'>PROJECTS</a></li>
                    <li><a href = '/'>CONTACT</a></li>
                </ul>
            </div>
            <p>COPYRIGHT &#169; ALL RIGHT RESERVED</p>
         </footer>
        </>
    )
}export default Footer;