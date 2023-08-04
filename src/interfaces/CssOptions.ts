import { AnimationOptions } from "../classes/CSS/Animation";
import { BorderRadiusOptions } from "../classes/CSS/BorderRadius";
import { BorderStyleOptions } from "../classes/CSS/BorderStyle";
import ColorOptions from "./ColorOptions";
import { FontFamilyOptions } from "../classes/CSS/FontFamily";
import Options from "./Option";
import { FontWeightOptions } from "../classes/CSS/FontWeight";
import { FontStyleOptions } from "../classes/CSS/FontStyle";

export default interface CssOptions {
    animation?: AnimationOptions;
    backgroundColor?: ColorOptions;
    borderColor?: ColorOptions;
    borderRadius?: BorderRadiusOptions;
    borderStyle?: BorderStyleOptions;
    borderWidth?: Options;
    color?: ColorOptions;
    fontFamily?: FontFamilyOptions;
    fontStyle?: FontStyleOptions;
    fontWeight?: FontWeightOptions;
    textDecorationColor?: ColorOptions;
    textDecorationLine?: Options;
    textDecorationStyle?: Options;
}