import ColorProperty from "../ColorProperty";
import { Options } from "../../../Options/Options";

export default class Color extends ColorProperty {

    camelCase: 'color' = 'color';

    constructor(options:Options) {
        super('color', options);
    }
}