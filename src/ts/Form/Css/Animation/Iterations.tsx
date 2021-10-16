//imports
import * as React from "react";
import { Iteration, iterations } from "../../../Randomizables/Css/Animation/Iteration";
import AnimationSubsection from "./AnimationSubsection";

//react component
export default class Iterations extends AnimationSubsection {

    protected subsection = 'iterations' as const;

    protected values: Iteration[] = iterations;

    protected isChecked(iteration: Iteration) {
        return this.props.options.iterations.includes(iteration);
    }

    protected toggle(iteration: Iteration) {
        let options = this.props.options.iterations.map(x => x);
        if (this.isChecked(iteration)) {
            options.splice(options.indexOf(iteration), 1);
        } else {
            options.push(iteration);
        }
        this.props.changeValue('iterations', options);
    }
}