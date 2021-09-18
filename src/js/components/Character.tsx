//react
import * as React           from "react";

//json
import cssProperties        from '../json/cssProperties.json';

//interfaces
import CssPropertyOptions from "../interfaces/CssPropertyOptions";

//Randomizables
import CssProperty          from "../classes/CssProperty";
import Glyph                from "../classes/Glyph";
import Randomizable         from "../classes/Randomizable";
import RandomizableFactory  from "../classes/RandomizableFactory";


interface Props {
    baseStyle:  object,
    character:  string,
    factory:    RandomizableFactory;
    size:       number,
    unsafe:     boolean
}

interface State {
    glyph?: string;
    style?: Style;
}

interface Style {
    [index:string]:      string;
    animation?:          string;
    animationPlayState?: string;
}



export default class Character extends React.Component <Props, State> {

    //instance variables
    cssPropertiesJson:  CssPropertyOptions;
    interval:           ReturnType<typeof setInterval>;
    leet:               string[];
    Randomizables:      Array<Randomizable>;

    //create a new instance
	constructor(props:Props) {

        //allow access to this.props in constructor
		super(props);

        //css properties
		this.cssPropertiesJson = cssProperties;

        //array to hold CssProperty objects
        this.Randomizables = this.getRandomizables();
        
        console.log(this.Randomizables);

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
    
            //push class name to array
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

    getRandomizables(): Randomizable[] {

        let randomizables = [];

        //loop through the css property names in the json
        for (let cssPropertyName in this.cssPropertiesJson) {

            //get the json object corresponding to this css property
            const cssProperty = this.cssPropertiesJson[cssPropertyName];

            //get a new CssProperty object based on the "type" of css property
            const randomizable = this.props.factory.make('css', cssPropertyName, cssProperty);
            
            randomizables.push(randomizable);
        }

        randomizables.push(this.props.factory.make('glyph', 'glyph', {character: this.props.character}));

        return randomizables;
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

        //if (this.props.character != 'r') return;

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
                for (let randomizable of this.Randomizables) {

                    //if this timer's countdown is not complete, do nothing
                    if (!randomizable.timer.increment()) continue;

                    //save current value for later comparison
                    const oldValue = randomizable.getValue();

                    //set a new random value
                    const newValue = randomizable.setValue();

                    //if the randomly selected value is the same as before, no need to update state
                    if (newValue == oldValue) continue;

                    //a css property changed, so we must update style
                    if (randomizable instanceof CssProperty) {
                        updateState = true;
                        updateStyle = true;

                        //add the new value to the style object
                        style[randomizable.name] = newValue;
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