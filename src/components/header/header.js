import './header.css';
import { HeaderToggle } from './headerToggle';
import { useSelector, useDispatch } from 'react-redux'
import { showAbout, showExperience } from '../../redux/panelOrchestator'

import React from 'react';
import { Networking } from './networking';

export function Header(props) {
	const visiblePanel = useSelector(state => state.panel.value)
	const dispatch = useDispatch()

	return (
		<header className="Header">
			<img className="profile_pic" src='img/profile.webp' alt='Jon'></img>
			<h1>{props.resume.name}</h1>
			<h3>{props.resume.headLine} </h3>
			<Networking networks={props.resume.networks}></Networking>
			<ul className="HeaderOptions">
				<li onClick={() => dispatch(showAbout())}><HeaderToggle name="ABOUT" selected={visiblePanel === 'About' ? 'true' : 'false'} ></HeaderToggle></li>
				<li onClick={() => dispatch(showExperience())}><HeaderToggle name="EXPERIENCE" selected={visiblePanel === 'Experience' ? 'true' : 'false'} ></HeaderToggle></li>
			</ul>
		</header>
	);

}