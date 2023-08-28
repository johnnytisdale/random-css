import ColorKeyword from "../../enums/ColorKeyword";
import ColorConfig from "../../interfaces/ColorConfig";
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

  protected setSpecificConfig(config: ColorConfig) {
    this.alpha = config.alpha ?? DEFAULT_COLOR_ALPHA;
    this.aMax = config.aMax ?? DEFAULT_COLOR_ALPHA_MAX;
    this.aMin = config.aMin ?? DEFAULT_COLOR_ALPHA_MIN;
    this.bMax = config.bMax ?? DEFAULT_COLOR_MAX;
    this.bMin = config.bMin ?? DEFAULT_COLOR_MIN;
    this.gMax = config.gMax ?? DEFAULT_COLOR_MAX;
    this.gMin = config.gMin ?? DEFAULT_COLOR_MIN;
    this.rMax = config.rMax ?? DEFAULT_COLOR_MAX;
    this.rMin = config.rMin ?? DEFAULT_COLOR_MIN;
    this.colorKeywords = config.colorKeywords ?? [...DEFAULT_COLOR_KEYWORDS];
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
