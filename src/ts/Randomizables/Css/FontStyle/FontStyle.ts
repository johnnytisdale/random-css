import ArrayProperty from "../ArrayProperty";
import FontStyleOptions from "./FontStyleOptions";

export default class FontStyle extends ArrayProperty {

    camelCase: 'fontStyle' = 'fontStyle';

    options: FontStyleOptions;

    constructor(options: FontStyleOptions, unsafe: boolean) {
        super('font-style', options, unsafe);
    }
}