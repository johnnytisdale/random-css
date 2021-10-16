//imports
import * as React from "react";
import {CssOptions} from "../Randomizables/Css/CssOptions";
import CssPropertyOptions from "../Randomizables/Css/CssPropertyOptions";
import CssPropertySubsectionProps from "./CssPropertySubsectionProps";
import { AnimationOptions, AnimationOptionValue } from "../Randomizables/Css/Animation/AnimationOptions";

//react component
export default abstract class CssPropertySubsection<Props> extends React.Component<Props & CssPropertySubsectionProps> {

    protected abstract subsection: string;

    //create new instance
    constructor(props: Props & CssPropertySubsectionProps) {

        //allow access to this.props in constructor
        super(props);
    }

    /*protected changeValue(option: keyof CssPropertyOptions & keyof AnimationOptions, value: AnimationOptionValue & boolean): void {
        let options = this.props.options;
        options.css[this.props.cssProperty][option] = value;
        this.props.setState({options: options});
    }*/

    abstract renderSubsection(active: boolean): React.ReactNode;

    render() {
        return (
            <div className='subsection'>
                <div className='title'>{this.subsection}</div>
                {this.renderSubsection(this.props.active)}
            </div>
        );
    }
}