import { Element } from "react-scroll";
import "./project.css";
import movie from "../image/movie.jpg";
import food from "../image/food.jpg";
import color from "../image/color.jpg";

import ticket from "../image/ticket.jpg";

import { Card } from "@mui/material";
export function Project() {
  const project = [
    {
      id: "Movie App",
      title: "Movie Review App",
      image: movie,
      link: "https://imaginative-banoffee-896d1a.netlify.app",
      frontEndSource: "https://github.com/Jayavenkate/react-movie-demo",
      backEndSource: "https://github.com/Jayavenkate/mongodb-node-movies-app",
      techStack: "Reactjs, NodeJs, Express, MongoDb",
    },
    {
      id: "Food app",
      title: "Food Token Generate App",
      image: food,
      link: "https://beautiful-stardust-2d69dc.netlify.app",
      frontEndSource: "https://github.com/Jayavenkate/food-app-react",
      backEndSource: "https://github.com/Jayavenkate/capstone-node",
      techStack: "Reactjs, NodeJs, Express, MongoDb",
    },
    {
      id: "Movie Booking App",
      title: "Movie Ticket Booking App",
      image: ticket,
      link: "https://spiffy-sfogliatella-d205d8.netlify.app",
      frontEndSource: "https://github.com/Jayavenkate/webcode-2-react",
      backEndSource: "https://github.com/Jayavenkate/webcode-2-node",
      techStack: "Reactjs, NodeJs, Express, MongoDb",
    },
    {
      id: "colorBlock",
      title: "Color Block",
      image: color,
      link: "https://frolicking-bublanina-223494.netlify.app",
      frontEndSource: "https://github.com/Jayavenkate/password-reset-react",
      backEndSource: "https://github.com/Jayavenkate/password-reset-node",
      techStack: "HTML, Css, Reactjs",
    },
  ];
  const openLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <Element className="project-container" id="project">
      <div className="project-con">
        <h1 className="about-heading">Project</h1>
        <div className="mySwiper">
          {project.map((project) => (
            <Card key={project.id} className="card-wrapper">
              <img
                className="project-image"
                src={project.image}
                alt={project.id}
              />
              <h3 style={{ padding: "5px", color: "orangered" ,textAlign: "center"}}>
                {project.title}
              </h3>
              <h4 style={{ textAlign: "center", width: "250px" ,height:"20px", padding:"10px 0px"}}>
                Tech stack :{project.techStack}
              </h4>
              <div className="btn-project">
                <button onClick={() => openLink(project.frontEndSource)}>
                  Front End
                </button>
                <button onClick={() => openLink(project.link)}>Link</button>
                <button onClick={() => openLink(project.backEndSource)}>
                  Back End
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Element>
  );
}
