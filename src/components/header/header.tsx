import "./header.css";
import { HeaderToggle } from "./headerToggle";
import { DarkModeToggle } from "./darkModeToggle";
import { Networking } from "./networking";
import { useContext } from 'react';
import { PanelContext, actionTypes } from '../PanelContext';

export const Header = (props) => {
  const { state, showHeaderPanel } = useContext(PanelContext);
  let darkModeOn =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false;

  return (
    <header className="Header">
      <img className="profile_pic" src="img/profile.webp" alt="Jon"></img>
      <DarkModeToggle darkModeOn={darkModeOn}></DarkModeToggle>
      <h1>{props.resume.name}</h1>
      <h3>{props.resume.headLine} </h3>
      <Networking networks={props.resume.networks}></Networking>
      <ul className="HeaderOptions">
        <li onClick={() => showHeaderPanel({ type: actionTypes.SHOW_ABOUT })}>
          <HeaderToggle
            name="ABOUT"
            selected={state.visiblePanel === "About" ? "true" : "false"}
          ></HeaderToggle>
        </li>
        <li onClick={() => showHeaderPanel({ type: actionTypes.SHOW_EXPERIENCE })}>
          <HeaderToggle
            name="EXPERIENCE"
            selected={state.visiblePanel === "Experience" ? "true" : "false"}
          ></HeaderToggle>
        </li>
        <li onClick={() => showHeaderPanel({ type: actionTypes.SHOW_PROJECTS })}>
          <HeaderToggle
            name="PROJECTS"
            selected={state.visiblePanel === "Projects" ? "true" : "false"}
          ></HeaderToggle>
        </li>
      </ul>
    </header>
  );
};
