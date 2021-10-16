//imports
import * as React from "react";
import { TimingFunction, timingFunctions } from "../../../Randomizables/Css/Animation/TimingFunction";
import AnimationSubsection from "./AnimationSubsection";

//react component
export default class TimingFunctions extends AnimationSubsection {

    protected subsection = 'timingFunctions' as const;

    protected values: TimingFunction[] = timingFunctions;

    protected isChecked(timingFunction: TimingFunction) {
        return this.props.options.timingFunctions.includes(timingFunction);
    }

    protected toggle(timingFunction: TimingFunction) {
        let options = this.props.options.timingFunctions.map(x => x);
        if (this.isChecked(timingFunction)) {
            options.splice(options.indexOf(timingFunction), 1);
        } else {
            options.push(timingFunction);
        }
        this.props.changeValue('timingFunctions', options);
    }
}