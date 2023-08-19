import { DEFAULT_ANIMATION_OPTIONS } from "./css/AnimationDefaults";
import { DEFAULT_BORDER_RADIUS_OPTIONS } from "./css/BorderRadiusDefaults";
import { DEFAULT_BORDER_STYLE_OPTIONS } from "./css/BorderStyleDefaults";
import { DEFAULT_BORDER_WIDTH_OPTIONS } from "./css/LengthDefaults";
import { DEFAULT_COLOR_OPTIONS } from "./css/ColorDefaults";
import { DEFAULT_FONT_FAMILY_OPTIONS } from "./css/FontFamilyDefaults";
import { DEFAULT_FONT_STYLE_OPTIONS } from "./css/FontStyleDefaults";
import { DEFAULT_FONT_WEIGHT_OPTIONS } from "./css/FontWeightDefaults";
import { DEFAULT_TEXT_DECORATION_LINE_OPTIONS } from "./css/TextDecorationLineDefaults";
import { DEFAULT_TEXT_DECORATION_STYLE_OPTIONS } from "./css/TextDecorationStyleDefaults";
import StyleConfig from "../../interfaces/StyleConfig";

const DEFAULT_STYLE_CONFIG: StyleConfig = {
  animation: DEFAULT_ANIMATION_OPTIONS,
  backgroundColor: DEFAULT_COLOR_OPTIONS,
  borderColor: DEFAULT_COLOR_OPTIONS,
  borderRadius: DEFAULT_BORDER_RADIUS_OPTIONS,
  borderStyle: DEFAULT_BORDER_STYLE_OPTIONS,
  borderWidth: DEFAULT_BORDER_WIDTH_OPTIONS,
  color: DEFAULT_COLOR_OPTIONS,
  fontFamily: DEFAULT_FONT_FAMILY_OPTIONS,
  fontStyle: DEFAULT_FONT_STYLE_OPTIONS,
  fontWeight: DEFAULT_FONT_WEIGHT_OPTIONS,
  textDecorationColor: DEFAULT_COLOR_OPTIONS,
  textDecorationLine: DEFAULT_TEXT_DECORATION_LINE_OPTIONS,
  textDecorationStyle: DEFAULT_TEXT_DECORATION_STYLE_OPTIONS,
};

export default DEFAULT_STYLE_CONFIG;
