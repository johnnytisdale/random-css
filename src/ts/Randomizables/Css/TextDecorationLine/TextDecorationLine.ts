import ArrayProperty from "../ArrayProperty";
import TextDecorationLineOptions from "./TextDecorationLineOptions";

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
        super('text-decoration-line', options, unsafe);
        this.options = options;
    }
}