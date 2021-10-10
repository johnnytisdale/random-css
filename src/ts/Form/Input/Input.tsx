//imports
import * as React from "react";
import InputProps from "./InputProps";

//react component
export default abstract class Input<Props> extends React.Component <Props & InputProps> {

    constructor(props: Props & InputProps) {
        super(props);
        this.clickLabel = this.clickLabel.bind(this);
    }

    abstract renderInput(): React.ReactNode;

    clickLabel(): void {
        
    }

    getClassName(): string {
        let className = 'option';
        if (this.props.indent) className += ' indent';
        if (!this.props.active) className += ' inactive';
        return className;
    }

    getLabelClassName(): string {
        let className = 'label';
        if (this.props.expandable) className += ' expandable';
        if (this.props.expanded) className += ' expanded';
        return className;
    }

    render() {
        return (
            <div className={this.getClassName()}>
                <div
                    className={this.getLabelClassName()}
                    onClick={this.props.expandable ? ((e) => {this.props.expand(e);}) : null}
                >
                    {this.props.label}
                </div>
                <div className='input'>
                    {this.renderInput()}
                </div>
            </div>
        );
    }

}