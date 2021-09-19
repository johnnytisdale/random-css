import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";

export default class FontStretch extends ArrayProperty {

    camelCase: 'fontStretch' = 'fontStretch';

    values: string[] = [
        "ultra-condensed",
        "extra-condensed",
        "condensed",
        "semi-condensed",
        "normal",
        "semi-expanded",
        "expanded",
        "extra-expanded",
        "ultra-expanded"
    ];

    constructor(options:Options) {
        super('font-stretch', options);
    }
}