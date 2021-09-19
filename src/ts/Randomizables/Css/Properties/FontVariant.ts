import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";

export default class FontVariant extends ArrayProperty {

    camelCase: 'fontVariant' = 'fontVariant';

    values: string[] = [
        "all-petite-caps",
        "all-small-caps",
        "normal",
        "small-caps",
        "petite-caps",
        "titling-caps",
        "unicase"
    ];

    constructor(options:Options) {
        super('font-variant', options);
    }
}