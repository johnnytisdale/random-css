//imports
import * as React                                 from "react";
import CssPropertySection                         from '../../CssPropertySection';
import { ColorPropertyOption, colorPropertyOptions } from "../../../Randomizables/Css/ColorPropertyOptions";
import ColorRange from "../../Input/ColorRange";

//react component
export default abstract class ColorPropertySection extends CssPropertySection {

    protected abstract cssProperty: 'backgroundColor' | 'borderColor' | 'color' | 'textDecorationColor';

    protected options: ColorPropertyOption[] = colorPropertyOptions;

    protected changeValue(option: ColorPropertyOption, value: number): void {
        let options = this.props.options;
        options.css[this.cssProperty][option] = value;
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