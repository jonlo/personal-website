import "./darkModeToggle.css";
import React, { useState,useEffect } from "react";

export function DarkModeToggle(props) {
  const [darkModeOn, setDarkModeOn] = useState(props.darkModeOn);

  const setDarkMode = () => {
    const r = document.querySelector(":root");
    r.style.setProperty("--backgroundColor", "rgb(63, 63, 63)");
    r.style.setProperty("--textColor", "rgb(250, 247, 243)");
    r.style.setProperty("--itemBackgroundColor", "rgb(0, 0, 0)");
  };

  const setWhiteMode = () => {
    const r = document.querySelector(":root");
    r.style.setProperty("--backgroundColor", "rgb(250, 247, 243)");
    r.style.setProperty("--textColor", "rgb(63, 63, 63)");
    r.style.setProperty("--itemBackgroundColor", "rgb(255, 255, 255)");
  };

  const toggleDarkMode = () => {
    if (darkModeOn) {
      setDarkModeOn(false);
      setWhiteMode();
    } else {
      setDarkModeOn(true);
      setDarkMode();
    }
  };

  useEffect(() => {
    if(props.darkModeOn){
      setDarkMode();
    }
  }, [props.darkModeOn]);

  return (
    <div className="darkModeToggle" data-selected={props.darkModeOn}>
      <input
        id="cb_id"
        className="toggle-round"
        type="checkbox"
        onChange={toggleDarkMode}
        checked={darkModeOn}
      ></input>
      <label htmlFor="cb_id"></label>
    </div>
  );
}
