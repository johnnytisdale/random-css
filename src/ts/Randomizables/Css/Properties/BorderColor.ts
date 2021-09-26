import ColorProperty from "../ColorProperty";
import { Options } from "../../../Options/Options";
import BorderColorOptions from "../../../Options/Randomizables/Css/Properties/BorderColorOptions";

export default class BorderColor extends ColorProperty {

    camelCase: 'borderColor' = 'borderColor';

    options: BorderColorOptions;

    constructor(options: BorderColorOptions, unsafe: boolean) {
        super('border-color', unsafe);
        this.options = options;
    }
}