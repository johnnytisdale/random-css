import { AnimationOptions } from "../classes/CSS/Animation";
import { BorderRadiusOptions } from "../classes/CSS/BorderRadius";
import { BorderStyleOptions } from "../classes/CSS/BorderStyle";
import ColorOptions from "./ColorOptions";
import { FontFamilyOptions } from "../classes/CSS/FontFamily";
import { FontStyleOptions } from "../classes/CSS/FontStyle";
import { FontWeightOptions } from "../classes/CSS/FontWeight";
import { LengthOptions } from "../classes/CSS/LengthProperty";
import { TextDecorationLineOptions } from "../classes/CSS/TextDecorationLine";
import { TextDecorationStyleOptions } from "../classes/CSS/TextDecorationStyle";

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
