import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";
import FontKerningOptions from "../../../Options/Randomizables/Css/Properties/FontKerningOptions";

export default class FontKerning extends ArrayProperty {

    camelCase: 'fontKerning' = 'fontKerning';

    options: FontKerningOptions;

    values: string[] = [
        "none",
        "normal"
    ];

    constructor(options: FontKerningOptions, unsafe: boolean) {
        super('font-kerning', unsafe);
        this.options = options;
    }
}