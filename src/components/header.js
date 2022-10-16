import './header.css';
import {HeaderToggle} from './headerToggle';
import React, { Component } from 'react';
import { Networking } from './networking';
export class Header extends Component {

	render() {
		return (
			<header className="Header">
				<img className="profile_pic" src='img/profile.jpg' alt='Jon'></img>
				<h1>Jon Lopez de Guereña</h1>
				<h3>Senior software engineer enthusiast about programming and learning new technologies. </h3>
				<Networking networks={this.props.resume.networks}></Networking>
				<ul className="HeaderOptions">
					<li><HeaderToggle name="ABOUT" selected="true"></HeaderToggle></li>
					<li><HeaderToggle name="EXPERIENCE" selected="false"></HeaderToggle></li>
				</ul>
			</header>
		);
	}
}