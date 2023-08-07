import AnimationOptions, {
  DEFAULT_ANIMATION_OPTIONS,
} from "./AnimationOptions";
import BorderRadiusOptions, {
  DEFAULT_BORDER_RADIUS_OPTIONS,
} from "./BorderRadiusOptions";
import BorderStyleOptions, {
  DEFAULT_BORDER_STYLE_OPTIONS,
} from "./BorderStyleOptions";
import ColorOptions, { DEFAULT_COLOR_OPTIONS } from "./ColorOptions";
import { DEFAULT_TEXT_DECORATION_STYLE_OPTIONS } from "../classes/CSS/TextDecorationStyle";
import FontFamilyOptions, {
  DEFAULT_FONT_FAMILY_OPTIONS,
} from "./FontFamilyOptions";
import FontStyleOptions, {
  DEFAULT_FONT_STYLE_OPTIONS,
} from "./FontStyleOptions";
import FontWeightOptions, {
  DEFAULT_FONT_WEIGHT_OPTIONS,
} from "./FontWeightOptions";
import LengthOptions, { DEFAULT_BORDER_WIDTH_OPTIONS } from "./LengthOptions";
import TextDecorationLineOptions, {
  DEFAULT_TEXT_DECORATION_LINE_OPTIONS,
} from "./TextDecorationLineOptions";
import TextDecorationStyleOptions from "./TextDecorationStyleOptions";

export default interface CssOptions {
  animation?: AnimationOptions;
  backgroundColor?: ColorOptions;
  borderColor?: ColorOptions;
  borderRadius?: BorderRadiusOptions;
  borderStyle?: BorderStyleOptions;
  borderWidth?: LengthOptions;
  color?: ColorOptions;
  fontFamily?: FontFamilyOptions;
  fontStyle?: FontStyleOptions;
  fontWeight?: FontWeightOptions;
  textDecorationColor?: ColorOptions;
  textDecorationLine?: TextDecorationLineOptions;
  textDecorationStyle?: TextDecorationStyleOptions;
}

export const DEFAULT_CSS_OPTIONS: CssOptions = {
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
