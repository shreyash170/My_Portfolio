import React from "react";
import "../Styles/Skills.css";
import ArticleContainer from "./ArticleContainer";

function Skills() {
  const skillList1 = [
    ["Swift", "Experienced"],
    ["Native iOS", "Experienced"],
    ["JavaScript", "Experienced"],
    ["React Native", "Intermediate"],
  ];
  const skillList2 = [
    ["HTML", "Experienced"],
    ["CSS", "Experienced"],
    ["JavaScript", "Experienced"],
    ["React Js", "Experienced"],
  ];
  return (
    <>
      <div className="skillsSection" id="skills">
        <p className="textP1">Explore My</p>
        <h1 className="title">Skills</h1>
        <div className="exSkillsDetailsCntnr">
          <div className="SkillDetailContainer">
            <ArticleContainer
              containerHeading="Mobile Development"
              skillList={skillList1}
            />
            <ArticleContainer
              containerHeading="Frontend Development"
              skillList={skillList2}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
