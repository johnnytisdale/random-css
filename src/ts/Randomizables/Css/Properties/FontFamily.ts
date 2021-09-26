import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";
import FontFamilyOptions from "../../../Options/Randomizables/Css/Properties/FontFamilyOptions";

export default class FontFamily extends ArrayProperty {

    camelCase: 'fontFamily' = 'fontFamily';

    options: FontFamilyOptions;

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

    constructor(options: FontFamilyOptions, unsafe: boolean) {
        super('font-family', unsafe);
        this.options = options;
    }
}