import ArrayProperty from "../ArrayProperty";
import FontFamilyOptions from "./FontFamilyOptions";

export default class FontFamily extends ArrayProperty {

    camelCase: 'fontFamily' = 'fontFamily';

    options: FontFamilyOptions;

    constructor(options: FontFamilyOptions, unsafe: boolean) {
        super('font-family', options, unsafe);
    }
}