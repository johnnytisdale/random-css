//imports
import applyMixins  from "../../applyMixins";
import CssProperty  from "./CssProperty";
import HasColors    from "../HasColors";
import { Options }  from "../../Options/Options";
import CssOptions from "../../Options/Randomizables/Css/CssOptions";

type ColorPropertyName = (
    'backgroundColor'
  | 'borderColor'
  | 'color'
  | 'textDecorationColor'
);

//class definition
abstract class ColorProperty extends CssProperty {

    abstract camelCase: ColorPropertyName;

    options:Options;

    constructor(name: string, options: Options) {
        super(name, options);
        this.colors = this.getColors();
    }

    public randomize():string {
        this.value = this.options.global.unsafe ? this.getColor_unsafe() : this.getColor_safe();
        return this.value;
    }

    private getColor_safe():string {
        return this.getArrayElement(this.colors);
    }

    private getColor_unsafe(rMin:number = 0, rMax:number = 255, gMin:number = 0, gMax:number = 255, bMin:number = 0, bMax:number = 255) {
        const red   = this.getRandom(rMin, rMax);
        const green = this.getRandom(gMin, gMax);
        const blue  = this.getRandom(bMin, bMax);
        return `rgb(${red}, ${green}, ${blue})`;
    }
}

//apply mixins
interface ColorProperty extends HasColors {};
applyMixins(ColorProperty, [HasColors]);

//export
export default ColorProperty;