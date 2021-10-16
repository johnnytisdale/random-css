import ArrayProperty from "../ArrayProperty";
import BorderStyleOptions from "./BorderStyleOptions";

export default class BorderStyle extends ArrayProperty {

    camelCase: 'borderStyle' = 'borderStyle';
    options: BorderStyleOptions;

    constructor(options: BorderStyleOptions, unsafe: boolean) {
        super('border-style', options, unsafe);
        this.options = options;
    }
}