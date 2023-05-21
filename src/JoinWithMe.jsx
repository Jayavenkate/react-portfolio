import { Element } from "react-scroll";
import Button from "@mui/material/Button";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import "./Joinwithme.css";
import { Card } from "@mui/material";

export function JoinWithMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_27xoonm",
        "template_riitx9d",
        form.current,
        "26t8ZU8tH5B7awJh4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
 
  return (
    <Element id="join" className="join-container">
      <div className="join-content">
        <div className="heading">
          <h1>Get in touch</h1>
          <h2>Contact me</h2>
        </div>
        <form ref={form} className="join-con" onSubmit={sendEmail}>
          <Card className="card-con">
            <TextField
              sx={{ maxWidth: "500px" }}
              fullWidth
              label="Name"
              name="user_name"
              variant="outlined"
            />
            <TextField
              sx={{ maxWidth: "500px" }}
              fullWidth
              label="Email"
              name="user_email"
              variant="outlined"
            />

            <TextField
              sx={{ maxWidth: "500px" }}
              fullWidth
              id="outlined-multiline-static"
              label="Message"
              name="message" 
              rows={4}
              multiline
              variant="outlined"
            />
            <Button
              type="submit"
              className="btn-join"
              color="error"
              value="Send"
              variant="contained"
            >
              Send
            </Button>
          </Card>
        </form>
      
      </div>
    </Element>
  );
}
