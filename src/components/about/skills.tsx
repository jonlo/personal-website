import "./skills.css";

export const Skills = (props) => {
  return (
    <div className="Skills">
      <h2>Technologies I work with</h2>
      <ul>
        {props.skills.map((skill, index) => {
          return <li key={index}>{skill.name}</li>;
        })}
      </ul>
    </div>
  );
};
