import "./headerToggle.css";

export const HeaderToggle = (props) => {
  return (
    <div className="HeaderToggle" data-selected={props.selected}>
      <h2>{props.name}</h2>
    </div>
  );
};
