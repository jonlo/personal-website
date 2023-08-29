import './about.css';
import { Skills } from './skills';
import { PanelContext } from '../PanelContext';
import { useContext } from 'react';

export const About = (props) =>  {
	const { state } = useContext(PanelContext);

	if (state.visiblePanel === 'About') {
		return (
			<div className="About">
				<p className='mainDescription'>{props.resume.about}</p>
				<Skills skills={props.resume.skills} ></Skills>
			</div>

		);
	}
}
