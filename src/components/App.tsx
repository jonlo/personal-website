import "./App.css";
import { Header } from "./header/header";
import { About } from "./about/about";
import { Experience } from "./experience/experience";
import { Projects } from "./projects/projects";
import resume from "../data/resume.json";
import ReactGA from "react-ga";
import { PanelProvider } from './PanelContext';

ReactGA.initialize("UA-246059601-1");
ReactGA.pageview(window.location.pathname + window.location.search);

export const App = () => {
  return (
    <PanelProvider>
      <div className="App">
        <Header resume={resume}></Header>
        <div className="center-panel">
          <About resume={resume}></About>
          <Experience experience={resume.experience}></Experience>
          <Projects resume={resume}></Projects>
        </div>
      </div>
    </PanelProvider>
  );
};

export default App;
