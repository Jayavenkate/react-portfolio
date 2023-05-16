import "./App.css";
import { NavBar } from "./NavBar";
import { TopContainer } from "./TopContainer";
import { Skills } from "./Skills";
import { Home } from "./Home";
import { About } from "./About";
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <TopContainer />
      <About />

      <Skills />
    </div>
  );
}
