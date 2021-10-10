import ColorProperty from "../ColorProperty";
import BorderColorOptions from "./BorderColorOptions";

export default class BorderColor extends ColorProperty {

    camelCase: 'borderColor' = 'borderColor';

    options: BorderColorOptions;

    constructor(options: BorderColorOptions, unsafe: boolean) {
        super('border-color', options, unsafe);
    }
}