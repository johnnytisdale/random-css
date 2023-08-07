import AnimationDirection from "../../enums/AnimationDirection";
import AnimationEasingFunction from "../../enums/AnimationEasingFunction";
import AnimationFillMode from "../../enums/AnimationFillMode";
import AnimationTransformation from "../../enums/AnimationTransformation";
import CssProperty from "./CssProperty";
import ECssProperty from "../../enums/CssProperty";
import Option from "../../interfaces/Option";

export interface AnimationIterationCountOptions {
  infinite?: boolean,
  infiniteProbability?: number,
  integersOnly?: boolean,
  max?: number,
  min?: number,
  zero?: boolean
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
  AnimationEasingFunction
);
export const DEFAULT_ANIMATION_ENABLED = false;
export const DEFAULT_ANIMATION_FILL_MODES = Object.values(AnimationFillMode);
export const DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE = true;
export const DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE_PROBABILITY = .5;
export const DEFAULT_ANIMATION_ITERATION_COUNT_INTEGERS_ONLY = false;
export const DEFAULT_ANIMATION_ITERATION_COUNT_MAX = 3;
export const DEFAULT_ANIMATION_ITERATION_COUNT_MIN = 1;
export const DEFAULT_ANIMATION_ITERATION_COUNT_MIN_UNSAFE = .25;
export const DEFAULT_ANIMATION_ITERATION_COUNT_ZERO = false;
export const DEFAULT_ANIMATION_ITERATION_COUNT = {
  infinite: DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE,
  infiniteProbability: DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE_PROBABILITY,
  integersOnly: DEFAULT_ANIMATION_ITERATION_COUNT_INTEGERS_ONLY,
  max: DEFAULT_ANIMATION_ITERATION_COUNT_MAX,
  min: DEFAULT_ANIMATION_ITERATION_COUNT_MIN_UNSAFE,
  zero: DEFAULT_ANIMATION_ITERATION_COUNT_ZERO,
}
export const DEFAULT_ANIMATION_TRANSFORMATIONS = Object.values(
  AnimationTransformation
);
export const DEFAULT_ANIMATION_OPTIONS: AnimationOptions = {
  directions: DEFAULT_ANIMATION_DIRECTIONS,
  durationMax: DEFAULT_ANIMATION_DURATION_MAX_UNSAFE,
  durationMin: DEFAULT_ANIMATION_DURATION_MIN_UNSAFE,
  easingFunctions: DEFAULT_ANIMATION_EASING_FUNCTIONS,
  enabled: DEFAULT_ANIMATION_ENABLED,
  fillModes: DEFAULT_ANIMATION_FILL_MODES,
  iterationCount: DEFAULT_ANIMATION_ITERATION_COUNT,
  transformations: DEFAULT_ANIMATION_TRANSFORMATIONS
}

export default class Animation extends CssProperty {

  private directions: AnimationDirection[];
  private durationMax: number;
  private durationMin: number;
  private durationUnit: "ms" | "s";
  // TODO: support the "steps" easing function (requires 2 arguments)
  private easingFunctions: AnimationEasingFunction[];
  private fillModes: AnimationFillMode[];
  private iterationCount: AnimationIterationCountOptions;
  private transformations: AnimationTransformation[];
  public name = ECssProperty.ANIMATION;

  constructor(options: AnimationOptions, unsafe: boolean) {
    super(unsafe);
    this.directions = options.directions ?? [ ...DEFAULT_ANIMATION_DIRECTIONS ];
    this.easingFunctions = options.easingFunctions ??
      [ ...DEFAULT_ANIMATION_EASING_FUNCTIONS ];
    this.fillModes = options.fillModes ?? [ ...DEFAULT_ANIMATION_FILL_MODES ];
    this.iterationCount = {
      ...DEFAULT_ANIMATION_ITERATION_COUNT,
      ...options.iterationCount ?? {}
    };
    this.transformations = options.transformations ??
      [ ...DEFAULT_ANIMATION_TRANSFORMATIONS ];

    // duration
    /**
     * TODO: Probably better to do all validation once in the RandomCss
     * component so it doesn't have to be done every time a Randomizable is
     * instantiated.
     */
    const maxLimit = unsafe
      ? DEFAULT_ANIMATION_DURATION_MAX_UNSAFE
      : DEFAULT_ANIMATION_DURATION_MAX;
    const minLimit = unsafe
      ? DEFAULT_ANIMATION_DURATION_MIN_UNSAFE
      : DEFAULT_ANIMATION_DURATION_MIN;
    this.durationMax = options?.durationMax ?? maxLimit;
    this.durationMin = options?.durationMin ?? minLimit;
    if (this.durationMax > maxLimit) {
      this.durationMax = maxLimit;
    }
    if (this.durationMin < minLimit) {
      this.durationMin = minLimit;
    }
    if (this.durationMax < this.durationMin) {
      this.durationMax = maxLimit;
    }
    if (this.durationMin > this.durationMax) {
      this.durationMin = minLimit;
    }
    this.durationUnit = unsafe ? "ms" : "s";
  }

  private getIterationCount(): string {
    if (
      this.iterationCount.infinite === true &&
      Math.random() <= this.iterationCount.infiniteProbability)
    {
      return "infinite";
    }
    const iterationCount = this.getRandomNumber(
      this.iterationCount.min,
      this.iterationCount.max,
      this.iterationCount.integersOnly
    );
    return (iterationCount === 0 && this.iterationCount.zero === false)
       ? "1"
       : String(iterationCount);
  }

  public getRandomValue(): string {
    const iterationCount = this.getIterationCount();
    return [
      String(this.getRandomNumber(this.durationMin, this.durationMax)) +
        this.durationUnit,
      this.getRandomArrayElement(this.easingFunctions),
      "0s", // delay
      iterationCount,
      this.getRandomArrayElement(this.directions),
      this.getRandomArrayElement(this.fillModes),
      "running", // play state
      this.getRandomArrayElement(this.transformations),
    ].join(" ");
  }

}
