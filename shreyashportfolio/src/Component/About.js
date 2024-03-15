import React from "react";
import "../Styles/About.css";
import aboutPic from "../Assests/about-pic.png";
import experiencePic from "../Assests/experience.png";
import eductaionPic from "../Assests/education.png";

function About() {
  return (
    <>
      <div className="aboutSection">
        <p className="textP1">Get To Know More</p>
        <h1 className="aboutTitle">About Me</h1>
        <div className="aboutContainerF">
          <div className="aboutPicCntnr">
            <img src={aboutPic} alt="Profile" className="aboutPic" />
          </div>
          <div className="aboutDetailsCntnr">
            <div className="aboutContainers">
              <div className="detailsContainer">
                <img
                  src={experiencePic}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>Software Intern</p>
                <p>Peoplelink Unified Communication</p>
                <p>July, 2022 - April, 2023</p>
              </div>
              <div className="detailsContainer">
                <img src={eductaionPic} alt="Education icon" className="icon" />
                <h3> Education</h3>
                <p>Bachelor of Technology in CSE</p>
                <p>GLA University</p>
                <p>2019-2023</p>
              </div>
            </div>
            <div className="textContainer">
              <p>
                Recent graduate with a Bachelor of Technology in Computer
                Science Engineering, equipped with internship experience as an
                iOS developer. Proficient in a diverse range of technical
                skills, including programming languages, web technologies, and
                mobile app development tools. Eager to contribute and grow as a
                software developer in a dynamic professional environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
