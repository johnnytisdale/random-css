import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";

export default class FontKerning extends ArrayProperty {

    camelCase: 'fontKerning' = 'fontKerning';

    values: string[] = [
        "none",
        "normal"
    ];

    constructor(options:Options) {
        super('font-kerning', options);
    }
}