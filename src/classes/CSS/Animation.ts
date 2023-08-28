import AnimationDirection from "../../enums/AnimationDirection";
import AnimationEasingFunction from "../../enums/AnimationEasingFunction";
import AnimationFillMode from "../../enums/AnimationFillMode";
import AnimationIterationCountOptions from "../../interfaces/AnimationIterationCountOptions";
import AnimationOptions from "../../interfaces/AnimationOptions";
import AnimationStepPosition from "../../enums/AnimationStepPosition";
import AnimationTransformation from "../../enums/AnimationTransformation";
import CssProperty from "./CssProperty";
import CssPropertyName from "../../enums/CssPropertyName";
import {
  DEFAULT_ANIMATION_DIRECTIONS,
  DEFAULT_ANIMATION_DURATION_MAX_EXTERNAL,
  DEFAULT_ANIMATION_DURATION_MAX,
  DEFAULT_ANIMATION_DURATION_MIN_EXTERNAL,
  DEFAULT_ANIMATION_DURATION_MIN,
  DEFAULT_ANIMATION_EASING_FUNCTIONS,
  DEFAULT_ANIMATION_FILL_MODES,
  DEFAULT_ANIMATION_ITERATION_COUNT,
  DEFAULT_ANIMATION_STEP_POSITIONS,
  DEFAULT_ANIMATION_TRANSFORMATIONS,
} from "../../values/defaults/css/AnimationDefaults";
import Randomizable from "../Randomizable";

export default class Animation extends CssProperty {
  private directions: AnimationDirection[];
  private durationMax: number;
  private durationMin: number;
  private durationUnit: "ms" | "s";
  private easingFunctions: AnimationEasingFunction[];
  private fillModes: AnimationFillMode[];
  private iterationCount: AnimationIterationCountOptions;
  private stepPositions: AnimationStepPosition[];
  private transformations: AnimationTransformation[];
  public name = CssPropertyName.ANIMATION;

  protected setSpecificConfig(config: AnimationOptions) {
    this.directions = config.directions ?? [...DEFAULT_ANIMATION_DIRECTIONS];
    this.easingFunctions = config.easingFunctions ?? [
      ...DEFAULT_ANIMATION_EASING_FUNCTIONS,
    ];
    if (this.external) {
      this.easingFunctions = this.easingFunctions.filter(
        (easingFunction) =>
          easingFunction !== AnimationEasingFunction.CUBIC_BEZIER &&
          easingFunction !== AnimationEasingFunction.STEPS
      );
    }
    this.fillModes = config.fillModes ?? [...DEFAULT_ANIMATION_FILL_MODES];
    this.iterationCount = {
      ...DEFAULT_ANIMATION_ITERATION_COUNT,
      ...config.iterationCount,
    };
    this.stepPositions =
      config.stepPositions ?? DEFAULT_ANIMATION_STEP_POSITIONS;
    this.transformations = config.transformations ?? [
      ...DEFAULT_ANIMATION_TRANSFORMATIONS,
    ];

    // duration
    const maxLimit = this.external
      ? DEFAULT_ANIMATION_DURATION_MAX_EXTERNAL
      : DEFAULT_ANIMATION_DURATION_MAX;
    const minLimit = this.external
      ? DEFAULT_ANIMATION_DURATION_MIN_EXTERNAL
      : DEFAULT_ANIMATION_DURATION_MIN;
    this.durationMax = config?.durationMax ?? maxLimit;
    this.durationMin = config?.durationMin ?? minLimit;
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
    this.durationUnit = this.external ? "s" : "ms";
  }

  private getCubicBezierEasingFunction() {
    const points = [
      Randomizable.decimal(),
      Randomizable.number(-5, 5),
      Randomizable.decimal(),
      Randomizable.number(-10, 10),
    ];
    return `${AnimationEasingFunction.CUBIC_BEZIER}(${points.join(", ")})`;
  }

  // 831ms linear(0.51 94%, 0.61, 0.65, 0.69, 0.82, 0.93, 0.98, 0.99) 0s infinite alternate-reverse backwards running rotate
  private getEasingFunction(): string {
    if (this.external) {
      return Randomizable.array(this.easingFunctions);
    }
    const easingFunction = Randomizable.array(this.easingFunctions);
    switch (easingFunction) {
      case AnimationEasingFunction.CUBIC_BEZIER:
        return this.getCubicBezierEasingFunction();
      case AnimationEasingFunction.LINEAR:
        return this.getLinearEasingFunction();
      case AnimationEasingFunction.STEPS:
        return this.getStepsEasingFunction();
      default:
        return easingFunction;
    }
  }

  private getIterationCount(): string {
    return this.iterationCount.infinite &&
      Math.random() <= this.iterationCount.infiniteProbability
      ? "infinite"
      : String(
          Randomizable.number(
            this.iterationCount.min,
            this.iterationCount.max,
            this.iterationCount.integersOnly
          )
        );
  }

  private getLinearEasingFunction() {
    const numberOfPoints = Randomizable.number(1, 10);
    const points: string[] = [];
    let lastPoint = 0;
    let hasPercent = false;
    for (let i = 0; i < numberOfPoints; i++) {
      const point = Randomizable.decimal(lastPoint + 0.01, 1, 2);
      lastPoint = point;
      const usePercent = !hasPercent && Math.random() <= numberOfPoints / 10;
      points.push(
        `${point}` + (usePercent ? ` ${Randomizable.number(1, 100)}%` : "")
      );
      if (point === 1) {
        break;
      }
      if (usePercent) {
        hasPercent = true;
      }
    }
    return `${AnimationEasingFunction.LINEAR}(${points.join(", ")})`;
  }

  private getStepsEasingFunction() {
    const integer = Randomizable.number(1, 5);
    const stepPosition = Randomizable.array(this.stepPositions);
    return `steps(${integer}, ${stepPosition})`;
  }

  public getRandomValue(): string {
    return [
      String(Randomizable.number(this.durationMin, this.durationMax)) +
        this.durationUnit,
      this.getEasingFunction(),
      "0s", // delay
      this.getIterationCount(),
      Randomizable.array(this.directions),
      Randomizable.array(this.fillModes),
      "running", // play state
      Randomizable.array(this.transformations),
    ].join(" ");
  }
}
