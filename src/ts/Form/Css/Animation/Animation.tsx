//imports
import * as React                                 from "react";
import { AnimationOptions, AnimationOptionValue } from "../../../Randomizables/Css/Animation/AnimationOptions";
import CssPropertySection                         from '../../CssPropertySection';
import Directions                                 from './Directions';
import Iterations                                 from "./Iterations";
import FillModes                                  from "./FillModes";
import TimingFunctions                            from "./TimingFunctions";
import Transformations                            from './Transformations';
import CssPropertySectionProps from "../../CssPropertySectionProps";

//react component
export default class Animation extends CssPropertySection {

    protected cssProperty = 'animation' as const;

    constructor(props: CssPropertySectionProps) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    protected changeValue(option: keyof AnimationOptions, value: AnimationOptionValue): void {
        let options = this.props.options;
        options.css.animation[option] = value;
        this.props.setState(options);
    }

    renderSection(active: boolean): React.ReactNode {
        return (
            <div className='css-property-section'>
                <Transformations
                    active={active}
                    changeValue={this.changeValue}
                    options={this.props.options.css.animation}
                />
                <Directions
                    active={active}
                    changeValue={this.changeValue}
                    options={this.props.options.css.animation}
                />
                <FillModes
                    active={active}
                    changeValue={this.changeValue}
                    options={this.props.options.css.animation}
                />
                <Iterations
                    active={active}
                    changeValue={this.changeValue}
                    options={this.props.options.css.animation}
                />
                
                <TimingFunctions
                    active={active}
                    changeValue={this.changeValue}
                    options={this.props.options.css.animation}
                />
            </div>  
        );
    }

}