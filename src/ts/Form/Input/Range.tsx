//imports
import * as React from "react";
import Input from './Input';
import InputProps from "./InputProps";

//react component props
interface RangeProps extends InputProps {
    max?:  number;
    min?:  number;
    value: number;
}

//react component
export default class Range extends Input<RangeProps> {

    renderInput(): React.ReactNode {
        return (
            <input
                type='range'
                disabled={!this.props.active}
                max={this.props.max}
                min={this.props.min}
                onChange={this.props.onChange}
            />
        );
    }
}