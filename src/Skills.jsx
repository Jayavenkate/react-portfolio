import { Element } from "react-scroll";
import "./Skill.css";
import { Card } from "@mui/material";
export function Skills() {
  return (
    <Element className="skill-con" id="skills">
      <div>
        <h2 className="skill-heading">Skills & Tools</h2>
      </div>
      <div className="skill-card-container">
        <Card id="skill-cards" elevation={3}>
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <p>JavaScript</p>
        </Card>
        <Card id="skill-cards" elevation={3}>
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <p>React</p>
        </Card>
        <Card id="skill-cards" elevation={3}>
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          />
          <p>Redux</p>
        </Card>
        <Card id="skill-cards" elevation={3}>
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          />
          <p>MongoDB</p>
        </Card>
        <Card id="skill-cards" elevation={3}>
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
          <p>Git</p>
        </Card>
        <Card id="skill-cards" elevation={3}>
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          />
          <p>VS Code</p>
        </Card>
        <Card id="skill-cards" elevation={3}>
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <p>HTML5</p>
        </Card>
        <Card id="skill-cards" elevation={3}>
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <p>CSS3</p>
        </Card>
        <Card id="skill-cards" elevation={3}>
          <img
            className="skill-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
          />
          <p>MaterialUI</p>
        </Card>
      </div>
    </Element>
  );
}
