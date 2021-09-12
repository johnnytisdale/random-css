//imports
import * as React       from "react";

import cssProperties    from '../../json/cssProperties.json';

import Animation        from "../../classes/Animation";
import ArrayProperty    from "../../classes/ArrayProperty";
import BorderRadius     from "../../classes/BorderRadius";
import CssProperty      from "../../classes/CssProperty";
import ColorProperty    from '../../classes/ColorProperty';
import RangeProperty    from '../../classes/RangeProperty'

interface Props {
    baseStyle:  object,
    character:  string,
    size:       number,
    unsafe:     boolean
}

interface State {
    style: Style;
}

interface Style {
    [index:string]:      string;
    animation?:          string;
    animationPlayState?: string;
}

interface CssProperties {
    [index: string]: any;//CssProperty;
}

export default class Character extends React.Component <Props, State> {

    [index:string]:     any;
    CssProperties:      Array<CssProperty>;
    cssPropertiesJson:  CssProperties;
    interval:           ReturnType<typeof setInterval>;

    //create a new instance
	constructor(props:Props) {

        //allow access to this.props in constructor
		super(props);

        //css properties
		this.cssPropertiesJson = cssProperties;

        //array to hold CssProperty objects
        this.CssProperties = [];

        //loop through the css property names in the json
        for (let cssPropertyName in this.cssPropertiesJson) {

            //get the json object corresponding to this css property
            const cssProperty = this.cssPropertiesJson[cssPropertyName];

            //create a new CssProperty object based on the "type" of css property

            //color
            if (cssProperty.type == 'color') {
                this.CssProperties.push(
                    new ColorProperty(
                        cssPropertyName,
                        cssProperty.camelCase,
                        this.props.unsafe
                    )
                );
            }

            //array
            else if (cssProperty.type == 'array') {
                this.CssProperties.push(
                    new ArrayProperty(
                        cssPropertyName,
                        cssProperty.camelCase,
                        this.props.unsafe,
                        cssProperty.values
                    )
                );
            }

            //range
            else if (cssProperty.type == 'range') {
                this.CssProperties.push(
                    new RangeProperty(
                        cssPropertyName,
                        cssProperty.camelCase,
                        this.props.unsafe,
                        cssProperty.min,
                        cssProperty.max,
                        cssProperty.unit
                    )
                );
            }

            //animation
            else if (cssPropertyName == 'animation') {
                this.CssProperties.push(
                    new Animation(this.props.unsafe)
                );
            }

            //border radius
            else if (cssPropertyName == 'border-radius') {
                this.CssProperties.push(
                    new BorderRadius(this.props.unsafe)
                );
            }
        }

        //set initial state
        this.state = {style: {}};
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

                //loop through the css property objects
                for (let CssProperty of this.CssProperties) {

                    //if this timer's countdown is not complete, do nothing
                    if (!CssProperty.timer.increment()) continue;

                    //save current value for later comparison
                    const oldValue = CssProperty.getValue();

                    //set a new random value
                    const newValue = CssProperty.setValue();

                    //if the randomly selected value is the same as before, no need to update state
                    if (newValue == oldValue) continue;

                    //the value has changed, so we must update state
                    update = true;

                    //add the new value to the style object
                    style[CssProperty.name] = newValue;
                }

                //update state
                if (update) this.setState({style: style});
            },
            
            //call function every x milliseconds
            //to do: use a prop
            100
        );
    }
}