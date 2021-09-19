//react
import * as React           from "react";

//json
import cssProperties        from '../json/cssProperties.json';

//interfaces
import {Options}            from './Options/Options';

//Randomizables
import CssProperty          from "./Randomizables/Css/CssProperty";
import Glyph                from "./Randomizables/Glyph/Glyph";
import Randomizable         from "./Randomizables/Randomizable";
import RandomizableFactory  from "./Randomizables/RandomizableFactory";

//react component props
interface Props {
    baseStyle:      object;
    character:      string;
    factory:        RandomizableFactory;
    size:           number;
    unsafe:         boolean;
}

//react component state
interface State {
    glyph?: string;
    style?: Style;
}

interface Style {
    [index:string]:      string;
    animation?:          string;
    animationPlayState?: string;
}

//to do: get rid of json
interface CssPropertiesJson {
    [index:string]: any;
}

//define and expert react component
export default class Character extends React.Component <Props, State> {

    //instance variables
    cssPropertiesJson:  CssPropertiesJson;
    interval:           ReturnType<typeof setInterval>;
    randomizables:      Randomizable[];

    //create a new instance
	constructor(props:Props) {

        //allow access to this.props in constructor
		super(props);

        //css properties
		this.cssPropertiesJson = cssProperties;

        //array to hold CssProperty objects
        this.randomizables = this.props.factory.getRandomizables(this.props.character);

        //set initial state
        this.state = {
            glyph:  this.props.character,
            style:  {}
        };
	}

    getClassNames() {

        if (this.props.unsafe) return null;
    
        //an array to hold css class names
        let classNames = [];
    
        //loop through the css property names
        for (let name in this.state.style) {
    
            //dev
            if (typeof this.cssPropertiesJson[name] == 'undefined') continue;
            if (this.cssPropertiesJson[name].type != 'color') continue;
    
            //push css class name to array
            classNames.push('random-css-' + name + '-' + this.state.style[name]);
        }
    
        //return string
        return this.getBaseClass() + ' ' + classNames.join(' ');
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

    getStyle() {
    
        //if not using inline style, return null
        if (!this.props.unsafe) return null;
    
        //clone the base style object
        let style = JSON.parse(JSON.stringify(this.props.baseStyle));
    
        //add properties from state
        for (let name in this.state.style) {
            const cssProperty = this.cssPropertiesJson[name];
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
                className={this.getClassNames()}
                style={this.getStyle()}
            >
                {this.state.glyph}
            </div>
        );
	}

    //component mounted
    componentDidMount() {

        //start the interval for this character
        this.interval = setInterval(
            
            //function to be called every x milliseconds
            () => {

                let state:State = {};

                //clone current style object
                let style = JSON.parse(JSON.stringify(this.state.style));

                let updateState = false;

                //do not update style if no css properties change
                let updateStyle = false;

                //loop through the Randomizable objects
                for (let randomizable of this.randomizables) {

                    //this randomizable is disabled
                    if (!randomizable.isEnabled()) {

                        //it was just disabled since last check
                        if (randomizable.justDisabled()) {
                            
                            //remove styling
                            if (randomizable instanceof CssProperty) {
                                delete style[randomizable.getName()];// = '';
                                updateState = true;
                                updateStyle = true;
                            }
                        }
                        continue;
                    }

                    //if this timer's countdown is not complete, do nothing
                    if (!randomizable.timer.increment()) continue;

                    //save current value for later comparison
                    const oldValue = randomizable.getValue();

                    //set a new random value
                    const newValue = randomizable.randomize();

                    //if the randomly selected value is the same as before, no need to update state
                    if (newValue == oldValue) continue;

                    //a css property changed, so we must update style
                    if (randomizable instanceof CssProperty) {
                        updateState = true;
                        updateStyle = true;

                        //add the new value to the style object
                        style[randomizable.getName()] = newValue;
                    }
                    
                    else if (randomizable instanceof Glyph) {
                        updateState = true;
                        state.glyph = newValue;
                    }
                }

                //update state
                if (updateState) {
                    if (updateStyle) state.style = style;
                    this.setState(state);
                }
            },
            
            //call function every x milliseconds
            //to do: use a prop
            100
        );
    }
}