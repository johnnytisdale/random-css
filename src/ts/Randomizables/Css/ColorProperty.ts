//imports
import applyMixins  from "../../applyMixins";
import CssProperty  from "./CssProperty";
import HasColors    from "../HasColors";
import { ColorPropertyOptions, colorPropertyOptions } from "./ColorPropertyOptions";

type ColorPropertyName = (
    'backgroundColor'
  | 'borderColor'
  | 'color'
  | 'textDecorationColor'
);

//class definition
abstract class ColorProperty extends CssProperty {

    abstract camelCase: ColorPropertyName;

    protected options: ColorPropertyOptions;

    protected rMin: number;
    protected rMax: number;
    protected gMin: number;
    protected gMax: number;
    protected bMin: number;
    protected bMax: number;

    constructor(name: string, options: ColorPropertyOptions, unsafe: boolean) {
        super(name, unsafe);
        this.colors = this.getColors();
        this.enabled = options.enabled;
        this.rMin = options.rMin;
        this.rMax = options.rMax;
        this.gMin = options.gMin;
        this.gMax = options.gMax;
        this.bMin = options.bMin;
        this.bMax = options.bMax;
        this.options = options;
    }

    public randomize():string {
        this.value = this.unsafe ? this.getColor_unsafe() : this.getColor_safe();
        return this.value;
    }

    private getColor_safe():string {
        return this.getArrayElement(this.colors);
    }

    private getColor_unsafe(rMin:number = 0, rMax:number = 255, gMin:number = 0, gMax:number = 255, bMin:number = 0, bMax:number = 255) {
        const red   = this.getRandom(this.rMin, this.rMax);
        const green = this.getRandom(this.gMin, this.gMax);
        const blue  = this.getRandom(this.bMin, this.bMax);
        return `rgb(${red}, ${green}, ${blue})`;
    }
}

//apply mixins
interface ColorProperty extends HasColors {};
applyMixins(ColorProperty, [HasColors]);

//export
export default ColorProperty;