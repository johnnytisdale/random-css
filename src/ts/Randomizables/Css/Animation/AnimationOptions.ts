import { Axis }           from './Axis';
import CssPropertyOptions from "../CssPropertyOptions";
import { Direction }      from './Direction';
import { FillMode }       from './FillMode';
import { Iteration }      from './Iteration';
import { ScaleDirection } from './ScaleDirection';
import { TimingFunction } from './TimingFunction';
import { Transformation } from './Transformation';

interface AnimationOptions extends CssPropertyOptions {
    axes:            Axis[];
    directions:      Direction[];
    fillModes:       FillMode[];
    iterations:      Iteration[];
    scaleDirections: ScaleDirection[];
    timingFunctions: TimingFunction[];
    transformations: Transformation[];
}

type AnimationOptionValue = (
      boolean
    & Axis[]
    & Direction[]
    & FillMode[]
    & Iteration[]
    & ScaleDirection[]
    & TimingFunction[]
    & Transformation[]
);

export { AnimationOptions, AnimationOptionValue };