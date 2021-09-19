import ColorProperty from "../ColorProperty";
import { Options } from "../../../Options/Options";

export default class BorderColor extends ColorProperty {

    camelCase: 'borderColor' = 'borderColor';

    constructor(options:Options) {
        super('border-color', options);
    }
}