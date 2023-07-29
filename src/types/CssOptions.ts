import Option from "../interfaces/Option";
import CssProperty from "../enums/CssProperty";


type CssOptions = {
    [key in CssProperty]?: Option;
};

export default CssOptions;