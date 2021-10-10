import ArrayProperty from "../ArrayProperty";
import FontVariantOptions from "./FontVariantOptions";

export default class FontVariant extends ArrayProperty {

    camelCase: 'fontVariant' = 'fontVariant';

    options: FontVariantOptions;

    constructor(options:FontVariantOptions, unsafe: boolean) {
        super('font-variant', options, unsafe);
    }
}