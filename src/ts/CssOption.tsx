//imports
import * as React from "react";

//interfaces
import {defaultOptions} from './Options/Options';
import CssPropertyOptions from "./Options/Randomizables/Css/CssPropertyOptions";

//react component props
interface Props {
    name:           string;
    options:        CssPropertyOptions;
    toggleEnabled:  React.ChangeEventHandler;
}

//react component state
interface State {}

//react component
export default abstract class CssOption extends React.Component <Props, State> {

    //create new instance
    constructor(props:Props) {

        //allow access to this.props in constructor
        super(props);

        //initial state
        this.state = {};

    }

    render() {
        return (   
            <div className='option'>
                <div className='label'>{this.props.name}</div>
                <div className='input'>
                    <input
                        type='checkbox'
                        checked={this.props.options.enabled}
                        onChange={this.props.toggleEnabled}
                    />
                </div>
            </div>
        );
    }

}