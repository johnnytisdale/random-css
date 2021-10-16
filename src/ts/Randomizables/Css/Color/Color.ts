import ColorProperty from "../ColorProperty";
import ColorOptions from "./ColorOptions";

export default class Color extends ColorProperty {

    camelCase = 'color' as const;

    options: ColorOptions;

    constructor(options: ColorOptions, unsafe: boolean) {
        super('color', options, unsafe);
    }
}