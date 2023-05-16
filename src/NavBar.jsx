import "./NavBar.css";
import { Link } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export function NavBar() {
  return (
    <div>
      <AppBar id="app-bar" position="fixed">
        <Toolbar>
          <Typography
            id="app-name"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Jaya <span>J</span>
          </Typography>

          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            <h3 className="nav-items">Home</h3>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <h3 className="nav-items">About</h3>
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
            <h3 className="nav-items">Skills</h3>
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <h3 className="nav-items">Project</h3>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <h3 className="nav-items">Contact</h3>
          </Link>
          <h3 className="nav-contact">Join with Me</h3>
        </Toolbar>
      </AppBar>
    </div>
  );
}
