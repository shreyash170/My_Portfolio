import React from "react";
import "../Styles/Projects.css";
import project1 from "../Assests/project-1.png";
import project2 from "../Assests/project-2.png";
import project3 from "../Assests/project-3.png";
import ProjectContainer from "./ProjectContainer";

function Projects() {
  return (
    <>
      <div className="projects" id="project">
        <p className="textP1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="expDetailsContainer">
          <div className="projectAboutContainer">
            <ProjectContainer
              projectTitle={"Project 1"}
              projectImage={project1}
            />
            <ProjectContainer
              projectTitle={"Project 2"}
              projectImage={project2}
            />
            <ProjectContainer
              projectTitle={"Project 3"}
              projectImage={project3}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
