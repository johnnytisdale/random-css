//imports
import * as React from "react";
import Input from './Input';
import InputProps from "./InputProps";

//react component props
interface NumberProps extends InputProps {
    max?:  number;
    min?:  number;
    step:  number;
    value: number;
}

//react component
export default class Number extends Input<NumberProps> {

    renderInput(): React.ReactNode {
        return (
            <input
                type='number'
                disabled={!this.props.active}
                max={this.props.max}
                min={this.props.min}
                onChange={this.props.onChange}
                step={this.props.step}
                value={this.props.value}
            />
        );
    }
}