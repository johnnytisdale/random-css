import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";
import FontVariantOptions from "../../../Options/Randomizables/Css/Properties/FontVariantOptions";

export default class FontVariant extends ArrayProperty {

    camelCase: 'fontVariant' = 'fontVariant';

    options: FontVariantOptions;

    values: string[] = [
        "all-petite-caps",
        "all-small-caps",
        "normal",
        "small-caps",
        "petite-caps",
        "titling-caps",
        "unicase"
    ];

    constructor(options:FontVariantOptions, unsafe: boolean) {
        super('font-variant', unsafe);
        this.options = options;
    }
}