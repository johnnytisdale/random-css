//imports
import * as React from "react";
import AnimationProps from "./AnimationProps";
import Checkbox from "../../Input/Checkbox";
import CssPropertySubsection from '../../CssPropertySubsection';
import CssPropertySubsectionProps from "../../CssPropertySubsectionProps";
import { Direction, directions } from "../../../Randomizables/Css/Animation/Direction";
import { AnimationOptions, AnimationOptionValue } from "../../../Randomizables/Css/Animation/AnimationOptions";
import { Iteration } from "../../../Randomizables/Css/Animation/Iteration";
import { TimingFunction } from "../../../Randomizables/Css/Animation/TimingFunction";
import { Transformation } from "../../../Randomizables/Css/Animation/Transformation";

type Subsection = 'directions' | 'fillModes' | 'iterations' | 'timingFunctions' | 'transformations';

type Value = Direction | FillMode | Iteration | TimingFunction | Transformation;

//react component
export default abstract class AnimationSubsection extends CssPropertySubsection<AnimationProps> {

    protected abstract subsection: Subsection;

    protected values: Direction[] | FillMode[] | Iteration[] | TimingFunction[] | Transformation[];

    constructor(props: AnimationProps & CssPropertySubsectionProps) {
        super(props);
        this.isChecked = this.isChecked.bind(this);
        this.toggle    = this.toggle   .bind(this);
    }

    protected abstract isChecked(value: Value): boolean;

    protected abstract toggle(value: Value): void;

    renderSubsection(active: boolean): React.ReactNode {
        return this.values.map((value: Value, i: number) => <Checkbox
            active={active}
            checked={this.isChecked(value)}
            key={i}
            label={value}
            onChange={() => this.toggle(value)}
        />);
    }
}