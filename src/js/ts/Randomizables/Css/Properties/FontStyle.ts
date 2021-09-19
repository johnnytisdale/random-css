import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";

export default class FontStyle extends ArrayProperty {

    camelCase: 'fontStyle' = 'fontStyle';

    values: string[] = [
        "italic",
        "normal",
        "oblique"
    ];

    constructor(options:Options) {
        super('font-style', options);
    }
}