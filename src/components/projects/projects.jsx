import "./projects.css";
import { PanelContext } from '../PanelContext';
import { useContext } from 'react';

export const Projects = (props) => {
  const { state } = useContext(PanelContext);
  const goToUrl = (url) => {
    window.open(url, "_blank").focus();
  };

  if (state.visiblePanel === "Projects") {
    return (
      <div className="projects subMenu">
        <p className="mainDescription">{props.resume.projectsExperience}</p>
        <ul className="projects-list">
          {props.resume.projects.map((project, index) => {
            return (
              <li
                className="projects-li"
                key={index}
                onClick={() => goToUrl(project.url)}
              >
                <img
                  alt={project.name}
                  src={"img/projects/" + project.image}
                ></img>
                <h3> {project.name}</h3>
                <p className="mainDescription">{project.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
