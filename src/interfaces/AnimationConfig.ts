import AnimationDirection from "../enums/AnimationDirection";
import AnimationEasingFunction from "../enums/AnimationEasingFunction";
import AnimationFillMode from "../enums/AnimationFillMode";
import AnimationIterationCountConfig from "./AnimationIterationCountConfig";
import AnimationStepPosition from "../enums/AnimationStepPosition";
import AnimationTransformation from "../enums/AnimationTransformation";
import Config from "./Config";

export default interface AnimationConfig extends Config {
  directions?: AnimationDirection[];
  durationMax?: number;
  durationMin?: number;
  easingFunctions?: AnimationEasingFunction[];
  fillModes?: AnimationFillMode[];
  iterationCount?: AnimationIterationCountConfig;
  stepPositions?: AnimationStepPosition[];
  transformations?: AnimationTransformation[];
}
