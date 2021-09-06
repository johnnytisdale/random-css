import React, { Component } from "react";
import Timer from "../Timer/Timer";
import * as methods 		from './values/methods';
import colors from './values/colors.json';
import cssProperties from './values/cssProperties.json';

export default class Character extends Component {

    //create a new instance
	constructor(props) {

        //allow access to this.props in constructor
		super(props);

        //set "this" keyword in methods
		for (let method in methods) { this[method] = methods[method].bind(this); }

        //html color names
        this.colors = colors;

        //css properties
		this.cssProperties = cssProperties;

        //create object to keep up with the timers for css properties.
        //1 tick = x milliseconds, as defined by setInterval.
        //the css property will have a new value assigned after x ticks have occurred.
        this.timers = {};

        //loop through css properties
        for (let cssProperty in this.cssProperties) {

            //add a timer for this css property
            this.timers[cssProperty] = new Timer;
        }

        //set initial state
        this.state = {style: {}};
	}

    //render element in the dom
	render() {
		return (
            <div
                className={this.props.unsafe ? null : this.getBaseClass() + ' ' + this.classes()}
                style={this.getStyle()}
            >
                {this.props.character}
            </div>
        );
	}

    //component mounted
    componentDidMount() {

        //if (this.props.character != 'r') return;

        //start the interval for this character
        this.interval = setInterval(
            
            //function to be called every x milliseconds
            () => {

                //clone current style object
                let style = JSON.parse(JSON.stringify(this.state.style));

                //do not update state if no properties change
                let update = false;

                //loop through css properties
                for (let name in this.cssProperties) {

                    const cssProperty = this.cssProperties[name];

                    //if the interval has not elapsed, do nothing 
                    if (!this.timers[name].increment()) {
                        continue;
                    }

                    //get the old value so we can compare to new value to see if it changed
                    const oldValue = style[name];

                    //declare variable to hold new value for this css property
                    let value;

                    //set the value according to the type of css property
                    switch(cssProperty.type) {

                        //get a random element from an array of all possible values
                        case "array":
                            value = this.getArrayElement(cssProperty.values);
                            break;

                        //get a random rgb color
                        case "color":
                            //value = this.getColor(0, 255, 0, 255, 0, 255);
                            value = this.getArrayElement(this.colors);
                            break;

                        //get the value by calling a function specific to this property
                        case "function":
                            try {
                                value = this[cssProperty.function]();
                            } catch (e) {
                                console.log(e);
                                clearInterval(this.interval);
                            }
                            break;

                        //select a random integer from a range of values
                        case "range":
                            value = this.getRandom(cssProperty.range[0], cssProperty.range[1]);
                            if (cssProperty.hasOwnProperty('unit')) {
                                value += '' + this.getArrayElement(cssProperty.unit);
                            }
                            break;

                        default:
                            console.log('invalid type: ' + cssProperty.type);
                            continue;
                    }

                    //the randomly selected value is the same as before, so don't update state
                    if (value == oldValue) { continue; }
                        
                    //the property changed, so update state
                    update = true;

                    //set the value for this css property
                    style[name] = value;
                }

                //update state
                if (update) {
                    this.setState({style: style});
                }
            },
            
            //call function every x milliseconds
            100
        );
    }
}