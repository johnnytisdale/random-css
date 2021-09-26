//imports
import * as React from "react";
import CssPropertySectionProps from "./CssPropertySectionProps";
import Checkbox from "./Checkbox";

//react component state
interface CssPropertySectionState {
    expanded: boolean;
}

//react component
export default abstract class
CssPropertySection<Props, State> extends
React.Component<Props & CssPropertySectionProps, CssPropertySectionState> {

    //create new instance
    constructor(props: Props & CssPropertySectionProps) {

        //allow access to this.props in constructor
        super(props);

        //initial state
        this.state = {expanded: false};

    }

    abstract renderSubsection(active: boolean): React.ReactNode;

    render() {
        return (
            <>
                <Checkbox
                    active={true}
                    checked={this.props.options.enabled}
                    expand={() => this.setState({expanded: !this.state.expanded})}
                    expandable={true}
                    label='animation'
                    toggle={this.props.toggle}
                />
                { !this.state.expanded ? null : this.renderSubsection(this.props.options.enabled) }
            </>
        );
    }

}