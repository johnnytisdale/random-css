import ColorKeyword from "../../enums/ColorKeyword";
import ColorOptions, {
  DEFAULT_COLOR_KEYWORDS,
  DEFAULT_COLOR_MAX,
  DEFAULT_COLOR_MIN,
} from "../../interfaces/ColorOptions";
import CssProperty from "./CssProperty";
import Randomizable from "../Randomizable";

export default abstract class ColorProperty extends CssProperty {
  private bMax: number;
  private bMin: number;
  private gMax: number;
  private gMin: number;
  private rMax: number;
  private rMin: number;
  private colorKeywords: ColorKeyword[];

  constructor(
    options: ColorOptions,
    protected external: boolean
  ) {
    super(external);
    this.bMax = options.bMax ?? DEFAULT_COLOR_MAX;
    this.bMin = options.bMin ?? DEFAULT_COLOR_MIN;
    this.gMax = options.gMax ?? DEFAULT_COLOR_MAX;
    this.gMin = options.gMin ?? DEFAULT_COLOR_MIN;
    this.rMax = options.rMax ?? DEFAULT_COLOR_MAX;
    this.rMin = options.rMin ?? DEFAULT_COLOR_MIN;
    this.colorKeywords = options.colorKeywords ?? [...DEFAULT_COLOR_KEYWORDS];
  }

  public getRandomValue(): string {
    if (!this.external) {
      const red = Randomizable.number(this.rMin, this.rMax);
      const green = Randomizable.number(this.gMin, this.gMax);
      const blue = Randomizable.number(this.bMin, this.bMax);
      return `rgb(${red}, ${green}, ${blue})`;
    }
    return Randomizable.array(this.colorKeywords);
  }
}
