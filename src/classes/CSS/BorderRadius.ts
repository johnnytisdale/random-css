import CssProperty from "./CssProperty";
import ECssProperty from "../../enums/CssProperty";
import Option from "../../interfaces/Option";

export interface BorderRadiusOptions extends Option {
  maxCorners?: number;
  minCorners?: number;
  maxRadius?: number;
  minRadius?: number;
  slash?: boolean;
  slashProbability?: number;
}

export const DEFAULT_BORDER_RADIUS_ENABLED = false;
export const DEFAULT_BORDER_RADIUS_MAX_CORNERS = 4;
export const DEFAULT_BORDER_RADIUS_MIN_CORNERS = 1;
export const DEFAULT_BORDER_RADIUS_MAX_RADIUS = 100;
export const DEFAULT_BORDER_RADIUS_MIN_RADIUS = 1;
export const DEFAULT_BORDER_RADIUS_SLASH = true;
export const DEFAULT_BORDER_RADIUS_SLASH_PROBABILITY = .5;

export const DEFAULT_BORDER_RADIUS_OPTIONS: BorderRadiusOptions = {
  enabled: DEFAULT_BORDER_RADIUS_ENABLED,
  maxCorners: DEFAULT_BORDER_RADIUS_MAX_CORNERS,
  minCorners: DEFAULT_BORDER_RADIUS_MIN_CORNERS,
  maxRadius: DEFAULT_BORDER_RADIUS_MAX_RADIUS,
  minRadius: DEFAULT_BORDER_RADIUS_MIN_RADIUS,
  slash: DEFAULT_BORDER_RADIUS_SLASH,
  slashProbability: DEFAULT_BORDER_RADIUS_SLASH_PROBABILITY,
}

export default class BorderRadius extends CssProperty {

  public name = ECssProperty.BORDER_RADIUS;

  constructor(private options: BorderRadiusOptions) {
    super();
  }

  private getRandomRadius(min = 0, max = 100): string {
    return `${this.getRandomNumber(min, max)}%`;
  }

  public getRandomValue(): string {
    const useSlash = this.options.slash &&
      Math.random() <= this.options.slashProbability;
    const valueSets: string[] = [];
    for (let i = 0; i < (useSlash ? 2 : 1); i ++) {
      const valueCount = this.getRandomNumber(
        this.options.minCorners,
        this.options.maxCorners
      );
      const values: string[] = [];
      for (let x = 0; x < valueCount; x++) {
        values.push(
          this.getRandomRadius(
            this.options.minRadius,
            this.options.maxRadius
          )
        );
      }
      valueSets.push(values.join(' '));
    }
    return valueSets.join(' / ');
  }

}
