import { Button, IconButton } from "@mui/material";
import "./Home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Element } from "react-scroll";
export function Home() {
  return (
    <Element name="home" className="top-container">
      <div className="home-container">
        <p className="span-1">
          <span>Hi, I am </span>
        </p>
        <p className="span-2">
          <span>Jaya</span>
        </p>
        <p className="span-3">
          <span>Full stack developer</span>
        </p>
        <div>
          <img src="https://img.freepik.com/free-vector/spacecraft-realistic-background_1284-72905.jpg?w=1380&t=st=1693767969~exp=1693768569~hmac=a85e36629466f86510c9816fd370b548ce62fd04d3fb2e48d9012c1e46790957" style={{width:"600px"}}/>
        </div>
        <Button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1ZO6RjSeaAAta9Y_FTMOq2tLc6kxIAtRr/view?usp=share_link"
            )
          }
          variant="contained"
          color="error"
          className="btn"
        >
          Resume
        </Button>
        {/* <div className="icon-button">
          <IconButton
            onClick={() => window.open("https://github.com/Jayavenkate")}
            sx={{ gap: "10px" }}
          >
            <GitHubIcon />
            <p>Jayavenkate</p>
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://www.linkedin.com/in/jaya-j-281343269/")
            }
            sx={{ gap: "10px" }}
          >
            <LinkedInIcon />
            <p>Jaya J </p>
          </IconButton>
        </div> */}
      </div>
    </Element>
  );
}
