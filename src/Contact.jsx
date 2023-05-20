import { Card } from "@mui/material";
import { Element } from "react-scroll";
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
        </Card>
      </div>
    </Element>
  );
}
