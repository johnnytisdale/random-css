import AnimationDirection from "../enums/AnimationDirection";
import AnimationEasingFunction from "../enums/AnimationEasingFunction";
import AnimationFillMode from "../enums/AnimationFillMode";
import AnimationStepPosition from "../enums/AnimationStepPosition";
import AnimationTransformation from "../enums/AnimationTransformation";
import Option from "./Option";

export interface AnimationIterationCountOptions {
  infinite?: boolean;
  infiniteProbability?: number;
  integersOnly?: boolean;
  max?: number;
  min?: number;
  zero?: boolean;
}

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

export const DEFAULT_ANIMATION_DIRECTIONS = Object.values(AnimationDirection);
export const DEFAULT_ANIMATION_DURATION_MAX_EXTERNAL = 3;
export const DEFAULT_ANIMATION_DURATION_MIN_EXTERNAL = 1;
export const DEFAULT_ANIMATION_DURATION_MAX = 3000;
export const DEFAULT_ANIMATION_DURATION_MIN = 300;
export const DEFAULT_ANIMATION_EASING_FUNCTIONS = Object.values(
  AnimationEasingFunction
);
export const DEFAULT_ANIMATION_ENABLED = false;
export const DEFAULT_ANIMATION_FILL_MODES = Object.values(AnimationFillMode);
export const DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE = true;
export const DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE_PROBABILITY = 0.5;
export const DEFAULT_ANIMATION_ITERATION_COUNT_INTEGERS_ONLY = false;
export const DEFAULT_ANIMATION_ITERATION_COUNT_MAX = 3;
export const DEFAULT_ANIMATION_ITERATION_COUNT_MIN = 0.25;
export const DEFAULT_ANIMATION_ITERATION_COUNT_MIN_EXTERNAL = 1;
export const DEFAULT_ANIMATION_ITERATION_COUNT_ZERO = false;
export const DEFAULT_ANIMATION_ITERATION_COUNT = {
  infinite: DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE,
  infiniteProbability: DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE_PROBABILITY,
  integersOnly: DEFAULT_ANIMATION_ITERATION_COUNT_INTEGERS_ONLY,
  max: DEFAULT_ANIMATION_ITERATION_COUNT_MAX,
  min: DEFAULT_ANIMATION_ITERATION_COUNT_MIN,
  zero: DEFAULT_ANIMATION_ITERATION_COUNT_ZERO,
};
export const DEFAULT_ANIMATION_STEP_POSITIONS = Object.values(
  AnimationStepPosition
);
export const DEFAULT_ANIMATION_TRANSFORMATIONS = Object.values(
  AnimationTransformation
);
export const DEFAULT_ANIMATION_OPTIONS: AnimationOptions = {
  directions: DEFAULT_ANIMATION_DIRECTIONS,
  durationMax: DEFAULT_ANIMATION_DURATION_MAX,
  durationMin: DEFAULT_ANIMATION_DURATION_MIN,
  easingFunctions: DEFAULT_ANIMATION_EASING_FUNCTIONS,
  enabled: DEFAULT_ANIMATION_ENABLED,
  fillModes: DEFAULT_ANIMATION_FILL_MODES,
  iterationCount: DEFAULT_ANIMATION_ITERATION_COUNT,
  stepPositions: DEFAULT_ANIMATION_STEP_POSITIONS,
  transformations: DEFAULT_ANIMATION_TRANSFORMATIONS,
};
