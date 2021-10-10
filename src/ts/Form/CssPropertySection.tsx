//imports
import * as React from "react";
import Checkbox from "./Input/Checkbox";
import { CssOptions } from '../Randomizables/Css/CssOptions';
import CssPropertySectionProps from "./CssPropertySectionProps";
import CssPropertySectionState from './CssPropertySectionState';

//react component
export default abstract class CssPropertySection extends React.Component<CssPropertySectionProps, CssPropertySectionState> {

    protected abstract cssProperty: keyof CssOptions;

    //create new instance
    constructor(props:CssPropertySectionProps) {
        super(props);
        this.state = {expanded: false};
        this.renderSection = this.renderSection.bind(this);
    }

    protected abstract renderSection(active: boolean): React.ReactNode;

    render() {
        const checked = this.props.options.css[this.cssProperty].enabled;
        return (
            <>
                <Checkbox
                    active={true}
                    checked={checked}
                    expand={() => this.setState({expanded: !this.state.expanded})}
                    expandable={true}
                    label={this.cssProperty}
                    onChange={this.props.toggle}
                />
                { !this.state.expanded ? null : this.renderSection(checked) }
            </>
        );
    }

}