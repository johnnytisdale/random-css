import ArrayPropertyOptions from "./ArrayPropertyOptions";
import CssProperty from "./CssProperty";

export type ArrayPropertyName = (
      'borderStyle'
    | 'borderRadius'
    | 'fontFamily'
    | 'fontKerning'
    | 'fontStretch'
    | 'fontStyle'
    | 'fontVariant'
    | 'fontWeight'
    | 'textDecorationLine'
);
 
export const arrayPropertyOptions = [
    'borderRadius',
    'borderStyle',
    'fontFamily',
    'fontKerning',
    'fontStretch',
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'textDecorationLine'
];

export default abstract class ArrayProperty extends CssProperty {

    abstract camelCase: ArrayPropertyName;

    options: ArrayPropertyOptions;

    values: string[];

    constructor(name: string, options: ArrayPropertyOptions, unsafe: boolean) {
        super(name, unsafe);
        this.enabled = options.enabled;
        this.options = options;
        this.values = options.values;
    }

    protected getValues():string[] {
        return this.values;
    }

    public randomize():string {
        return this.value = this.getArrayElement(this.values);
    }
}