import { Element } from "react-scroll";
import "./Skill.css";
import { Card } from "@mui/material";
export function Skills() {
  return (
    <Element className="skill-con" id="skills">
      <div>
        <h2>Skills & Tools</h2>
      </div>
      <div className="skill-card-container">
        <div id="skill-cards">
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <p>JavaScript</p>
        </div>
        <div id="skill-cards">
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <p>React</p>
        </div>
        <div id="skill-cards">
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <p>Redux</p>
        </div>
        <div id="skill-cards">
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <p>MongoDB</p>
        </div>
        <div id="skill-cards">
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <p>Git</p>
        </div>
        <div id="skill-cards">
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <p>VS Code</p>
        </div>
        <div id="skill-cards">
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <p>HTML5</p>
        </div>
        <div id="skill-cards">
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <p>CSS3</p>
        </div>
        <div id="skill-cards">
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <p>MaterialUI</p>
        </div>
      </div>
    </Element>
  );
}
