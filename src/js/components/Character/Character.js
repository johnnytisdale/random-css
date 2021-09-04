import React, { Component } from "react";
import * as methods 		from './values/methods';

export default class Character extends Component {

    //create a new instance
	constructor(props) {

        //allow access to this.props in constructor
		super(props);

        //set "this" keyword in methods
		for (let method in methods) { this[method] = methods[method].bind(this); }

        //create object to keep up with the timers for css properties.
        //1 tick = x milliseconds, as defined by setInterval.
        //the css property will have a new value assigned after x ticks have occurred.
        this.timers = {};

        //loop through css properties
        for (let cssProperty of this.props.cssProperties) {

            //add a timer for this css property
            this.timers[cssProperty.name] = {
                elapsed:    0,
                interval:   this.getRandom(3, 10)
            };
        }

        //set initial state
        this.state = {style: this.props.style};
	}

    //render the element in the dom
	render() {
		return <div data-id={this.props.id} style={this.state.style}>{this.props.character}</div>;
	}

    //component mounted
    componentDidMount() {

        //if (this.props.character != 'r') return;

        //start the interval for this character
        setInterval(
            
            //function to be called every x milliseconds
            () => {

                //clone current style object
                let style = JSON.parse(JSON.stringify(this.state.style));

                //loop through css properties
                for (let cssProperty of this.props.cssProperties) {

                    //increment the timer for this property
                    this.timers[cssProperty.name].elapsed++;

                    //if the interval has not elapsed, do nothing 
                    if (this.timers[cssProperty.name].elapsed < this.timers[cssProperty.name].interval) {
                        continue;
                    }

                    //if the interval has elapsed, reset timer
                    else {
                        this.timers[cssProperty.name].elapsed  = 0;
                        this.timers[cssProperty.name].duration = this.getRandom(3, 10);
                    }

                    //declare variable to hold new value for this css property
                    let value;

                    //set the value according to the type of css property
                    switch(cssProperty.type) {

                        //get a random rgb color
                        case "color":
                            value = this.getColor(0, 255, 0, 255, 0, 255);
                            break;

                        //get a random element from an array of all possible values
                        case "array":
                            value = this.getArrayElement(cssProperty.values);
                    }

                    //set the value for this css property
                    style[cssProperty.name] = value;
                }

                //update state
                this.setState({style: style});
            },
            
            //call function every x milliseconds
            100
        );
    }
}