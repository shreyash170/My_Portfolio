import React from 'react';
import "../Styles/Section.css";
import profilePic from "../Assests/profile-pic.png"

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
                <p className='textP2'>Sworsdman</p>
            </div>
            
        </div>
        </>
    );
}

export default Section;