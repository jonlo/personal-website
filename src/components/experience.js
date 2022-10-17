import './experience.css';
import React, { Component } from 'react';

export class Experience extends Component {

	render() {
		if (this.props.visible) {
			return (
				<div className="Experience" >
					<ul className='Experience-list'>
						{this.props.experience.map((experience, index) => {
							return <li className="experience-li" key={index}>
								<h3> {experience.position}</h3>
								<div className='experience-header'>
									<h4>{experience.company}</h4>
									<h5><i>{experience.from} - {experience.to} </i></h5>
								</div>
								<ul className='Task-list'>
									{experience.tasks.map((task, index) => {
										return <li key={index}> {task}</li>;
									})}
								</ul>
							</li>;
						})}
					</ul>
				</div>
			);
		}

	}
}