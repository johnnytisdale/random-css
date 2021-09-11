//imports
import * as React from "react";
import Character  from "./components/Character/Character";
import {leet}     from './properties/leet';
import {unicode}  from './properties/unicode';
//import style 	  from '../css/style.scss';

interface Props {
	center: 	boolean,
	//options: 	object,
	size: 		number,
	text: 		string,
	unsafe: 	boolean
}

interface State {
	center: 	boolean,
	display:	Array<string>,
	//options:	object,
	size:		number,
	unsafe:		boolean
}

//root component
export default class RandomCSS extends React.Component <Props, State> {

	//instance variable declarations
	leet: 	 object;
	unicode: object;

	//create a new instance
	constructor(props:Props) {

		//allow access to this.props in constructor
		super(props);

		//leetspeak variations of each letter of the alphabet
		this.leet = leet;

		//unicode variations of each letter of the alphabet
		this.unicode = unicode;

		//initial state
		this.state = {
			center:  typeof this.props.center == 'undefined' ? true : this.props.center,
			display: this.setDisplay(typeof props.text == 'undefined' ? 'random css' : props.text),
			//options: typeof this.props.options == 'undefined' ? this.setOptions() : this.props.options,
			size:    typeof this.props.size == 'undefined' ? 1 : this.props.size,
			unsafe:  typeof this.props.unsafe == 'undefined' ? false : this.props.unsafe
		};
	}

	getClassNames(): string {

		let classNames = ['random-css-container'];
	
		if (!this.state.unsafe) {
	
			//center?
			if (this.state.center) {
				classNames.push('random-css-container-center');
			}
		
			//size
			let className = 'random-css-container-' + this.state.size;
			if (this.state.size % 1 == 0) {
				className += '-0';
			}
			classNames.push(className);
	
		}
	
		//return a string of space-separated class names
		return classNames.join(' ');
	}

	getStyle(): object {

		//if we are not using inline css, return null
		return !this.state.unsafe ? null : {
			fontSize: this.props.size + 'rem',
			margin: this.state.center ? 'auto' : 0,
			width: this.state.center ? 'min-content' : 'auto'
		};
	}

	setDisplay(text:string): Array<string> {

		//an array to hold characters
		let display = [];

		//loop through the positions in the string
		for (let i = 0; i < text.length; i++) {

			//add this character to the array
			display.push(text[i]);
		}

		//return the array
		return display;
	}

	//render element(s) in the dom
	render() {

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
									: {}
							}
							character={character}
							key={'character-' + index}
							//options={this.state.options}
							size={this.state.size}
							unsafe={this.state.unsafe}
						/>
					))
				}

			</div>
		);
	}
}