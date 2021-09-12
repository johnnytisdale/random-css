//imports
import CssProperty  from "./CssProperty";

//class definition
export default class BorderRadius extends CssProperty {

    constructor(unsafe:boolean) {
        super('border-radius', 'borderRadius', unsafe);
    }

    public setValue():string {
        this.value = this.getBorderRadius();
        return this.value;
    }

    private getBorderRadius() {
        let length = this.getRandom(1, 4); //this.props.options.borderRadius.mono ? 1 : 4;
        let string = '';
        for (let i = 0; i < length; i++) {
            string += this.getRandom(0, 100) + '%';
            if (i < length - 1) {
                string += ' ';
            }
        }
        return string;
    }
}