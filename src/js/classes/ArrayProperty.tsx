//imports
import CssProperty  from "./CssProperty";

//class definition
export default class ArrayProperty extends CssProperty {

    values:string[];

    constructor(name:string, camelCase:string, unsafe:boolean, values:string[]) {
        super(name, camelCase, unsafe);
        this.values = values;
    }

    public setValue():string {
        this.value = this.getArrayElement(this.values);
        return this.value;
    }
}