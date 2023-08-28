import { useState, useEffect } from "react";

export const useDarkMode = (darkModeOn) => {
  const [theme, setTheme] = useState("light");
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  const setDarkMode = () => {
    const r = document.querySelector(":root");
    r.style.setProperty("--backgroundColor", "rgb(63, 63, 63)");
    r.style.setProperty("--textColor", "rgb(250, 247, 243)");
    r.style.setProperty("--itemBackgroundColor", "rgb(0, 0, 0)");
    setMode("dark");
  };

  const setLightMode = () => {
    const r = document.querySelector(":root");
    r.style.setProperty("--backgroundColor", "rgb(250, 247, 243)");
    r.style.setProperty("--textColor", "rgb(63, 63, 63)");
    r.style.setProperty("--itemBackgroundColor", "rgb(255, 255, 255)");
    setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (!localTheme) {
      if (darkModeOn) {
        setDarkMode();
      } else {
        setLightMode();
      }
    } else if (localTheme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []);

  return [theme, toggleTheme];
};
