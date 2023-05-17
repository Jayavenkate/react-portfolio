import { Element } from "react-scroll";
import "./project.css";
import movie from "../image/movie.jpg";
import { Card } from "@mui/material";
export function Project() {
  const project = [
    {
      id: "Movie App",
      title: "Movie Review App",
      image: movie,
    },
    {
      id: "Fodd app",
      title: "Movie Review App",
      image: movie,
    },
    {
      id: "Movie Booking App",
      title: "Movie Review App",
      image: movie,
    },
    {
      id: "Password Reset",
      title: "Movie Review App",
      image: movie,
    },
  ];
  return (
    <Element id="project" className="project-container">
      <div className="project-con">
        {project.map((project) => (
          <Card key={project.id} className="project-content">
            <img
              className="project-image"
              src={project.image}
              alt={project.id}
            />

            <h1>{project.title}</h1>
          </Card>
        ))}
      </div>
    </Element>
  );
}
