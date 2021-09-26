//imports
import CssProperty  from "./CssProperty";
import { Options } from "../../Options/Options";

type RangePropertyName = (
    'borderWidth'
);

//class definition
export default abstract class RangeProperty extends CssProperty {

    abstract camelCase: RangePropertyName;

    min:    number;
    max:    number;
    unit:   string;

    constructor(name: string, unsafe: boolean, min:number, max:number, unit:string) {

        //call the parent class's constructor
        super(name, unsafe);

        //do a little constructing of our own
        this.min  = min;
        this.max  = max;
        this.unit = unit;
    }

    public randomize():string {
        this.value = String(this.getRandom(this.min, this.max)) + this.unit;
        return this.value;
    }
}