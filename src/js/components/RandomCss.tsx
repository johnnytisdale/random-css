//react
import * as React from "react";

//components
import Character  from "./Character";

//style
import style 	  from '../css/style.css';

//interfaces
import {Options, defaultOptions} from "../ts/Options/Options";

//classes
import Randomizable from "../ts/Randomizables/Randomizable";
import RandomizableFactory from '../ts/Randomizables/RandomizableFactory';



interface Props {
	center: 	boolean;
	options: 	Options;
	size: 		number;
	text: 		string;
	unsafe: 	boolean;
}

interface State {
	//display:		Array<string>;
	randomizables: 	Randomizable[];
}

//root component
export default class RandomCSS extends React.Component <Props, State> {

	//instance variables
	factory:			RandomizableFactory = new RandomizableFactory(this.props.options);

	//create a new instance
	constructor(props:Props) {

		//allow access to this.props in constructor
		super(props);

		//initial state
		this.state = {
			randomizables: 	this.factory.getRandomizables()
		};
	}

	getClassNames(): string {

		let classNames = ['random-css-container'];
	
		if (!this.props.unsafe) {
	
			//center?
			if (this.props.center) {
				classNames.push('random-css-container-center');
			}
		
			//size
			let className = 'random-css-container-' + this.props.size;
			if (this.props.size % 1 == 0) {
				className += '-0';
			}
			classNames.push(className);
	
		}
	
		//return a string of space-separated class names
		return classNames.join(' ');
	}

	getStyle(): object {

		//if we are not using inline css, return null
		return !this.props.unsafe ? null : {
			fontSize: this.props.size + 'rem',
			margin: this.props.center ? 'auto' : 0,
			width: this.props.center ? 'min-content' : 'auto'
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
					this.setDisplay(this.props.text).map((character, index) => {
					
						return (

							//create a new instance of the Character component
							<Character
								baseStyle={
									this.props.unsafe
										? {
											height: (this.props.size * 1.1875) + 'rem',
											width: 	this.props.size + 'rem'
										}
										: {}
								}
								character={character}
								factory={this.factory}
								key={'character-' + index}
								options={this.props.options}
								//randomizables={this.factory.getRandomizables()}
								size={this.props.size}
								unsafe={this.props.unsafe}
							/>
						);
					})
				}

			</div>
		);
	}
}