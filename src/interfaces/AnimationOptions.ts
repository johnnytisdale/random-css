import AnimationDirection from "../enums/AnimationDirection";
import AnimationEasingFunction from "../enums/AnimationEasingFunction";
import AnimationFillMode from "../enums/AnimationFillMode";
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

export interface AnimationOptions extends Option {
  directions?: AnimationDirection[];
  durationMax?: number;
  durationMin?: number;
  easingFunctions?: AnimationEasingFunction[];
  fillModes?: AnimationFillMode[];
  iterationCount?: AnimationIterationCountOptions;
  transformations?: AnimationTransformation[];
}

export const DEFAULT_ANIMATION_DIRECTIONS = Object.values(AnimationDirection);
export const DEFAULT_ANIMATION_DURATION_MAX = 3;
export const DEFAULT_ANIMATION_DURATION_MIN = 1;
export const DEFAULT_ANIMATION_DURATION_MAX_UNSAFE = 3000;
export const DEFAULT_ANIMATION_DURATION_MIN_UNSAFE = 300;
export const DEFAULT_ANIMATION_EASING_FUNCTIONS = Object.values(
  AnimationEasingFunction,
);
export const DEFAULT_ANIMATION_ENABLED = false;
export const DEFAULT_ANIMATION_FILL_MODES = Object.values(AnimationFillMode);
export const DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE = true;
export const DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE_PROBABILITY = 0.5;
export const DEFAULT_ANIMATION_ITERATION_COUNT_INTEGERS_ONLY = false;
export const DEFAULT_ANIMATION_ITERATION_COUNT_MAX = 3;
export const DEFAULT_ANIMATION_ITERATION_COUNT_MIN = 1;
export const DEFAULT_ANIMATION_ITERATION_COUNT_MIN_UNSAFE = 0.25;
export const DEFAULT_ANIMATION_ITERATION_COUNT_ZERO = false;
export const DEFAULT_ANIMATION_ITERATION_COUNT = {
  infinite: DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE,
  infiniteProbability: DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE_PROBABILITY,
  integersOnly: DEFAULT_ANIMATION_ITERATION_COUNT_INTEGERS_ONLY,
  max: DEFAULT_ANIMATION_ITERATION_COUNT_MAX,
  min: DEFAULT_ANIMATION_ITERATION_COUNT_MIN_UNSAFE,
  zero: DEFAULT_ANIMATION_ITERATION_COUNT_ZERO,
};
export const DEFAULT_ANIMATION_TRANSFORMATIONS = Object.values(
  AnimationTransformation,
);
export const DEFAULT_ANIMATION_OPTIONS: AnimationOptions = {
  directions: DEFAULT_ANIMATION_DIRECTIONS,
  durationMax: DEFAULT_ANIMATION_DURATION_MAX_UNSAFE,
  durationMin: DEFAULT_ANIMATION_DURATION_MIN_UNSAFE,
  easingFunctions: DEFAULT_ANIMATION_EASING_FUNCTIONS,
  enabled: DEFAULT_ANIMATION_ENABLED,
  fillModes: DEFAULT_ANIMATION_FILL_MODES,
  iterationCount: DEFAULT_ANIMATION_ITERATION_COUNT,
  transformations: DEFAULT_ANIMATION_TRANSFORMATIONS,
};
