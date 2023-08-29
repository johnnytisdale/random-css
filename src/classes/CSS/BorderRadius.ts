import BorderRadiusConfig from "../../interfaces/BorderRadiusConfig";
import CssProperty from "./CssProperty";
import CssPropertyName from "../../enums/CssPropertyName";
import {
  DEFAULT_BORDER_RADIUS_ELLIPTICAL,
  DEFAULT_BORDER_RADIUS_ELLIPTICAL_PROBABILITY,
  DEFAULT_BORDER_RADIUS_MAX_CORNERS,
  DEFAULT_BORDER_RADIUS_MAX_RADIUS,
  DEFAULT_BORDER_RADIUS_MIN_CORNERS,
  DEFAULT_BORDER_RADIUS_MIN_RADIUS,
} from "../../values/defaults/css/BorderRadiusDefaults";
import Randomizable from "../Randomizable";

export default class BorderRadius extends CssProperty {
  private elliptical: boolean;
  private ellipticalProbability: number;
  private maxCorners: number;
  private minCorners: number;
  private maxRadius: number;
  private minRadius: number;
  public name = CssPropertyName.BORDER_RADIUS;

  protected setSpecificConfig(config: BorderRadiusConfig) {
    this.elliptical = config.elliptical ?? DEFAULT_BORDER_RADIUS_ELLIPTICAL;
    this.ellipticalProbability =
      config.ellipticalProbability ??
      DEFAULT_BORDER_RADIUS_ELLIPTICAL_PROBABILITY;
    this.maxCorners = config.maxCorners ?? DEFAULT_BORDER_RADIUS_MAX_CORNERS;
    this.minCorners = config.minCorners ?? DEFAULT_BORDER_RADIUS_MIN_CORNERS;
    this.maxRadius = config.maxRadius ?? DEFAULT_BORDER_RADIUS_MAX_RADIUS;
    this.minRadius = config.minRadius ?? DEFAULT_BORDER_RADIUS_MIN_RADIUS;
  }

  private getRandomRadius(min = 0, max = 100): string {
    return `${Randomizable.number(min, max)}%`;
  }

  public getRandomValue(): string {
    const useSlash =
      this.elliptical && Math.random() <= this.ellipticalProbability;
    const valueSets: string[] = [];
    for (let i = 0; i < (useSlash ? 2 : 1); i++) {
      const valueCount = Randomizable.number(this.minCorners, this.maxCorners);
      const values: string[] = [];
      for (let x = 0; x < valueCount; x++) {
        values.push(this.getRandomRadius(this.minRadius, this.maxRadius));
      }
      valueSets.push(values.join(" "));
    }
    return valueSets.join(" / ");
  }
}
