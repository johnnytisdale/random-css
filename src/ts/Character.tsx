//imports
import * as React          from 'react';
import BaseStyle           from './BaseStyle';
import CssProperty         from './Randomizables/Css/CssProperty';
import Glyph               from './Randomizables/Glyph/Glyph';
import Randomizable        from './Randomizables/Randomizable';
import RandomizableFactory from './Randomizables/RandomizableFactory';
import Style               from './Style';

//react component props
interface Props {
    baseStyle: BaseStyle;
    character: string;
    factory:   RandomizableFactory;
    size:      number;
    unsafe:    boolean;
}

//react component state
interface State {
    glyph?: string;
    style?: Style;
}

//define and export react component
export default class Character extends React.Component <Props, State> {

    //instance variables
    private interval:      ReturnType<typeof setInterval>;
    private randomizables: Randomizable[];

    //create a new instance
    constructor(props:Props) {

        //call parent class's constructor
        super(props);

        //randomizables
        this.randomizables = props.factory.getRandomizables(props.character);

        //initial state
        this.state = {
            glyph: props.character,
            style: {}
        };
    }

    //construct class name based on font size
    private getBaseClass(): string {
        return 'random-css-character-' + this.props.size + (Number(this.props.size) % 1 == 0 ? '-0' : '');
    }

    //get a string of space separated css class names
    private getClassNames(): string {

        //if using inline style, no css class named are needed
        if (this.props.unsafe) return null;

        //class names for properties that remain constant
        const constantClasses = this.getBaseClass();

        //class names for properties that are randomized
        const randomizedClasses = Object.keys(this.state.style).map(
            (name: keyof Style) => 'random-css-' + name + '-' + this.state.style[name]
        );
        
        return constantClasses + randomizedClasses.join(' ');
    }

    //get updated style
    getStyle(): React.CSSProperties {
    
        //if not using inline style, return null
        if (!this.props.unsafe) return null;
    
        //combine base style with randomized style
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
    public componentDidMount(): void {

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
                        style[randomizable.getName()] = newValue;
                        updateState = true;
                        updateStyle = true;
                    }
                    
                    //the glyph changed, so we must update state
                    else if (randomizable instanceof Glyph) {
                        state.glyph = newValue;
                        updateState = true;
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