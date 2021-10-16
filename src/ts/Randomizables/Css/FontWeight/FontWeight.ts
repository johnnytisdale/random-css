import ArrayProperty from "../ArrayProperty";
import FontWeightOptions from "./FontWeightOptions";

export default class FontWeight extends ArrayProperty {

    camelCase: 'fontWeight' = 'fontWeight';

    options: FontWeightOptions;

    constructor(options: FontWeightOptions, unsafe: boolean) {
        super('font-weight', options, unsafe);
    }
}