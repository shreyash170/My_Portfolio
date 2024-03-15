import React from "react";
import "../Styles/Skills.css";
import checkMark from "../Assests/checkmark.png";
import Article from "./Article";
// import ArticleContainer from "./ArticleContainer";

function ArticleContainer({ containerHeading, skillList }) {
  const skill = skillList.map((skill) => (
    <Article skillName={skill[0]} skillExp={skill[1]} />
  ));

  return (
    <>
      <div className="cntnrDetails">
        <h2 className="skillsSubTitle">{containerHeading}</h2>
        <div className="articleContainer">{skill}</div>
      </div>
    </>
  );
}
export default ArticleContainer;
