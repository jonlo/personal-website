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
							<h4>{experience.company}</h4>
							<p> {experience.position}</p>
						</li>;
					})}
				</ul>
			</div>
		);
	}
}