import AnimationDirection from "../../enums/AnimationDirection";
import AnimationEasingFunction from "../../enums/AnimationEasingFunction";
import AnimationFillMode from "../../enums/AnimationFillMode";
import AnimationTransformation from "../../enums/AnimationTransformation";
import CssProperty from "./CssProperty";
import ECssProperty from "../../enums/CssProperty";
import Options from "../../interfaces/Option";

export interface AnimationIterationCountOptions {
  infinite?: boolean,
  infiniteProbability?: number,
  integersOnly?: boolean,
  max?: number,
  min?: number,
  zero?: boolean
}

export interface AnimationOptions extends Options {
  directions?: AnimationDirection[];
  durationMax?: number;
  durationMin?: number;
  easingFunctions?: AnimationEasingFunction[];
  fillModes?: AnimationFillMode[];
  iterationCount?: AnimationIterationCountOptions;
  transformations?: AnimationTransformation[];
}

export const DEFAULT_ANIMATION_DIRECTIONS = Object.values(AnimationDirection);
export const DEFAULT_ANIMATION_DURATION_MAX = 3000;
export const DEFAULT_ANIMATION_DURATION_MIN = 300;
export const DEFAULT_ANIMATION_EASING_FUNCTIONS = Object.values(
  AnimationEasingFunction
);
export const DEFAULT_ANIMATION_ENABLED = false;
export const DEFAULT_ANIMATION_FILL_MODES = Object.values(AnimationFillMode);
export const DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE = true;
export const DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE_PROBABILITY = .5;
export const DEFAULT_ANIMATION_ITERATION_COUNT_INTEGERS_ONLY = false;
export const DEFAULT_ANIMATION_ITERATION_COUNT_MAX = 3;
export const DEFAULT_ANIMATION_ITERATION_COUNT_MIN = .25;
export const DEFAULT_ANIMATION_ITERATION_COUNT_ZERO = false;
export const DEFAULT_ANIMATION_ITERATION_COUNT = {
  infinite: DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE,
  infiniteProbability: DEFAULT_ANIMATION_ITERATION_COUNT_INFINITE_PROBABILITY,
  integersOnly: DEFAULT_ANIMATION_ITERATION_COUNT_INTEGERS_ONLY,
  max: DEFAULT_ANIMATION_ITERATION_COUNT_MAX,
  min: DEFAULT_ANIMATION_ITERATION_COUNT_MIN,
  zero: DEFAULT_ANIMATION_ITERATION_COUNT_ZERO,
}
export const DEFAULT_ANIMATION_TRANSFORMATIONS = Object.values(
  AnimationTransformation
);
export const DEFAULT_ANIMATION: AnimationOptions = {
  directions: DEFAULT_ANIMATION_DIRECTIONS,
  durationMax: DEFAULT_ANIMATION_DURATION_MAX,
  durationMin: DEFAULT_ANIMATION_DURATION_MIN,
  easingFunctions: DEFAULT_ANIMATION_EASING_FUNCTIONS,
  enabled: DEFAULT_ANIMATION_ENABLED,
  fillModes: DEFAULT_ANIMATION_FILL_MODES,
  iterationCount: DEFAULT_ANIMATION_ITERATION_COUNT,
  transformations: DEFAULT_ANIMATION_TRANSFORMATIONS
}

export default class Animation extends CssProperty {

  protected acceptsLengths = false;

  public name = ECssProperty.ANIMATION;

  private directions: AnimationDirection[];
  private durationMax: number;
  private durationMin: number;
  // TODO: support the "steps" easing function (requires 2 arguments)
  private easingFunctions: AnimationEasingFunction[];
  private fillModes: AnimationFillMode[];
  private iterationCount: AnimationIterationCountOptions;
  private transformations: AnimationTransformation[];

  constructor(options: AnimationOptions) {
    super();
    this.directions = options.directions ?? [ ...DEFAULT_ANIMATION_DIRECTIONS ];
    this.durationMax = options.durationMax ?? DEFAULT_ANIMATION_DURATION_MAX;
    this.durationMin = options.durationMin ?? DEFAULT_ANIMATION_DURATION_MIN
    this.easingFunctions = options.easingFunctions ??
      [ ...DEFAULT_ANIMATION_EASING_FUNCTIONS ];
    this.fillModes = options.fillModes ?? [ ...DEFAULT_ANIMATION_FILL_MODES ];
    this.iterationCount = {
      ...DEFAULT_ANIMATION_ITERATION_COUNT,
      ...options.iterationCount ?? {}
    };
    this.transformations = options.transformations ??
      [ ...DEFAULT_ANIMATION_TRANSFORMATIONS ];
  }

  private getIterationCount(): string {
    if (
      this.iterationCount.infinite === true &&
      Math.random() <= this.iterationCount.infiniteProbability)
    {
      return 'infinite';
    }
    let iterationCount = this.getRandomNumber(
      this.iterationCount.min,
      this.iterationCount.max,
      this.iterationCount.integersOnly
    );
    if (iterationCount === 0 && this.iterationCount.zero === false) {
      iterationCount = 1;
    }
    return String(iterationCount);
  }

  public getRandomValue(): string {
    const iterationCount = this.getIterationCount();
    return [
      String(this.getRandomNumber(this.durationMin, this.durationMax)) + 'ms',
      this.getRandomArrayElement(this.easingFunctions),
      '0s', // delay
      iterationCount,
      this.getRandomArrayElement(this.directions),
      this.getRandomArrayElement(this.fillModes),
      'running', // play state
      this.getRandomArrayElement(this.transformations),
    ].join(' ');
  }

}