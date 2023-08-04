import { AnimationOptions, DEFAULT_ANIMATION } from "../classes/CSS/Animation";
import { BorderRadiusOptions, DEFAULT_BORDER_RADIUS } from "../classes/CSS/BorderRadius";
import { BorderStyleOptions, DEFAULT_BORDER_STYLE } from "../classes/CSS/BorderStyle";
import ColorOptions from "./ColorOptions";
import { DEFAULT_FONT_FAMILY, FontFamilyOptions } from "../classes/CSS/FontFamily";
import { DEFAULT_FONT_STYLE, FontStyleOptions } from "../classes/CSS/FontStyle";
import { DEFAULT_FONT_WEIGHT, FontWeightOptions } from "../classes/CSS/FontWeight";
import { LengthOptions } from "../classes/CSS/LengthProperty";
import { DEFAULT_TEXT_DECORATION_LINE, TextDecorationLineOptions } from "../classes/CSS/TextDecorationLine";
import { DEFAULT_TEXT_DECORATION_STYLE, TextDecorationStyleOptions } from "../classes/CSS/TextDecorationStyle";
import { DEFAULT_BORDER_WIDTH } from "../classes/CSS/BorderWidth";
import { DEFAULT_COLOR_OPTIONS } from "../classes/CSS/ColorProperty";

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
    animation: { ...DEFAULT_ANIMATION },
    backgroundColor: { ...DEFAULT_COLOR_OPTIONS },
    borderColor: { ...DEFAULT_COLOR_OPTIONS },
    borderRadius: { ...DEFAULT_BORDER_RADIUS },
    borderStyle: { ...DEFAULT_BORDER_STYLE },
    borderWidth: { ...DEFAULT_BORDER_WIDTH },
    color: { ...DEFAULT_COLOR_OPTIONS },
    fontFamily: { ...DEFAULT_FONT_FAMILY },
    fontStyle: { ...DEFAULT_FONT_STYLE },
    fontWeight: { ...DEFAULT_FONT_WEIGHT },
    textDecorationColor: { ...DEFAULT_COLOR_OPTIONS },
    textDecorationLine: { ...DEFAULT_TEXT_DECORATION_LINE },
    textDecorationStyle: { ...DEFAULT_TEXT_DECORATION_STYLE }
  }
