import * as React from "react";
import { ArrayPropertyName } from "../../../Randomizables/Css/ArrayProperty";
import ArrayPropertyOption from "./ArrayPropertyOption";
import Checkbox from "../../Input/Checkbox";
import CssPropertySection from '../../CssPropertySection';
import CssPropertySectionProps from "../../CssPropertySectionProps";

export default abstract class ArrayPropertySection extends CssPropertySection {

    constructor(props: CssPropertySectionProps) {
        super(props);
        this.renderSection = this.renderSection.bind(this);
    }
    
    protected abstract cssProperty: ArrayPropertyName;

    protected abstract values: ArrayPropertyOption[];

    protected changeValue(value: ArrayPropertyOption): void {
        //let options = JSON.parse(JSON.stringify(this.props.options));
        let options = this.props.options;
        if (options.css[this.cssProperty].values.includes(value)) {
            options.css[this.cssProperty].values.splice(options.css[this.cssProperty].values.indexOf(value), 1);
        } else {
            options.css[this.cssProperty].values.push(value);
        }
        this.props.setState({options: options});
    }

    protected getLabel(option: ArrayPropertyOption): string {
        return option;
    }

    renderSection(active: boolean): React.ReactNode {
        return (
            <div className='css-property-section'>
                {
                    this.values.map((option: ArrayPropertyOption, i: number) => {
                        return (
                        <Checkbox 
                            active={active}
                            checked={this.props.options.css[this.cssProperty].values.includes(option)}
                            indent={true}
                            key={'font-family-value-' + i}
                            label={this.getLabel(option)}
                            onChange={(e) => {
                                this.changeValue(option);
                            }}
                        />
                    )})
                }
            </div>  
        );
    }
}