import "./experience.css";
import { PanelContext } from '../PanelContext';
import { useContext } from 'react';


export const Experience = (props) => {
  const { state } = useContext(PanelContext);
  if (state.visiblePanel === "Experience") {
    return (
      <div className="Experience subMenu">
        <ul className="Experience-list">
          {props.experience.map((experience, index) => {
            return (
              <li className="experience-li" key={index}>
                <h3> {experience.position}</h3>
                <div className="experience-header">
                  <h4>{experience.company}</h4>
                  <h5>
                    <i>
                      {experience.from} - {experience.to}{" "}
                    </i>
                  </h5>
                </div>
                <ul className="Task-list">
                  {experience.tasks.map((task, index) => {
                    return <li key={index}> {task}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
