import ColorKeyword from "../../enums/ColorKeyword";
import ColorOptions from "../../interfaces/ColorOptions";
import CssProperty from "./CssProperty";

const DEFAULT_COLOR_ENABLED = false;
const DEFAULT_COLOR_KEYWORDS = Object.values(ColorKeyword);
const DEFAULT_COLOR_MAX = 255;
const DEFAULT_COLOR_MIN = 0;

export const DEFAULT_COLOR_OPTIONS: ColorOptions = {
  bMax: DEFAULT_COLOR_MAX,
  bMin: DEFAULT_COLOR_MIN,
  colorKeywords: DEFAULT_COLOR_KEYWORDS,
  enabled: DEFAULT_COLOR_ENABLED,
  gMax: DEFAULT_COLOR_MAX,
  gMin: DEFAULT_COLOR_MIN,
  rMax: DEFAULT_COLOR_MAX,
  rMin: DEFAULT_COLOR_MIN,
};

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
    protected unsafe: boolean,
  ) {
    super(unsafe);
    this.bMax = options.bMax ?? DEFAULT_COLOR_MAX;
    this.bMin = options.bMin ?? DEFAULT_COLOR_MIN;
    this.gMax = options.gMax ?? DEFAULT_COLOR_MAX;
    this.gMin = options.gMin ?? DEFAULT_COLOR_MIN;
    this.rMax = options.rMax ?? DEFAULT_COLOR_MAX;
    this.rMin = options.rMin ?? DEFAULT_COLOR_MIN;
    this.colorKeywords = options.colorKeywords ?? [...DEFAULT_COLOR_KEYWORDS];
  }

  public getRandomValue(): string {
    if (this.unsafe) {
      const red = this.getRandomNumber(this.rMin, this.rMax);
      const green = this.getRandomNumber(this.gMin, this.gMax);
      const blue = this.getRandomNumber(this.bMin, this.bMax);
      return `rgb(${red}, ${green}, ${blue})`;
    }
    return this.getRandomArrayElement(this.colorKeywords);
  }
}
