import ArrayProperty from "../ArrayProperty";
import FontKerningOptions from "./FontKerningOptions";

export default class FontKerning extends ArrayProperty {

    camelCase: 'fontKerning' = 'fontKerning';

    options: FontKerningOptions;

    constructor(options: FontKerningOptions, unsafe: boolean) {
        super('font-kerning', options, unsafe);
    }
}