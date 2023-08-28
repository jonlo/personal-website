import "./darkModeToggle.css";
import { useDarkMode } from "./hooks/useDarkMode";

export const DarkModeToggle = (props) => {
  const [theme, toggleTheme] = useDarkMode(props.darkModeOn);

  return (
    <div className="darkModeToggle" data-selected={props.darkModeOn}>
      <input
        id="cb_id"
        className="toggle-round"
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      ></input>
      <label htmlFor="cb_id"></label>
    </div>
  );
};
