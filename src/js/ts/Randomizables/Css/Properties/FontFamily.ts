import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";

export default class FontFamily extends ArrayProperty {

    camelCase: 'fontFamily' = 'fontFamily';

    values: string[] = [
        "Arial",
        "\"Arial Black\"",
        "Bookman",
        "Candara",
        "\"Comic Sans MS\"",
        "Courier",
        "\"Courier New\"",
        "Garamond",
        "Georgia",
        "Impact",
        "Palatino",
        "Roboto",
        "\"Times New Roman\"",
        "Times",
        "Verdana"
    ];

    constructor(options:Options) {
        super('font-family', options);
    }
}