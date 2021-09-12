//imports
import applyMixins  from "../mixins/applyMixins";
import CssProperty  from "./CssProperty";
import HasColors    from "../mixins/HasColors";

//class definition
class ColorProperty extends CssProperty {

    constructor(name:string, camelCase:string, unsafe:boolean) {
        super(name, camelCase, unsafe);
        this.colors = this.getColors();
    }

    public setValue():string {
        this.value = this.unsafe ? this.getColor_unsafe() : this.getColor_safe();
        return this.value;
    }

    private getColor_safe() {
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