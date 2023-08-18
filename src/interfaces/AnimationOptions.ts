import AnimationDirection from "../enums/AnimationDirection";
import AnimationEasingFunction from "../enums/AnimationEasingFunction";
import AnimationFillMode from "../enums/AnimationFillMode";
import AnimationIterationCountOptions from "./AnimationIterationCountOptions";
import AnimationStepPosition from "../enums/AnimationStepPosition";
import AnimationTransformation from "../enums/AnimationTransformation";
import Option from "./Option";

export default interface AnimationOptions extends Option {
  directions?: AnimationDirection[];
  durationMax?: number;
  durationMin?: number;
  easingFunctions?: AnimationEasingFunction[];
  fillModes?: AnimationFillMode[];
  iterationCount?: AnimationIterationCountOptions;
  stepPositions?: AnimationStepPosition[];
  transformations?: AnimationTransformation[];
}
