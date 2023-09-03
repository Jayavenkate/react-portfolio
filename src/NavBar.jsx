import "./NavBar.css";
import { Link } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Box } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import MenuItem from "@mui/material/MenuItem";
export function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ background: "#003067" }}>
        <Toolbar>
          <Typography
            className="app-name"
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Jaya <span>J</span>
          </Typography>
          <Box sx={{ display: { md: "flex", xs: "none" } }}>
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              <h3 className="nav-items">Home</h3>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <h3 className="nav-items">About</h3>
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
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
            <Link to="join" spy={true} smooth={true} offset={50} duration={500}>
              <h3 className="nav-contact">Join with Me</h3>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About
                </Link>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Skills
                </Link>
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Project
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </Link>
                <Link
                  to="join"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Join with Me
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
