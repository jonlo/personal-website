import { createContext, useReducer } from "react";

const initialState = {
  visiblePanel: "About",
};

export const PanelContext = createContext(initialState);

export const actionTypes = {
  SHOW_ABOUT: "SHOW_ABOUT",
  SHOW_EXPERIENCE: "SHOW_EXPERIENCE",
  SHOW_PROJECTS: "SHOW_PROJECTS",
};

type Action = {
  type: string;
};

type State = {
  visiblePanel: string;
};

export const reducer = (state: State, action: Action) => {
  if (action.type === actionTypes.SHOW_ABOUT) {
    return {
      visiblePanel: "About",
    };
  }
  if (action.type === actionTypes.SHOW_EXPERIENCE) {
    return {
      visiblePanel: "Experience",
    };
  }
  if (action.type === actionTypes.SHOW_PROJECTS) {
    return {
      visiblePanel: "Projects",
    };
  }
  throw Error("Unknown action.");
};

export const PanelProvider = ({ children }) => {
  const [state, showHeaderPanel] = useReducer(reducer, initialState);

  return (
    <PanelContext.Provider value={{ state, showHeaderPanel }}>
      {children}
    </PanelContext.Provider>
  );
};
