import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";
import FontStretchOptions from "../../../Options/Randomizables/Css/Properties/FontStretchOptions";

export default class FontStretch extends ArrayProperty {

    camelCase: 'fontStretch' = 'fontStretch';

    options: FontStretchOptions;

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

    constructor(options: FontStretchOptions, unsafe: boolean) {
        super('font-stretch', unsafe);
        this.options = options;
    }
}