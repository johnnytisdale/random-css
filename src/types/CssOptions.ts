import ECssProperty from "../enums/CssProperty";

type CssOptions = {
    [key in ECssProperty]?: boolean;
};

export default CssOptions;