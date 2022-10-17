import './about.css';
import React, { Component } from 'react';
import { Skills } from './skills';

export class About extends Component {

	render() {
		if(this.props.visible){
			return (
				<div className="About">
					<p>
						I am enthusiast about programming and learning new technologies.
						I am a generalistic software engineer who has worked with many technologies and programming languages.
						From mobile devices (IOS,xamarin), stand-alone developments (unity3d) to web technologies (nodejs, java, three js, webpack, maven....) i have work in many projects with different tech stacks.
						I am a team player & detail-oriented with strong object oriented programming knowledge and I like to apply clean code principles to my developments.
					</p>
					<Skills skills={this.props.resume.skills} ></Skills>
				</div>
	
			);
		}
	}
}