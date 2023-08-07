import AnimationDirection from "../../enums/AnimationDirection";
import AnimationEasingFunction from "../../enums/AnimationEasingFunction";
import AnimationFillMode from "../../enums/AnimationFillMode";
import AnimationTransformation from "../../enums/AnimationTransformation";
import CssProperty from "./CssProperty";
import ECssProperty from "../../enums/CssProperty";
import AnimationOptions, {
  AnimationIterationCountOptions,
  DEFAULT_ANIMATION_DIRECTIONS,
  DEFAULT_ANIMATION_EASING_FUNCTIONS,
  DEFAULT_ANIMATION_FILL_MODES,
  DEFAULT_ANIMATION_ITERATION_COUNT,
  DEFAULT_ANIMATION_DURATION_MAX,
  DEFAULT_ANIMATION_DURATION_MAX_UNSAFE,
  DEFAULT_ANIMATION_DURATION_MIN,
  DEFAULT_ANIMATION_DURATION_MIN_UNSAFE,
  DEFAULT_ANIMATION_TRANSFORMATIONS,
} from "../../interfaces/AnimationOptions";

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
    this.directions = options.directions ?? [...DEFAULT_ANIMATION_DIRECTIONS];
    this.easingFunctions = options.easingFunctions ?? [
      ...DEFAULT_ANIMATION_EASING_FUNCTIONS,
    ];
    this.fillModes = options.fillModes ?? [...DEFAULT_ANIMATION_FILL_MODES];
    this.iterationCount = {
      ...DEFAULT_ANIMATION_ITERATION_COUNT,
      ...(options.iterationCount ?? {}),
    };
    this.transformations = options.transformations ?? [
      ...DEFAULT_ANIMATION_TRANSFORMATIONS,
    ];

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

  // 831ms linear(0.51 94%, 0.61, 0.65, 0.69, 0.82, 0.93, 0.98, 0.99) 0s infinite alternate-reverse backwards running rotate
  private getEasingFunction(): string {
    if (!this.unsafe) {
      return this.getRandomArrayElement(this.easingFunctions);
    }
    const easingFunction = this.getRandomArrayElement(this.easingFunctions);
    if (easingFunction === AnimationEasingFunction.LINEAR) {
      return this.getLinearEasingFunction();
    }
    return easingFunction;
  }

  private getIterationCount(): string {
    if (
      this.iterationCount.infinite === true &&
      Math.random() <= this.iterationCount.infiniteProbability
    ) {
      return "infinite";
    }
    const iterationCount = this.getRandomNumber(
      this.iterationCount.min,
      this.iterationCount.max,
      this.iterationCount.integersOnly
    );
    /**
     * TODO: It can never be zero because the lowest iterationCount.min can be
     * is 1. Should probably just removed the zero option because having 0
     * iterations would be effectively equivalent to having no animation.
     */
    return iterationCount === 0 && this.iterationCount.zero === false
      ? "1"
      : String(iterationCount);
  }

  private getLinearEasingFunction() {
    const numberOfPoints = this.getRandomNumber(1, 10);
    const points: string[] = [];
    let lastPoint = 0;
    let hasPercent = false;
    for (let i = 0; i < numberOfPoints; i++) {
      const point = this.getRandomDecimal(lastPoint + 0.01, 1, 2);
      lastPoint = point;
      const usePercent = !hasPercent && Math.random() <= numberOfPoints / 10;
      points.push(
        `${point}` + (usePercent ? ` ${this.getRandomNumber(1, 100)}%` : "")
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

  public getRandomValue(): string {
    const iterationCount = this.getIterationCount();
    return [
      String(this.getRandomNumber(this.durationMin, this.durationMax)) +
        this.durationUnit,
      // this.getRandomArrayElement(this.easingFunctions),
      this.getEasingFunction(),
      "0s", // delay
      iterationCount,
      this.getRandomArrayElement(this.directions),
      this.getRandomArrayElement(this.fillModes),
      "running", // play state
      this.getRandomArrayElement(this.transformations),
    ].join(" ");
  }
}
