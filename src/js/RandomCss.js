//imports
import React, { Component } from "react";
import Character from "./components/Character/Character";
import * as methods from './methods';
import style from '../css/style.scss';
import {leet}     		from './properties/leet';
import {unicode}  		from './properties/unicode';

//root component
export default class RandomCSS extends Component {

	//create a new instance
	constructor(props) {

		//allow access to this.props in constructor
		super(props);

		//set "this" keyword in methods
		for (let method in methods) { this[method] = methods[method].bind(this); }

		//leetspeak variations of each letter of the alphabet
		this.leet = leet;

		//unicode variations of each letter of the alphabet
		this.unicode = unicode;

		//initial state
		this.state = {
			center:  typeof this.props.center == 'undefined' ? true : this.props.center,
			display: this.setDisplay(typeof props.text == 'undefined' ? 'random css' : props.text),
			options: typeof this.props.options == 'undefined' ? this.setOptions() : this.props.options,
			size:    typeof this.props.size == 'undefined' ? 1 : this.props.size,
			unsafe:  typeof this.props.unsafe == 'undefined' ? false : this.props.unsafe
		};
	}

	//render element(s) in the dom
	render() {

		console.log({
			unsafe: this.state.unsafe,
			classNames: this.getClassNames(),
			style: this.getStyle()
		});
		return (

			//container
			<div className={this.getClassNames()} style={this.getStyle()}>

				{
					//loop through the characters in the text
					this.state.display.map((character, index) => (

						//create a new instance of the Character component
						<Character
							baseStyle={
								this.state.unsafe
									? {
										height: (this.props.size * 1.1875) + 'rem',
										width: 	this.props.size + 'rem'
									}
									: null
							}
							character={character}
							key={'character-' + index}
							options={this.state.options}
							size={this.state.size}
							unsafe={this.state.unsafe}
						/>
					))
				}

			</div>
		);
	}
}