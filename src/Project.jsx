import { Element } from "react-scroll";
import "./project.css";
import movie from "../image/movie.jpg";
import food from "../image/food.jpg";
import password from "../image/password.jpg";

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
    },
    {
      id: "Food app",
      title: "Food Order App",
      image: food,
      link: "https://beautiful-stardust-2d69dc.netlify.app",
      frontEndSource: "https://github.com/Jayavenkate/food-app-react",
      backEndSource: "https://github.com/Jayavenkate/capstone-node",
    },
    {
      id: "Movie Booking App",
      title: "Movie Ticket App",
      image: ticket,
      link: "https://spiffy-sfogliatella-d205d8.netlify.app",
      frontEndSource: "https://github.com/Jayavenkate/webcode-2-react",
      backEndSource: "https://github.com/Jayavenkate/webcode-2-node",
    },
    {
      id: "Password Reset",
      title: "Password Reset",
      image: password,
      link: "https://heartfelt-cuchufli-7f49bb.netlify.app",
      frontEndSource: "https://github.com/Jayavenkate/password-reset-react",
      backEndSource: "https://github.com/Jayavenkate/password-reset-node",
    },
  ];
  const openLink = (link) => {
    window.open(link);
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
              <h3 style={{ padding: "5px" }}>{project.title}</h3>
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
