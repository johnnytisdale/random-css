import CssProperty from "./CssProperty";
import * as cssProperties from "../../json/cssProperties.json";
import Option from "../../interfaces/Option";
import AnimationTransformation from "../../enums/AnimationTransformation";

const json = cssProperties['animation'];

export interface AnimationOption extends Option {
  transformations?: AnimationTransformation[];
}

export default class Animation extends CssProperty {

  protected acceptsColors = false;
  protected acceptsLengths = false;
  protected acceptsKeywords = false;
  protected acceptsPercentages = false;
  public name = json.camelCase;

  private directions = json.directions;
  private durations = json.durations;
  // TODO: support the "steps" easing function (requires 2 arguments)
  private easingFunctions = json.easingFunctions;
  private fillModes = json.fillModes;
  private iterationCounts = json.iterationCounts;
  private transformations: AnimationTransformation[];

  constructor(private options: AnimationOption) {
    super();
    this.transformations = options.transformations ??
      Object.values(AnimationTransformation);
  }

  public getRandomValue(): string {
    return [
      this.getRandomArrayElement(this.durations),
      this.getRandomArrayElement(this.easingFunctions),
      '0s', // delay
      this.getRandomArrayElement(this.iterationCounts),
      this.getRandomArrayElement(this.directions),
      this.getRandomArrayElement(this.fillModes),
      'running', // play state
      this.getRandomArrayElement(this.transformations),
    ].join(' ');
  }

}