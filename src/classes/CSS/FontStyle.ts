import CssProperty from "./CssProperty";
import ECssProperty from "../../enums/CssProperty";
import FontStyleKeyword from "../../enums/FontStyleKeyword";
import Option from "../../interfaces/Option";

export interface FontStyleOptions extends Option {
  degrees?: boolean;
  degreesProbability?: number;
  fontStyles?: FontStyleKeyword[];
  maxDegrees?: number;
  minDegrees?: number;
}

export const DEFAULT_FONT_STYLE_DEGREES = true;
export const DEFAULT_FONT_STYLE_DEGREES_PROBABILITY = .5;
export const DEFAULT_FONT_STYLE_ENABLED = false;
export const DEFAULT_FONT_STYLE_FONT_STYLES = Object.values(FontStyleKeyword);
export const DEFAULT_FONT_STYLE_MAX_DEGREES = 90;
export const DEFAULT_FONT_STYLE_MIN_DEGREES = -90;

export const DEFAULT_FONT_STYLE: FontStyleOptions = {
  degrees: DEFAULT_FONT_STYLE_DEGREES,
  degreesProbability: DEFAULT_FONT_STYLE_DEGREES_PROBABILITY,
  enabled: DEFAULT_FONT_STYLE_ENABLED,
  fontStyles: DEFAULT_FONT_STYLE_FONT_STYLES,
  maxDegrees: DEFAULT_FONT_STYLE_MAX_DEGREES,
  minDegrees: DEFAULT_FONT_STYLE_MIN_DEGREES,
}

export default class FontStyle extends CssProperty {

  private degrees: boolean;
  private degreesProbability: number;
  private fontStyles: FontStyleKeyword[];
  private maxDegrees: number;
  private minDegrees: number;
  protected acceptsLengths = false;
  public name = ECssProperty.FONT_STYLE;

  constructor(options: FontStyleOptions, unsafe: boolean) {
    super(unsafe);
    console.log(options);
    this.degrees = options?.degrees ?? DEFAULT_FONT_STYLE_DEGREES;
    this.degreesProbability = options?.degreesProbability ??
      DEFAULT_FONT_STYLE_DEGREES_PROBABILITY;
    this.fontStyles = options?.fontStyles ?? DEFAULT_FONT_STYLE_FONT_STYLES;
    this.maxDegrees = options?.maxDegrees ?? DEFAULT_FONT_STYLE_MAX_DEGREES;
    this.minDegrees = options?.minDegrees ?? DEFAULT_FONT_STYLE_MIN_DEGREES;
    console.log(this.fontStyles);
  }

  public getRandomValue(): string {
    const keyword = this.getRandomArrayElement(this.fontStyles);
    // TODO: Support oblique deg when unsafe === false
    return (
      this.unsafe &&
      keyword === FontStyleKeyword.OBLIQUE &&
      this.degrees
      && Math.random() <= this.degreesProbability
    )
      ? (
        keyword +
        " " +
        String(this.getRandomNumber(this.minDegrees, this.maxDegrees)) +
        "deg"
      )
      : keyword;
  }
}