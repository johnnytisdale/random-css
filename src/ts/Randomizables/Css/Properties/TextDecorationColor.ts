import ColorProperty from "../ColorProperty";
import { Options } from "../../../Options/Options";
import TextDecorationColorOptions from "../../../Options/Randomizables/Css/Properties/TextDecorationColorOptions";

export default class TextDecorationColor extends ColorProperty {

    camelCase: 'textDecorationColor' = 'textDecorationColor';

    options: TextDecorationColorOptions;

    constructor(options:TextDecorationColorOptions, unsafe: boolean) {
        super('text-decoration-color', unsafe);
        this.options = options;
    }
}