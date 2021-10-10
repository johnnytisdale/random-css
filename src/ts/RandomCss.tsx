//imports
import * as React  			from "react";
import BaseStyle 			from "./BaseStyle";
import Character   			from "./Character";
import Options  			from "./Options";
import style 	   			from '../css/style.css';
import RandomizableFactory 	from './Randomizables/RandomizableFactory';

interface Props {
	center: 	boolean;
	options: 	Options;
	size: 		number;
	text: 		string;
	unsafe: 	boolean;
}

//root component
export default class RandomCSS extends React.Component <Props> {

	//instance variables
	factory: RandomizableFactory = new RandomizableFactory(this.props.options);

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
	render(): React.ReactNode {

		const baseStyle: BaseStyle = (
			this.props.unsafe
				? {
					height: (this.props.size * 1.1875) + 'rem',
					width: 	this.props.size + 'rem'
				}
				: {}
		);

		return (

			//container
			<div className={this.getClassNames()} style={this.getStyle()}>

				{
					//loop through the characters in the text
					this.setDisplay(this.props.text).map((character, index) => {

						
					
						return (
							//create a new instance of the Character component
							
								<Character
									baseStyle={baseStyle}
									character={character}
									//factory={this.factory}
									key={'character-' + index}
									randomizables={this.factory.getRandomizables(character)}
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