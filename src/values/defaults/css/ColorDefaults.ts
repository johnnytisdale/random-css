import ColorKeyword from "../../../enums/ColorKeyword";
import ColorConfig from "../../../interfaces/ColorConfig";
import DEFAULT_RANDOMIZABLE from "../RandomizableDefaults";

export const DEFAULT_COLOR_KEYWORDS = Object.values(ColorKeyword);
export const DEFAULT_COLOR_ALPHA = false;
export const DEFAULT_COLOR_ALPHA_MAX = 1;
export const DEFAULT_COLOR_ALPHA_MIN = 0.75;
export const DEFAULT_COLOR_MAX = 255;
export const DEFAULT_COLOR_MIN = 0;

export const DEFAULT_COLOR_OPTIONS: ColorConfig = {
  ...DEFAULT_RANDOMIZABLE,
  bMax: DEFAULT_COLOR_MAX,
  bMin: DEFAULT_COLOR_MIN,
  colorKeywords: DEFAULT_COLOR_KEYWORDS,
  gMax: DEFAULT_COLOR_MAX,
  gMin: DEFAULT_COLOR_MIN,
  rMax: DEFAULT_COLOR_MAX,
  rMin: DEFAULT_COLOR_MIN,
};
