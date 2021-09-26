import ColorProperty from "../ColorProperty";
import { Options } from "../../../Options/Options";
import ColorOptions from "../../../Options/Randomizables/Css/Properties/ColorOptions";

export default class Color extends ColorProperty {

    camelCase: 'color' = 'color';
    options: ColorOptions;

    constructor(options: ColorOptions, unsafe: boolean) {
        super('color', unsafe);
        this.options = options;
    }
}