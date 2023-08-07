import CssProperty from "./CssProperty";
import ECssProperty from "../../enums/CssProperty";
import FontStyleKeyword from "../../enums/FontStyleKeyword";
import FontStyleOptions, {
  DEFAULT_FONT_STYLE_DEGREES,
  DEFAULT_FONT_STYLE_DEGREES_PROBABILITY,
  DEFAULT_FONT_STYLE_FONT_STYLES,
  DEFAULT_FONT_STYLE_MAX_DEGREES,
  DEFAULT_FONT_STYLE_MIN_DEGREES,
} from "../../interfaces/FontStyleOptions";

export default class FontStyle extends CssProperty {
  private degrees: boolean;
  private degreesProbability: number;
  private fontStyles: FontStyleKeyword[];
  private maxDegrees: number;
  private minDegrees: number;
  public name = ECssProperty.FONT_STYLE;

  constructor(options: FontStyleOptions, unsafe: boolean) {
    super(unsafe);
    this.degrees = options?.degrees ?? DEFAULT_FONT_STYLE_DEGREES;
    this.degreesProbability =
      options?.degreesProbability ?? DEFAULT_FONT_STYLE_DEGREES_PROBABILITY;
    this.fontStyles = options?.fontStyles ?? DEFAULT_FONT_STYLE_FONT_STYLES;
    this.maxDegrees = options?.maxDegrees ?? DEFAULT_FONT_STYLE_MAX_DEGREES;
    this.minDegrees = options?.minDegrees ?? DEFAULT_FONT_STYLE_MIN_DEGREES;
  }

  public getRandomValue(): string {
    const keyword = this.getRandomArrayElement(this.fontStyles);
    // TODO: Support oblique deg when unsafe === false
    return this.unsafe &&
      keyword === FontStyleKeyword.OBLIQUE &&
      this.degrees &&
      Math.random() <= this.degreesProbability
      ? keyword +
          " " +
          String(this.getRandomNumber(this.minDegrees, this.maxDegrees)) +
          "deg"
      : keyword;
  }
}
