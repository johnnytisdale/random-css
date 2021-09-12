//imports
import CssProperty  from "./CssProperty";

//class definition
export default class ArrayProperty extends CssProperty {

    min:    number;
    max:    number;
    unit:   string;

    constructor(name:string, camelCase:string, unsafe:boolean, min:number, max:number, unit:string) {

        //call the parent class's constructor
        super(name, camelCase, unsafe);

        //do a little constructing of our own
        this.min  = min;
        this.max  = max;
        this.unit = unit;
    }

    public setValue():string {
        this.value = String(this.getRandom(this.min, this.max)) + this.unit;
        return this.value;
    }
}