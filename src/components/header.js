import './header.css';
import { HeaderToggle } from './headerToggle';
import React, { Component } from 'react';
import { Networking } from './networking';
export class Header extends Component {

	constructor(props) {
		super(props);
		this.state = { visiblePanel: 'About' };
	}

	setPanel(panel) {
		this.setState({ visiblePanel: panel });
		this.props.setPanel(panel);
	}

	render() {
		return (
			<header className="Header">
				<img className="profile_pic" src='img/profile.jpg' alt='Jon'></img>
				<h1>Jon Lopez de Guereña</h1>
				<h3>Senior software engineer enthusiast about programming and learning new technologies. </h3>
				<Networking networks={this.props.resume.networks}></Networking>
				<ul className="HeaderOptions">
					<li onClick={this.setPanel.bind(this, 'About')}><HeaderToggle name="ABOUT" selected={this.state.visiblePanel === 'About'?'true':'false'} ></HeaderToggle></li>
					<li onClick={this.setPanel.bind(this, 'Experience')}><HeaderToggle name="EXPERIENCE" selected={this.state.visiblePanel === 'Experience'?'true':'false'} ></HeaderToggle></li>
				</ul>
			</header>
		);
	}
}