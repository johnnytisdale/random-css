//imports
import * as React from "react";
import Timer from "../Timer/Timer";
import colors from './values/colors.json';
import cssProperties from './values/cssProperties.json';

interface Props {
    baseStyle:  object,
    character:  string,
    size:       number,
    unsafe:     boolean
}

interface State {
    style: Style;
}

interface Timers {
    [index: string]: Timer;
}

interface Style {
    [index:string]:      string;
    animation?:          string;
    animationPlayState?: string;
}

interface CssProperty {
    camelCase:  string;
    type:       string;
    function?:  string;
    values?:    string[];
    range?:     number[];
    unit?:      string[];
}

interface CssProperties {
    [index: string]: CssProperty;
}

export default class Character extends React.Component <Props, State> {

    [index:string]: any;
    colors:         Array<string>;
    cssProperties:  CssProperties;
    interval:       ReturnType<typeof setInterval>;
    timers:         Timers;

    //create a new instance
	constructor(props:Props) {

        //allow access to this.props in constructor
		super(props);

        //set "this" keyword in methods
		//for (let method in methods) { this[method] = methods[method].bind(this); }

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

    animate() {

        //randomly select a transformation
        const transformation = this.getArrayElement(["rotate", "scale", "skew"]);

        //set animation name based on transformation
        let name = transformation;

        //if skewing, randomly select X axis, Y axis, or both
        if (transformation == 'skew') {
            name += this.getArrayElement(['X', 'Y', 'XY']);
        }
        
        //if scaling, randomly select up or down
        else if (transformation == 'scale') {
            name += this.getArrayElement(['scaleDown', 'scaleUp']);
        }

        let retVal;

        
        //play/pause
        if (this.getRandom(0, 1)) {
            
            let animation = this.state.style.animation;
            if (typeof(animation) != 'undefined' && animation !== null && animation != 'none') {
                let state = this.state.style.animationPlayState;
                retVal = animation.replace(
                    state,
                    state == 'running' ? 'paused' : 'running'
                );
            }

        //change variables
        } else {
                
            
            retVal = this.getRandom(1,3) + 's' + ' ' +
                this.getArrayElement([
                    'linear',
                    'ease',
                    'ease-in',
                    'ease-out',
                    'ease-in-out',
                    'step-start',
                    'step-end',
                    'steps'
                ]) + ' 0s ' + 
                this.getArrayElement([
                    'infinite',
                    1, 2, 3
                ]) + ' ' +
                this.getArrayElement([
                    'normal',
                    'reverse',
                    'alternate',
                    'alternate-reverse'
                ]) + ' ' +
                this.getArrayElement([
                    'forwards',
                    'backwards',
                    'both'
                ]) + ' running ' + name;
                
        }
        return retVal;
    }

    getBorderRadius() {
        let length = 1;//this.props.options.borderRadius.mono ? 1 : 4;
        let string = '';
        for (let i = 0; i < length; i++) {
            string += this.getRandom(0, 100) + '%';
            if (i < length - 1) {
                string += ' ';
            }
        }
        return string;
    }

    getClassNames() {
    
        //an array to hold css class names
        let classNames = [];
    
        //loop through the css property names
        for (let name in this.state.style) {
    
            //dev
            if (typeof this.cssProperties[name] == 'undefined') continue;
            if (this.cssProperties[name].type != 'color') continue;
    
            //push class name to array
            classNames.push('random-css-' + name + '-' + this.state.style[name]);
        }
    
        //return string
        return classNames.join(' ');
    }

    getColor(rMin:number, rMax:number, gMin:number, gMax:number, bMin:number, bMax:number) {
        const red   = this.getRandom(rMin, rMax);
        const green = this.getRandom(gMin, gMax);
        const blue  = this.getRandom(bMin, bMax);
        return `rgb(${red}, ${green}, ${blue})`;
        /*return ('rgb('
            + this.getRandom(rMin, rMax)
            + ','
            + this.getRandom(gMin, gMax)
            + ','
            + this.getRandom(bMin, bMax)
            + ')'
        );*/
    }

    getArrayElement(array:Array<any>) {
        return array[this.getRandom(0, array.length - 1)];
    }

    getBaseClass() {

        //if applying inline style, no need to use classes
        if (this.props.unsafe) return;
    
        //font size in rem
        const size = this.props.size;
    
        //css class
        let className = 'random-css-character-' + size;
    
        if (size % 1 == 0) {
            className += '-0';
        }
    
        return className;
    }

    //get a random number between min and max (inclusive)
    getRandom(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getStyle() {
    
        //if not using inline style, return null
        if (!this.props.unsafe) return null;
    
        //clone the base style object
        let style = JSON.parse(JSON.stringify(this.props.baseStyle));
    
        //add properties from state
        for (let name in this.state.style) {
            const cssProperty = this.cssProperties[name];
            if (typeof cssProperty == 'undefined') {
                console.log('undefined', name);
                continue;
            }
            style[cssProperty.camelCase] = this.state.style[name];
        }
                
        return style;
    }

    //render element in the dom
	render() {
		return (
            <div
                className={this.props.unsafe ? null : this.getBaseClass() + ' ' + this.getClassNames()}
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
                            value = String(this.getRandom(cssProperty.range[0], cssProperty.range[1]));
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