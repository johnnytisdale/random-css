import React, { Component } from "react";
import style 				from '../style.scss';
import * as methods 		from './methods';
import Character 			from "./components/Character/Character";	

export default class RandomCSS extends Component {

	constructor(props) {
		super(props);

		//set "this" keyword in methods
		for (let method in methods) { this[method] = methods[method].bind(this); }

		//set immutable properties (this.leet, this.sections, this.unicode)
		this.setProperties();

		//set defaults in case props were not passed
		this.setDefaults();

		//set initial state (this.state)
		this.initializeState(props);

		//start the infinite loop
		//this.initializeInterval();
	}

	render() {
		return (
			<div id='random-css' style={this.getContainerStyle()}>
				{this.state.display.map((character, i) => (
					<Character
						character={character}
						cssProperties={this.cssProperties}
						id={i}
						key={'character-' + i}
						style={{
							color: "red",
							height: (this.props.size * 1.1875) + 'rem',
							width: this.props.size + 'rem'
						}}
					/>
				))}
			</div>
		);
	}
}