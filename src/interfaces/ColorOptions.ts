import ColorKeyword from "../enums/ColorKeyword";
import Option from "./Option";

export default interface ColorOptions extends Option {
  alpha?: boolean;
  aMax?: number;
  aMin?: number;
  bMax?: number;
  bMin?: number;
  colorKeywords?: ColorKeyword[];
  gMax?: number;
  gMin?: number;
  rMax?: number;
  rMin?: number;
}

export const DEFAULT_COLOR_ENABLED = false;
export const DEFAULT_COLOR_KEYWORDS = Object.values(ColorKeyword);
export const DEFAULT_COLOR_ALPHA = true;
export const DEFAULT_COLOR_ALPHA_MAX = 1;
export const DEFAULT_COLOR_ALPHA_MIN = 0.5;
export const DEFAULT_COLOR_MAX = 255;
export const DEFAULT_COLOR_MIN = 0;

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
