//imports
import CssProperty  from "../CssProperty";
import { Options } from "../../../Options/Options";

//class definition
export default class BorderRadius extends CssProperty {

    camelCase: 'borderRadius' = 'borderRadius';

    constructor(options:Options) {
        super('border-radius', options);
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

    public randomize():string {
        this.value = this.getBorderRadius();
        return this.value;
    }
}