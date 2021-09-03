import React, { Component } from "react";
import style 				from '../style.scss';
import * as methods 		from './methods';

export default class RandomCSS extends Component {

	constructor(props) {
		super(props);

		//methods
		for (let method in methods) this[method] = methods[method].bind(this);

		//set immutable properties (this.leet, this.sections, this.unicode)
		this.setProperties();

		//set defaults in case props are not passed
		this.setDefaults();

		//state
		this.initializeState(props);

		//start the loop
		this.initializeInterval();
	}

	render() {
		return (
			<div id='random-css' style={this.getContainerStyle()}>
				{this.state.display.map((x, i) => (
					<div
						data-id={i}
						style={{
							height: (this.props.size * 1.1875) + 'rem',
							width: this.props.size + 'rem'
						}}
					>
						{x}
					</div>
				))}
			</div>
		);
	}
}