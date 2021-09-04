//imports
import React, { Component } from "react";
import Character from "./components/Character/Character";
import * as methods from './methods';
import style from '../style.scss';

//root component
export default class RandomCSS extends Component {

	//create a new instance
	constructor(props) {

		//allow access to this.props in constructor
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

	//render element(s) in the dom
	render() {
		return (

			//container
			<div id='random-css' style={this.getContainerStyle()}>

				{
					//loop through the characters in the text
					this.state.display.map((character, i) => (

						//create a new instance of the Character component
						<Character
							character={character}
							cssProperties={this.cssProperties}
							id={i}
							key={'character-' + i}
							options={this.props.options}
							style={{
								height: (this.props.size * 1.1875) + 'rem',
								width: 	this.props.size + 'rem'
							}}
						/>
					))
				}

			</div>
		);
	}
}