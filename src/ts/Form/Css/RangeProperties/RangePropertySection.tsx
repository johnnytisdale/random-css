import * as React                                 from "react";
import CssPropertySection                         from '../../CssPropertySection';
import CssPropertySectionProps from "../../CssPropertySectionProps";
//import LengthUnit from "../../../Randomizables/Css/LengthUnit";
import LengthUnit from "../../../Randomizables/Css/AbsoluteLengthUnit";
//import lengthUnits from "../../../Randomizables/Css/lengthUnits";
import lengthUnits from "../../../Randomizables/Css/absoluteLengthUnits";
import Number from "../../Input/Number";
import Checkbox from "../../Input/Checkbox";

export default abstract class RangePropertySection extends CssPropertySection {

    protected abstract cssProperty: 'borderWidth';

    constructor(props: CssPropertySectionProps) {
        super(props);
        this.changeNumber = this.changeNumber.bind(this);
        this.changeUnit = this.changeUnit.bind(this);
    }

    protected changeNumber(option: 'max' | 'min', value: string): void {
        let options = this.props.options;
        options.css[this.cssProperty][option] = parseFloat(value);
        this.props.setState(options);
    }

    protected changeUnit(unit: LengthUnit): void {
        let options = this.props.options;
        if (options.css[this.cssProperty].units.includes(unit)) {
            options.css[this.cssProperty].units.splice(options.css[this.cssProperty].units.indexOf(unit), 1);
        } else {
            options.css[this.cssProperty].units.push(unit);
        }
        this.props.setState({options: options});
    }

    renderSection(active: boolean): React.ReactNode {
        return (
            <div className='css-property-section'>
                <Number
                    active={active}
                    indent={true}
                    label='min'
                    max={5}
                    min={1}
                    onChange={(e) => {this.changeNumber('min', e.currentTarget.value)}}
                    value={this.props.options.css[this.cssProperty].min}
                    step={1}
                />
                <Number
                    active={active}
                    indent={true}
                    label='max'
                    max={5}
                    min={1}
                    onChange={(e) => {this.changeNumber('max', e.currentTarget.value)}}
                    value={this.props.options.css[this.cssProperty].max}
                    step={1}
                />
                {
                    lengthUnits.map(
                        (unit: LengthUnit, i: number) => (
                            <Checkbox
                                active={active}
                                checked={this.props.options.css[this.cssProperty].units.includes(unit)}
                                indent={true}
                                key={'unit-' + i}
                                label={unit}
                                onChange={() => this.changeUnit(unit)}
                            />
                        )
                    )
                }
            </div>  
        );
    }

}