import Option from "../interfaces/Option";
import { AnimationOption } from "../classes/CSS/Animation";


type CssOptions = {
    animation?: AnimationOption;
    backgroundColor?: Option;
    borderColor?: Option;
    borderRadius?: Option;
    borderStyle?: Option;
    borderWidth?: Option;
    color?: Option;
    fontFamily?: Option;
    fontStyle?: Option;
    fontWeight?: Option;
    textDecorationColor?: Option;
    textDecorationLine?: Option;
    textDecorationStyle?: Option;
};

export default CssOptions;