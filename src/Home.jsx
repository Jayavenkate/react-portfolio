import { Button } from "@mui/material";
import "./Home.css";
import { Link } from "react-scroll";
export function Home() {
  return (
    <div className="home-content">
      <div className="home-container">
        <h1>Hi ,I am </h1>
        <h1>Jaya </h1>
        <h1>Full stack developer</h1>
        {/* <div className="home-button"> */}
          <a href="www.google.com">
            <Button variant="contained" color="error" className="btn"> Resume</Button>
          </a>
          {/* <Link to="project" smooth={true} duration={500}>
            <Button variant="contained"> My Work </Button>
          </Link> */}
        {/* </div> */}
      </div>
    </div>
  );
}
