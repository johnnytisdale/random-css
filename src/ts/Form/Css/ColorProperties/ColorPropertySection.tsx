//imports
import * as React                                 from "react";
import CssPropertySection                         from '../../CssPropertySection';
import { ColorPropertyOption, colorPropertyOptions } from "../../../Randomizables/Css/ColorPropertyOptions";
import ColorRange from "../../Input/ColorRange";
import { borderRadiusValues } from "../../../Randomizables/Css/BorderRadius/BorderRadiusOptions";

interface OtherMap {
    rMin: 'rMax';
    rMax: 'rMin';
    gMin: 'gMax';
    gMax: 'gMin';
    bMin: 'bMax';
    bMax: 'bMin';
};

//react component
export default abstract class ColorPropertySection extends CssPropertySection {

    protected abstract cssProperty: 'backgroundColor' | 'borderColor' | 'color' | 'textDecorationColor';

    protected options: ColorPropertyOption[] = colorPropertyOptions;

    private otherMap: OtherMap = {
        rMin: 'rMax',
        rMax: 'rMin',
        gMin: 'gMax',
        gMax: 'gMin',
        bMin: 'bMax',
        bMax: 'bMin',
    };

    protected changeValue(option: ColorPropertyOption, targetValue: number): void {

        let options = this.props.options;

        const max = option.substring(1, 4) == 'Max';
        const currentValue = options.css[this.cssProperty][option];
        const otherValue = options.css[this.cssProperty][this.otherMap[option]];

        //rMax/gMax/bMax
        if (max && targetValue < currentValue && currentValue <= otherValue + 1) {
            options.css[this.cssProperty][option] = otherValue + 1;
        }

        //rMin/gMin/bMin
        else if (!max && targetValue > currentValue && currentValue >= otherValue - 1) {
            options.css[this.cssProperty][option] = otherValue - 1;
        }

        else {
            options.css[this.cssProperty][option] = targetValue;
        }
        
        this.props.setState({options: options});
    }

    renderSection(active: boolean): React.ReactNode {
        return (
            <div className='css-property-section'>
                {
                    this.options.map((option: ColorPropertyOption, i: number) => (
                        <ColorRange
                            active={active}
                            indent={true}
                            key={'color-property-option-' + i}
                            label={option}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                this.changeValue(option, Number(e.currentTarget.value));
                            }}
                            value={this.props.options.css[this.cssProperty][option]}
                        />
                    ))
                }
            </div>  
        );
    }

}