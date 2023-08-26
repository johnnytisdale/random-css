import CssProperty from "./CssProperty";
import CssPropertyName from "../../enums/CssPropertyName";
import {
  DEFAULT_FONT_STYLE_DEGREES,
  DEFAULT_FONT_STYLE_DEGREES_PROBABILITY,
  DEFAULT_FONT_STYLE_FONT_STYLES,
  DEFAULT_FONT_STYLE_MAX_DEGREES,
  DEFAULT_FONT_STYLE_MIN_DEGREES,
} from "../../values/defaults/css/FontStyleDefaults";
import FontStyleKeyword from "../../enums/FontStyleKeyword";
import FontStyleOptions from "../../interfaces/FontStyleOptions";
import Randomizable from "../Randomizable";

export default class FontStyle extends CssProperty {
  private degrees: boolean;
  private degreesProbability: number;
  private fontStyles: FontStyleKeyword[];
  private maxDegrees: number;
  private minDegrees: number;
  public name = CssPropertyName.FONT_STYLE;

  constructor(options: FontStyleOptions, external: boolean) {
    super(options, external);
    this.degrees = options?.degrees ?? DEFAULT_FONT_STYLE_DEGREES;
    this.degreesProbability =
      options?.degreesProbability ?? DEFAULT_FONT_STYLE_DEGREES_PROBABILITY;
    this.fontStyles = options?.fontStyles ?? DEFAULT_FONT_STYLE_FONT_STYLES;
    this.maxDegrees = options?.maxDegrees ?? DEFAULT_FONT_STYLE_MAX_DEGREES;
    this.minDegrees = options?.minDegrees ?? DEFAULT_FONT_STYLE_MIN_DEGREES;
  }

  public getRandomValue(): string {
    const keyword = Randomizable.array(this.fontStyles);
    // TODO: Support oblique deg when external === true
    return !this.external &&
      keyword === FontStyleKeyword.OBLIQUE &&
      this.degrees &&
      Math.random() <= this.degreesProbability
      ? keyword +
          " " +
          String(Randomizable.number(this.minDegrees, this.maxDegrees)) +
          "deg"
      : keyword;
  }
}
