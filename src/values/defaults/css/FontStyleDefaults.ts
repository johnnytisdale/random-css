import FontStyleKeyword from "../../../enums/FontStyleKeyword";
import FontStyleOptions from "../../../interfaces/FontStyleOptions";

export const DEFAULT_FONT_STYLE_DEGREES = true;
export const DEFAULT_FONT_STYLE_DEGREES_PROBABILITY = 0.5;
export const DEFAULT_FONT_STYLE_ENABLED = false;
export const DEFAULT_FONT_STYLE_FONT_STYLES = Object.values(FontStyleKeyword);
export const DEFAULT_FONT_STYLE_MAX_DEGREES = 90;
export const DEFAULT_FONT_STYLE_MIN_DEGREES = -90;

export const DEFAULT_FONT_STYLE_OPTIONS: FontStyleOptions = {
  degrees: DEFAULT_FONT_STYLE_DEGREES,
  degreesProbability: DEFAULT_FONT_STYLE_DEGREES_PROBABILITY,
  enabled: DEFAULT_FONT_STYLE_ENABLED,
  fontStyles: DEFAULT_FONT_STYLE_FONT_STYLES,
  maxDegrees: DEFAULT_FONT_STYLE_MAX_DEGREES,
  minDegrees: DEFAULT_FONT_STYLE_MIN_DEGREES,
};
