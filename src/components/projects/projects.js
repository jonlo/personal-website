import './projects.css';
import React from 'react';
import { useSelector } from 'react-redux'

export function Projects(props) {
	const visiblePanel = useSelector(state => state.panel.value)
	if (visiblePanel === 'Projects') {
		return (
			<div className="projects" >
				<ul className='projects-list'>
					{props.projects.map((project, index) => {
						return <li className="projects-li" key={index} onClick={goToUrl.bind(this, project.url)}>
							<img alt={project.name} src={"img/projects/" + project.image}></img>
							<h3> {project.name}</h3>
							<p>{project.description}</p>
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
