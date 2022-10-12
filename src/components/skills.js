import './skills.css';
import React, { Component } from 'react';

export class Skills extends Component {


	render() {
		return (
			<div className="Skills">
				<h2>Skills</h2>
				<ul>
					{this.props.skills.map((skill, index) => {
						return <li key={index}>{skill.name}</li>;
					})}
				</ul>

			</div>
		);
	}
}