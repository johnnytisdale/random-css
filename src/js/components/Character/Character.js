import React, { Component } from "react";
import * as methods 		from './values/methods';

export default class Character extends Component {

    //create a new instance
	constructor(props) {

        //allow access to this.props in constructor
		super(props);

        //set "this" keyword in methods
		for (let method in methods) { this[method] = methods[method].bind(this); }

        //set initial state
        this.state = {
            style: this.props.style
        }
	}

	render() {
		return (
            <div
                data-id={this.props.id}
                style={this.state.style}
            >
                {this.props.character}
            </div>
		);
	}

    //component mounted
    componentDidMount() {

        //if (this.props.character != 'r') return;

        //start the interval for this character
        setInterval(
            
            //function to be called every x ms
            () => {

                //clone current style object
                let style = JSON.parse(JSON.stringify(this.state.style));

                //loop through css properties
                for (let cssProperty of this.props.cssProperties) {

                    //get random value
                    let value;
                    switch(cssProperty.type) {
                        case "color":
                            value = this.getColor(0, 255, 0, 255, 0, 255);
                            break;
                        case "array":
                            value = this.getArrayElement(cssProperty.values);
                    }

                    //set the value for this css property to a random value from the array of possible values
                    style[cssProperty.name] = value;
                }

                //update state
                this.setState({style: style});
            },
            
            //call function every 333ms
            100
        );
    }
}