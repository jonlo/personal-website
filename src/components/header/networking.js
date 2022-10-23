import './networking.css';
import React, { Component } from 'react';
export class Networking extends Component {

	render() {
		return (
			<div className="Networking">
				<ul>
					{this.props.networks.map((network, index) => {
						let icon = network.icon + ' fa-2x';
						return <li key={index} className={icon} onClick={this.goToUrl.bind(this, network.url)}></li>;
					}
					)}
				</ul>

			</div>
		);
	}

	goToUrl(url) {
		window.open(url, '_blank').focus();
		switch (key) {
			case value:
				
				break;
		
			default:
				break;
		}
	}
}
