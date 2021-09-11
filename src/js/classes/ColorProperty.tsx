//imports
import applyMixins  from "../mixins/applyMixins";
import CssProperty  from "./CssProperty";
import HasColor     from "../mixins/HasColor";

//class definition
class ColorProperty extends CssProperty {

    public setValue():string {
        this.value = this.unsafe ? this.getColor_unsafe() : this.getColor();
        return this.value;
    }

    private getColor() {
        return this.getArrayElement(this.getColors());
    }

    private getColor_unsafe(rMin:number = 0, rMax:number = 255, gMin:number = 0, gMax:number = 255, bMin:number = 0, bMax:number = 255) {
        const red   = this.getRandom(rMin, rMax);
        const green = this.getRandom(gMin, gMax);
        const blue  = this.getRandom(bMin, bMax);
        return `rgb(${red}, ${green}, ${blue})`;
    }
}

//apply mixins
interface ColorProperty extends HasColor {};
applyMixins(ColorProperty, [HasColor]);

//export
export default ColorProperty;