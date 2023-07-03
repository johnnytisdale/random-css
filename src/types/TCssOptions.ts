import ECssProperty from "../enums/ECssProperty";

type TCssOptions = {
    [key in ECssProperty]?: boolean;
};

export default TCssOptions;