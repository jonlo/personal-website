import './headerToggle.css';
import React, { Component } from 'react';

export class HeaderToggle extends Component {

	render() {
		return (
			<div className="HeaderToggle" data-selected={this.props.selected}>
				<h2>{this.props.name}</h2>
			</div>
		);
	}
}