import ECssProperty from "../enums/ECssProperty";

type CssOptions = {
    [key in ECssProperty]?: boolean;
};

export default CssOptions;