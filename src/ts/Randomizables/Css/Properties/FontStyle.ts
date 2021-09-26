import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";
import FontStyleOptions from "../../../Options/Randomizables/Css/Properties/FontStyleOptions";

export default class FontStyle extends ArrayProperty {

    camelCase: 'fontStyle' = 'fontStyle';

    options: FontStyleOptions;

    values: string[] = [
        "italic",
        "normal",
        "oblique"
    ];

    constructor(options: FontStyleOptions, unsafe: boolean) {
        super('font-style', unsafe);
        this.options = options;
    }
}