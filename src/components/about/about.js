import './about.css';
import React from 'react';
import { Skills } from './skills';
import { useSelector } from 'react-redux'

export function About(props) {
	const visiblePanel = useSelector(state => state.panel.value)

	if (visiblePanel === 'About') {
		return (
			<div className="About">
				<p>{props.resume.about}</p>
				<Skills skills={props.resume.skills} ></Skills>
			</div>

		);
	}
}
