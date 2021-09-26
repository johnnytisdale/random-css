import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";
import FontWeightOptions from "../../../Options/Randomizables/Css/Properties/FontWeightOptions";

export default class FontWeight extends ArrayProperty {

    camelCase: 'fontWeight' = 'fontWeight';

    options: FontWeightOptions;

    values: string[] = [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ];

    constructor(options: FontWeightOptions, unsafe: boolean) {
        super('font-weight', unsafe);
        this.options = options;
    }
}