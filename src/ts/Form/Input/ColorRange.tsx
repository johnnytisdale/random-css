//imports
import * as React from "react";
import Range from "./Range";

//react component
export default class ColorRange extends Range {
    renderInput(): React.ReactNode {
        return (
            <input
                type='range'
                disabled={!this.props.active}
                max={255}
                min={0}
                onChange={this.props.onChange}
                value={this.props.value}
            />
        );
    }
}