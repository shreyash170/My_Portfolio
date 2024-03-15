import React from "react";
import "../Styles/Skills.css";
import checkMark from "../Assests/checkmark.png";

function Article({ skillName, skillExp }) {
  return (
    <>
      <article>
        <img src={checkMark} alt="Experience Icon" className="icon" />
        <div className="skillExp">
          <h3>{skillName}</h3>
          <p>{skillExp}</p>
        </div>
      </article>
    </>
  );
}
export default Article;
