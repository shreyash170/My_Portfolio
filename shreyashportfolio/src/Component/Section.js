import React from 'react';
import "../Styles/Section.css";
import profilePic from "../Assests/profile-pic.png";
import resumePDF from "../Assests/Shreyash Gupta(Updt)_Resume.pdf";
import linkedin from "../Assests/linkedin.png";
import github from "../Assests/github.png";

function Section  () {



    return(
        <>
        <div className='profile'>
            <div className='sectionPic'>
                <img src={profilePic} alt="Hero"/>
            </div>
            <div className='sectionText'>
                <p className='textP1'>Hello,I'm</p>
                <h1 className='sectionTitle'>Roronoa Zoro</h1>
                <p className='textP2'>Mobile Developer | Frontend Developer</p>
                <diV className='btnContainer'>
                    <a href={resumePDF} target="_blank"
                    rel="noreferrer"><button className='btn btnColor2'>Download CV</button></a>
                    <a href='./' target="_blank"
                    rel="noreferrer"><button className='btn btnColor1'>Contact Info</button></a>
                </diV>
                <div className='socialCntnr'>
                <a href='https://www.linkedin.com/' target="_blank"><img src={linkedin} alt="My Linkedin profile" className='icon'/></a>
                <a href='https://www.github.com/' target="_blank"><img src={github} alt="My Github profile" className='icon'/></a>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Section;