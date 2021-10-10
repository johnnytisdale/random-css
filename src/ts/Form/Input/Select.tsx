//imports
import * as React from "react";
import Input from './Input';
import InputProps from "./InputProps";

interface SelectOption {
    label:  string;
    value?: string;
}

//react component props
interface SelectProps extends InputProps {
    options: SelectOption[];
}

//react component
export default class Select extends Input<SelectProps> {

    renderInput(): React.ReactNode {
        return (
            <select
                disabled={!this.props.active}
                onChange={this.props.onChange}
            >
                {
                    this.props.options.map((option: SelectOption, i: number) => (
                        <option key={`${this.props.label}-option-${i}`} value={option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </select>
        );
    }
}