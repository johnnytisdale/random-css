import Options from "./Option";
import { AnimationOptions } from "../classes/CSS/Animation";
import KeywordOptions from "./KeywordOptions";
import BorderStyleKeyword from "../enums/BorderStyleKeyword";
import { BorderRadiusOptions } from "../classes/CSS/BorderRadius";
import ColorOptions from "./ColorOptions";


export default interface CssOptions {
    animation?: AnimationOptions;
    backgroundColor?: ColorOptions;
    borderColor?: ColorOptions;
    borderRadius?: BorderRadiusOptions;
    borderStyle?: KeywordOptions<BorderStyleKeyword>;
    borderWidth?: Options;
    color?: ColorOptions;
    fontFamily?: Options;
    fontStyle?: Options;
    fontWeight?: Options;
    textDecorationColor?: ColorOptions;
    textDecorationLine?: Options;
    textDecorationStyle?: Options;
}