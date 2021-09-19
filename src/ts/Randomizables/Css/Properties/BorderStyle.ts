import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";

export default class BorderStyle extends ArrayProperty {

    camelCase: 'borderStyle' = 'borderStyle';

    values: string[] = [
        "dashed",
        "dotted",
        "double",
        "groove",
        "inset",
        "none",
        "outset",
        "ridge",
        "solid"
    ];

    constructor(options:Options) {
        super('border-style', options);
    }
}