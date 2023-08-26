import ColorKeyword from "../../enums/ColorKeyword";
import ColorOptions from "../../interfaces/ColorOptions";
import CssProperty from "./CssProperty";
import {
  DEFAULT_COLOR_ALPHA,
  DEFAULT_COLOR_ALPHA_MAX,
  DEFAULT_COLOR_ALPHA_MIN,
  DEFAULT_COLOR_MAX,
  DEFAULT_COLOR_MIN,
  DEFAULT_COLOR_KEYWORDS,
} from "../../values/defaults/css/ColorDefaults";
import Randomizable from "../Randomizable";

export default abstract class ColorProperty extends CssProperty {
  private alpha: boolean;
  private aMax: number;
  private aMin: number;
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
    super(options, external);
    this.alpha = options.alpha ?? DEFAULT_COLOR_ALPHA;
    this.aMax = options.aMax ?? DEFAULT_COLOR_ALPHA_MAX;
    this.aMin = options.aMin ?? DEFAULT_COLOR_ALPHA_MIN;
    this.bMax = options.bMax ?? DEFAULT_COLOR_MAX;
    this.bMin = options.bMin ?? DEFAULT_COLOR_MIN;
    this.gMax = options.gMax ?? DEFAULT_COLOR_MAX;
    this.gMin = options.gMin ?? DEFAULT_COLOR_MIN;
    this.rMax = options.rMax ?? DEFAULT_COLOR_MAX;
    this.rMin = options.rMin ?? DEFAULT_COLOR_MIN;
    this.colorKeywords = options.colorKeywords ?? [...DEFAULT_COLOR_KEYWORDS];
  }

  public getRandomValue(): string {
    return this.external
      ? Randomizable.array(this.colorKeywords)
      : `rgba(${[
          Randomizable.number(this.rMin, this.rMax),
          Randomizable.number(this.gMin, this.gMax),
          Randomizable.number(this.bMin, this.bMax),
          this.alpha ? [Randomizable.decimal(this.aMin, this.aMax)] : 1,
        ].join(",")})`;
  }
}
