import Options from "../interfaces/Option";
import { AnimationOption } from "../classes/CSS/Animation";
import KeywordOptions from "../interfaces/KeywordOptions";
import BorderStyleKeyword from "../enums/BorderStyleKeyword";


type CssOptions = {
    animation?: AnimationOption;
    backgroundColor?: Options;
    borderColor?: Options;
    borderRadius?: Options;
    borderStyle?: KeywordOptions<BorderStyleKeyword>;
    borderWidth?: Options;
    color?: Options;
    fontFamily?: Options;
    fontStyle?: Options;
    fontWeight?: Options;
    textDecorationColor?: Options;
    textDecorationLine?: Options;
    textDecorationStyle?: Options;
};

export default CssOptions;