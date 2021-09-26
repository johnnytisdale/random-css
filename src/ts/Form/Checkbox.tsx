//imports
import * as React from "react";

//react component props
interface Props {
    active:     boolean;
    checked:    boolean;
    expandable: boolean;
    label:      string;
    toggle:     React.ChangeEventHandler;
}

//react component state
interface State {}

//react component
export default abstract class Checkbox extends React.Component <Props, State> {

    //create new instance
    constructor(props:Props) {

        //allow access to this.props in constructor
        super(props);

        //initial state
        this.state = {};

    }

    getClassName(): string {
        let className = 'option';
        if (!this.props.active) className += ' inactive';
        return className;
    }

    getLabelClassName(): string {
        let className = 'label';
        if (this.props.expandable) className += ' expandable';
        return className;
    }

    render() {
        return (
            <div className={this.getClassName()}>
                <div className={this.getLabelClassName()}>{this.props.label}</div>
                <div className='input'>
                    <input
                        type='checkbox'
                        checked={this.props.checked}
                        disabled={!this.props.active}
                        onChange={this.props.toggle}
                    />
                </div>
            </div>
        );
    }

}