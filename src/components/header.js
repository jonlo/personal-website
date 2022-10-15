import './header.css';
import React, { Component } from 'react';

export class Header extends Component {

	render() {
		return (
			<header className="App-header">
				<img className="profile_pic" src='img/profile.jpg' alt='Jon'></img>
				<h1>Jon Lopez de Guereña</h1>
				<h3>Senior software engineer enthusiast about programming and learning new technologies. </h3>
			</header>
		);
	}
}