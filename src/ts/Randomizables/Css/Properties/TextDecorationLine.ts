import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";
import TextDecorationLineOptions from "../../../Options/Randomizables/Css/Properties/TextDecorationLineOptions";

export default class TextDecorationLine extends ArrayProperty {

    camelCase: 'textDecorationLine' = 'textDecorationLine';

    options: TextDecorationLineOptions;

    values: string[] = [
        "line-through",
        "line-through underline",
        "line-through overline",
        "none",
        "overline",
        "overline underline",
        "underline"
    ];

    constructor(options:TextDecorationLineOptions, unsafe: boolean) {
        super('text-decoration-line', unsafe);
        this.options = options;
    }
}