import './projects.css';
import React from 'react';
import { useSelector } from 'react-redux'

export function Projects(props) {
	const visiblePanel = useSelector(state => state.panel.value)
	if (visiblePanel === 'Projects') {
		return (
			<div className="projects subMenu" >
				<p className='mainDescription'>{props.resume.projectsExperience}</p>
				<ul className='projects-list'>
					{props.resume.projects.map((project, index) => {
						return <li className="projects-li" key={index} onClick={goToUrl.bind(this, project.url)}>
							<img alt={project.name} src={"img/projects/" + project.image}></img>
							<h3> {project.name}</h3>
							<p className='mainDescription'>{project.description}</p>
						</li>;
					})}
				</ul>
			</div>
		);
	}

}

function goToUrl(url) {
	window.open(url, '_blank').focus();
}
