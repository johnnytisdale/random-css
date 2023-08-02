import AnimationDirection from "../../enums/AnimationDirection";
import AnimationEasingFunction from "../../enums/AnimationEasingFunction";
import AnimationFillMode from "../../enums/AnimationFillMode";
import AnimationTransformation from "../../enums/AnimationTransformation";
import CssProperty from "./CssProperty";
import ECssProperty from "../../enums/CssProperty";
import Option from "../../interfaces/Option";

export interface AnimationOption extends Option {
  directions?: AnimationDirection[];
  durationMax?: number;
  durationMin?: number;
  easingFunctions?: AnimationEasingFunction[];
  fillModes?: AnimationFillMode[];
  iterationCount?: AnimationIterationCountOptions;
  transformations?: AnimationTransformation[];
}

export interface AnimationIterationCountOptions {
  infinite?: boolean,
  infiniteProbability?: number,
  integersOnly?: boolean,
  max?: number,
  min?: number,
  zero?: boolean
}

export default class Animation extends CssProperty {

  protected acceptsColors = false;
  protected acceptsLengths = false;
  protected acceptsKeywords = false;
  protected acceptsPercentages = false;

  public name = ECssProperty.animation;

  private directions: AnimationDirection[];
  private durationMax: number;
  private durationMin: number;
  // TODO: support the "steps" easing function (requires 2 arguments)
  private easingFunctions: AnimationEasingFunction[];
  private fillModes: AnimationFillMode[];
  private iterationCount: AnimationIterationCountOptions;
  private transformations: AnimationTransformation[];

  constructor(options: AnimationOption) {
    super();
    this.directions = options.directions ?? Object.values(AnimationDirection);
    this.durationMax = options.durationMax ?? 3000;
    this.durationMin = options.durationMin ?? 300
    this.easingFunctions = options.easingFunctions ??
      Object.values(AnimationEasingFunction);
    this.fillModes = options.fillModes ?? Object.values(AnimationFillMode);
    this.iterationCount = {
      infinite: true,
      infiniteProbability: .5,
      integersOnly: false,
      max: 3,
      min: .5,
      zero: false,
      ...options.iterationCount ?? {}
    };
    this.transformations = options.transformations ??
      Object.values(AnimationTransformation);
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