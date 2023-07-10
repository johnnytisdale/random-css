import CssProperty from "./CssProperty";
import cssProperties from "../../json/cssProperties.json";

const json = cssProperties['animation'];

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
  private names = json.names;

  public getRandomValue(): string {
    return [
      this.getRandomArrayElement(this.durations),
      this.getRandomArrayElement(this.easingFunctions),
      '0s', // delay
      this.getRandomArrayElement(this.iterationCounts),
      this.getRandomArrayElement(this.directions),
      this.getRandomArrayElement(this.fillModes),
      'running', // play state
      this.getRandomArrayElement(this.names),
    ].join(' ');
  }

}