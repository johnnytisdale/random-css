import ArrayProperty from "../ArrayProperty";
import FontStretchOptions from "./FontStretchOptions";

export default class FontStretch extends ArrayProperty {

    camelCase: 'fontStretch' = 'fontStretch';

    options: FontStretchOptions;

    constructor(options: FontStretchOptions, unsafe: boolean) {
        super('font-stretch', options, unsafe);
    }
}