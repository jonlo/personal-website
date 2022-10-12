import './experience.css';
import React, { Component } from 'react';

export class Experience extends Component {

	constructor(props) {
		super(props);
		console.log(props)
	}

	render() {
		return (
			<div className="Experience">
				<h2>Experience</h2>
				<ul>
					{this.props.experience.map((experience, index) => {
						return <li key={index}>
							<div className='experience-header'>
								<h4>{experience.company}</h4>
								<h5><i>{experience.from} - {experience.to} </i></h5>
							</div>
							<p> {experience.position}</p>
						</li>;
					})}
				</ul>
			</div>
		);
	}
}