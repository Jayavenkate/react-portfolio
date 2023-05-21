import { Button } from "@mui/material";
import "./Home.css";
import { Element, Link } from "react-scroll";
export function Home() {
  return (
    <Element name="home" className="top-container">
      <div className="home-content">
        <div className="home-container">
          <h1 className="span-1">
            <span>Hi, I am </span>
          </h1>
          <h1 className="span-2">
            <span>Jaya</span>{" "}
          </h1>
          <h1 className="span-3">
            <span>Full stack developer</span>
          </h1>
          
        
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
          {/* </a> */}
          {/* <Link to="project" smooth={true} duration={500}>
            <Button variant="contained"> My Work </Button>
          </Link> */}
          {/* </div> */}
        </div>
      </div>
    </Element>
  );
}
