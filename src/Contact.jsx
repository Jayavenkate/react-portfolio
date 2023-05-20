import { Card, IconButton } from "@mui/material";
import { Element } from "react-scroll";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Contact.css";
export function Contact() {
  return (
    <Element id="contact" className="contact-container">
      <div className="contact-con">
        <div className="contact-content">
          <h2>Contact</h2>
        </div>
        <Card className="contact-card">
          <h3>
            Email : <span>jayajaikithuja@gmail.com</span>
          </h3>
          <h3>
            Github UserName: <span>Jayavenkate</span>
          </h3>
          <div>
            <IconButton
              onClick={() => window.open("https://github.com/Jayavenkate")}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://www.linkedin.com/in/jaya-j-281343269/")
              }
            >
              <LinkedInIcon />
            </IconButton>
          </div>
        </Card>
      </div>
    </Element>
  );
}
