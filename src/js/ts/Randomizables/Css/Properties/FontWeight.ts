import ArrayProperty from "../ArrayProperty";
import { Options } from "../../../Options/Options";

export default class FontWeight extends ArrayProperty {

    camelCase: 'fontWeight' = 'fontWeight';

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

    constructor(options:Options) {
        super('font-weight', options);
    }
}