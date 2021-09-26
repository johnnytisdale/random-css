//imports
import * as React from "react";
import AnimationOptions from "../Options/Randomizables/Css/Properties/AnimationOptions";
import Checkbox from "./Checkbox";
import CssPropertySection from './CssPropertySection';
import CssPropertySectionProps from "./CssPropertySectionProps";

interface AnimationProps extends CssPropertySectionProps {
    options: AnimationOptions;
}

//react component
export default class Animation<Props, State> extends CssPropertySection<AnimationProps, State> {

    renderSubsection(active: boolean): React.ReactNode {
        return (
            <div className='subsection'>
                <Checkbox
                    active={active}
                    checked={this.props.options.rotate}
                    label='rotate'
                    expandable={false}
                    toggle={() => this.props.setState('rotate', !this.props.options.rotate)}
                />
                <Checkbox
                    active={active}
                    checked={this.props.options.scale}
                    label='scale'
                    expandable={false}
                    toggle={() => this.props.setState('scale', !this.props.options.scale)}
                />
                <Checkbox
                    active={active}
                    checked={this.props.options.skew}
                    label='skew'
                    expandable={false}
                    toggle={() => this.props.setState('skew', !this.props.options.skew)}
                />
            </div>
        );
        
    }

}