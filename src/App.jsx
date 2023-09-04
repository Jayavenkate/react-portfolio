import "./App.css";
import { NavBar } from "./NavBar";
import { Skills } from "./Skills";
import { Home } from "./Home";
import { About } from "./About";
import { Project } from "./Project";
import { Contact } from "./Contact";
import { JoinWithMe } from "./JoinWithMe";
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <JoinWithMe />
    </div>
  );
}
