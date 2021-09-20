//imports
import * as React           from 'react';
import BaseStyle            from './BaseStyle';
import CssProperty          from './Randomizables/Css/CssProperty';
import Glyph                from './Randomizables/Glyph/Glyph';
import Randomizable         from './Randomizables/Randomizable';
import RandomizableFactory  from './Randomizables/RandomizableFactory';
import Style                from './Style';


interface Props {
    baseStyle:      BaseStyle;
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

//define and expert react component
export default class Character extends React.Component <Props, State> {

    //instance variables
    interval:           ReturnType<typeof setInterval>;
    randomizables:      Randomizable[];

    //create a new instance
	constructor(props:Props) {

        //allow access to this.props in constructor
		super(props);

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
    
        const classNames = Object.keys(this.state.style).map(
            (name: keyof Style) => 'random-css-' + name + '-' + this.state.style[name]
        );
    
        return this.getBaseClass() + ' ' + classNames.join(' ');
    }

    getBaseClass() {

        //if applying inline style, no need to use classes
        if (this.props.unsafe) return;
    
        //css class
        return 'random-css-character-' + this.props.size + (Number(this.props.size) % 1 == 0 ? '-0' : '');
    }

    getStyle(): React.CSSProperties {
    
        //if not using inline style, return null
        if (!this.props.unsafe) return null;
    
        //clone the base style object
        let style: any = {...this.props.baseStyle, ...this.state.style};
                
        return style;
    }

    //render element in the dom
	render(): React.ReactNode {
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
                let style = this.state.style;

                let updateState = false;

                //do not update style if no css properties change
                let updateStyle = false;

                //loop through the Randomizable objects
                for (let randomizable of this.randomizables) {

                    //this randomizable is disabled
                    if (!randomizable.isEnabled()) {

                        //it was disabled since last check
                        if (randomizable.justDisabled()) {
                            
                            //remove styling
                            if (randomizable instanceof CssProperty) {
                                delete style[randomizable.getName()];
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