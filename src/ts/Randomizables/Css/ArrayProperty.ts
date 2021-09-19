//imports
import ArrayPropertyOptions from "../../Options/Randomizables/Css/ArrayPropertyOptions";
import CssProperty          from "./CssProperty";
import { Options }          from "../../Options/Options";

type ArrayPropertyName = (
      'borderStyle'
    | 'fontFamily'
    | 'fontKerning'
    | 'fontStretch'
    | 'fontStyle'
    | 'fontVariant'
    | 'fontWeight'
    | 'textDecorationLine'
);

//class definition
export default abstract class ArrayProperty extends CssProperty {

    //instance variables
    abstract camelCase: ArrayPropertyName;
    abstract values:string[];

    constructor(name: string, options:Options) {
        super(name, options);
    }

    protected getValues():string[] {
        return this.getOptions().values;
    }

    public randomize():string {
        this.value = this.getArrayElement(this.values);
        return this.value;
    }

    protected getOptions():ArrayPropertyOptions {
        return this.options.css[this.camelCase];
    }
}