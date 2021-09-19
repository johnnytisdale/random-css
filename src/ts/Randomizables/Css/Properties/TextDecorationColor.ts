import ColorProperty from "../ColorProperty";
import { Options } from "../../../Options/Options";

export default class TextDecorationColor extends ColorProperty {

    camelCase: 'textDecorationColor' = 'textDecorationColor';

    constructor(options:Options) {
        super('text-decoration-color', options);
    }
}