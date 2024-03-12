import { Button } from "@mui/material";
import "./Home.css";

import { Element } from "react-scroll";
export function Home() {
  return (
    <Element name="home" className="top-container">
      <div className="home-container">
        <div className="home-div">
          <p className="span-1">
            <span>Hi, I am </span>
          </p>
          <p className="span-2">
            <span>Jaya</span>
          </p>
          <p className="span-3">
            <span>Full stack developer</span>
          </p>

          <Button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1WGJy34e1HyQl6Xxxs6NXl3uKjXsnGcWl/view?usp=sharing"

              )
            }
            variant="contained"
            color="error"
            sx={{ margin: "20px 20px" }}
          >
            Resume
          </Button>
        </div>
        <div>
          <img
            className="image"
            src="https://img.freepik.com/free-vector/spacecraft-realistic-background_1284-72905.jpg?w=1380&t=st=1693767969~exp=1693768569~hmac=a85e36629466f86510c9816fd370b548ce62fd04d3fb2e48d9012c1e46790957"
          />
        </div>
      </div>
    </Element>
  );
}
