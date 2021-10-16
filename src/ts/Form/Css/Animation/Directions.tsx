//imports
import * as React from "react";
import { Direction, directions } from "../../../Randomizables/Css/Animation/Direction";
import AnimationSubsection from "./AnimationSubsection";

//react component
export default class Directions extends AnimationSubsection {

    protected subsection = 'directions' as const;

    protected values: Direction[] = directions;

    protected isChecked(direction: Direction) {
        return this.props.options.directions.includes(direction);
    }

    protected toggle(direction: Direction) {
        let options = this.props.options.directions.map(x => x);
        if (this.isChecked(direction)) {
            options.splice(options.indexOf(direction), 1);
        } else {
            options.push(direction);
        }
        this.props.changeValue('directions', options);
    }
}