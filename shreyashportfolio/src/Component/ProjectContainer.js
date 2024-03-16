import React from "react";
import "../Styles/Projects.css";

function ProjectContainer({projectTitle,projectImage}) {
  return (
    <div className="containerDetails colorContainer">
      <div className="projectArtContainer">
        <img src={projectImage} alt="Project 1" className="projectImg" />
      </div>
      <h2 className="projectSubtitle projectTitle">{projectTitle}</h2>
      <div className="btnContainer">
        <button className="btn btnColor2 projectBtn">Github</button>
        <button className="btn btnColor2 projectBtn">Live Demo</button>
      </div>
    </div>
  );
}export default ProjectContainer;
