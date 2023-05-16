import { Home } from "./Home";
import { Element } from "react-scroll";
import "./TopContainer.css";
export function TopContainer() {
  return (
    <Element name="home" className="top-container">
      <Home />
    </Element>
  );
}
