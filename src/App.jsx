import "./App.css";
// import { Home } from "./Home";
import { NavBar } from "./NavBar";
// import { TopContainer } from "./TopContainer";
import { Skills } from "./Skills";
import { Home } from "./Home";
import { About } from "./About";
import { Project } from "./Project";
import { Contact } from "./Contact";
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
     <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
