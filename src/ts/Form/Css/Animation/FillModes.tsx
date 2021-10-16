//imports
import * as React from "react";
import { FillMode, fillModes } from "../../../Randomizables/Css/Animation/FillMode";
import AnimationSubsection from "./AnimationSubsection";

//react component
export default class FillModes extends AnimationSubsection {

    protected subsection = 'fillModes' as const;

    protected values: FillMode[] = fillModes;

    protected isChecked(fillMode: FillMode) {
        return this.props.options.fillModes.includes(fillMode);
    }

    protected toggle(fillMode: FillMode) {
        let options = this.props.options.fillModes.map(x => x);
        if (this.isChecked(fillMode)) {
            options.splice(options.indexOf(fillMode), 1);
        } else {
            options.push(fillMode);
        }
        this.props.changeValue('fillModes', options);
    }
}