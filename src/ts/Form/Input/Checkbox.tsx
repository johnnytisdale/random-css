//imports
import * as React from "react";
import Input from './Input';
import InputProps from "./InputProps";

//react component props
interface CheckboxProps extends InputProps {
    checked: boolean;
}

//react component
export default class Checkbox extends Input<CheckboxProps> {

    renderInput(): React.ReactNode {
        return (
            <input
                type='checkbox'
                checked={this.props.checked}
                disabled={!this.props.active}
                onChange={this.props.onChange}
            />
        );
    }
}