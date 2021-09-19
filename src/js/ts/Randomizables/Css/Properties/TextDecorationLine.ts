import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";

export default class TextDecorationLine extends ArrayProperty {

    camelCase: 'textDecorationLine' = 'textDecorationLine';

    values: string[] = [
        "line-through",
        "line-through underline",
        "line-through overline",
        "none",
        "overline",
        "overline underline",
        "underline"
    ];

    constructor(options:Options) {
        super('text-decoration-line', options);
    }
}