import CssProperty from "./CssProperty";
import ECssProperty from "../../enums/CssProperty";
import BorderRadiusOptions from "../../interfaces/BorderRadiusOptions";

export default class BorderRadius extends CssProperty {
  public name = ECssProperty.BORDER_RADIUS;

  constructor(private options: BorderRadiusOptions) {
    super();
  }

  private getRandomRadius(min = 0, max = 100): string {
    return `${this.getRandomNumber(min, max)}%`;
  }

  public getRandomValue(): string {
    const useSlash =
      this.options.slash && Math.random() <= this.options.slashProbability;
    const valueSets: string[] = [];
    for (let i = 0; i < (useSlash ? 2 : 1); i++) {
      const valueCount = this.getRandomNumber(
        this.options.minCorners,
        this.options.maxCorners
      );
      const values: string[] = [];
      for (let x = 0; x < valueCount; x++) {
        values.push(
          this.getRandomRadius(this.options.minRadius, this.options.maxRadius)
        );
      }
      valueSets.push(values.join(" "));
    }
    return valueSets.join(" / ");
  }
}
