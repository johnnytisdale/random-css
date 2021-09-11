//imports
import * as React       from "react";
import ArrayProperty    from "../../classes/ArrayProperty";
import cssProperties    from '../../json/cssProperties.json';
import CssProperty      from "../../classes/CssProperty";
import ColorProperty    from '../../classes/ColorProperty';
import RangeProperty    from '../../classes/RangeProperty'
import Timer            from "../../classes/Timer";

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

/*interface CssProperty {
    camelCase:  string;
    type:       string;
    function?:  string;
    values?:    string[];
    range?:     number[];
    unit?:      string[];
}*/

interface CssProperties {
    [index: string]: any;//CssProperty;
}

export default class Character extends React.Component <Props, State> {

    [index:string]:     any;
    CssProperties:      Array<CssProperty>;
    cssPropertiesJson:  CssProperties;
    interval:           ReturnType<typeof setInterval>;
    timers:             Timers;

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
                )
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
                )
            }
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
            if (typeof this.cssPropertiesJson[name] == 'undefined') continue;
            if (this.cssPropertiesJson[name].type != 'color') continue;
    
            //push class name to array
            classNames.push('random-css-' + name + '-' + this.state.style[name]);
        }
    
        //return string
        return classNames.join(' ');
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

                //loop through the css property objects
                for (let CssProperty of this.CssProperties) {

                    //if this timer's countdown is not complete, do nothing
                    if (!CssProperty.timer.increment()) {
                        continue;
                    }

                    const oldValue = CssProperty.getValue();

                    const newValue = CssProperty.setValue();

                    //the randomly selected value is the same as before, so don't update state
                    if (newValue == oldValue) { continue; }

                    update = true;

                    style[CssProperty.name] = newValue;
                }

                /*

                    //set the value according to the type of css property
                    switch(cssProperty.type) {

                       

                        //get the value by calling a function specific to this property
                        case "function":
                            try {
                                value = this[cssProperty.function]();
                            } catch (e) {
                                console.log(e);
                                clearInterval(this.interval);
                            }
                            break;

                        default:
                            console.log('invalid type: ' + cssProperty.type);
                            continue;
                    }
                    
                */

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