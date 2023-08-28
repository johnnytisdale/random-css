import BorderRadiusOptions from "../../interfaces/BorderRadiusOptions";
import CssProperty from "./CssProperty";
import CssPropertyName from "../../enums/CssPropertyName";
import {
  DEFAULT_BORDER_RADIUS_MAX_CORNERS,
  DEFAULT_BORDER_RADIUS_MAX_RADIUS,
  DEFAULT_BORDER_RADIUS_MIN_CORNERS,
  DEFAULT_BORDER_RADIUS_MIN_RADIUS,
  DEFAULT_BORDER_RADIUS_SLASH,
  DEFAULT_BORDER_RADIUS_SLASH_PROBABILITY,
} from "../../values/defaults/css/BorderRadiusDefaults";
import Randomizable from "../Randomizable";

export default class BorderRadius extends CssProperty {
  private maxCorners: number;
  private minCorners: number;
  private maxRadius: number;
  private minRadius: number;
  private slash: boolean;
  private slashProbability: number;
  public name = CssPropertyName.BORDER_RADIUS;

  protected setSpecificConfig(config: BorderRadiusOptions) {
    this.maxCorners = config.maxCorners ?? DEFAULT_BORDER_RADIUS_MAX_CORNERS;
    this.minCorners = config.minCorners ?? DEFAULT_BORDER_RADIUS_MIN_CORNERS;
    this.maxRadius = config.maxRadius ?? DEFAULT_BORDER_RADIUS_MAX_RADIUS;
    this.minRadius = config.minRadius ?? DEFAULT_BORDER_RADIUS_MIN_RADIUS;
    this.slash = config.slash ?? DEFAULT_BORDER_RADIUS_SLASH;
    this.slashProbability =
      config.slashProbability ?? DEFAULT_BORDER_RADIUS_SLASH_PROBABILITY;
  }

  private getRandomRadius(min = 0, max = 100): string {
    return `${Randomizable.number(min, max)}%`;
  }

  public getRandomValue(): string {
    const useSlash =
      (this.slash && Math.random() <= this.slashProbability) ?? 0;
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
