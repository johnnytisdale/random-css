import ColorProperty from "../ColorProperty";
import TextDecorationColorOptions from "./TextDecorationColorOptions";

export default class TextDecorationColor extends ColorProperty {

    camelCase: 'textDecorationColor' = 'textDecorationColor';

    options: TextDecorationColorOptions;

    constructor(options:TextDecorationColorOptions, unsafe: boolean) {
        super('text-decoration-color', options, unsafe);
        //this.options = options;
    }
}