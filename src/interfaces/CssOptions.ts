import { AnimationOptions } from "../classes/CSS/Animation";
import { BorderRadiusOptions } from "../classes/CSS/BorderRadius";
import { BorderStyleOptions } from "../classes/CSS/BorderStyle";
import ColorOptions from "./ColorOptions";
import { FontFamilyOptions } from "../classes/CSS/FontFamily";
import Options from "./Option";

export default interface CssOptions {
    animation?: AnimationOptions;
    backgroundColor?: ColorOptions;
    borderColor?: ColorOptions;
    borderRadius?: BorderRadiusOptions;
    borderStyle?: BorderStyleOptions;
    borderWidth?: Options;
    color?: ColorOptions;
    fontFamily?: FontFamilyOptions;
    fontStyle?: Options;
    fontWeight?: Options;
    textDecorationColor?: ColorOptions;
    textDecorationLine?: Options;
    textDecorationStyle?: Options;
}