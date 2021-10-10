import CssProperty  from "./CssProperty";
import AbsoluteLengthUnit from "./AbsoluteLengthUnit";
import RangePropertyOptions from "./RangePropertyOptions";
import RangePropertyName from "./RangePropertyName";

export default abstract class RangeProperty extends CssProperty {

    protected abstract camelCase: RangePropertyName;

    max:   number;
    min:   number;
    units: AbsoluteLengthUnit[];

    constructor(name: string, options: RangePropertyOptions, unsafe: boolean) {
        super(name, unsafe);
        this.max   = options.max;
        this.min   = options.min;
        this.units = options.units;
    }

    public randomize():string {
        return this.value = `${String(this.getRandom(this.min, this.max))}${this.getArrayElement(this.units)}`;
    }
}