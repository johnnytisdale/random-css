import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";
import BorderStyleOptions from "../../../Options/Randomizables/Css/Properties/BorderStyleOptions";

export default class BorderStyle extends ArrayProperty {

    camelCase: 'borderStyle' = 'borderStyle';
    options:   BorderStyleOptions;

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

    constructor(options: BorderStyleOptions, unsafe: boolean) {
        super('border-style', unsafe);
        this.options = options;
    }
}