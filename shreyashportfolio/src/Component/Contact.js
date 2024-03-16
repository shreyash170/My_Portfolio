import React from "react";
import "../Styles/Contact.css";
import emailIcon from "../Assests/email.png";
import linkedinIcon from "../Assests/linkedin.png";

function Contact(){
    return(
        <>
        <div className="contact">
            <p>Get in touch</p>
            <h1>Contact Me</h1>
            <div className="contactInfoUpper">
                <div className="contactInfo">
                    <img src={emailIcon} alt="" className="contactIcon emailIcon"/>
                    <p><a href="mailto:emaple@gmail.com">Emaple@email.com</a></p>
                </div>
                <div className="contactInfo">
                    <img src={linkedinIcon} alt="" className="contactIcon"/>
                    <p><a href="https://www.linkedin.com/" target="_blank">Linkedin</a></p>
                </div>
            </div>
        </div>
        </>
    );
}export default Contact;