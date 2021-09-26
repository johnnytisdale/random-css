//imports
import CssProperty  from "../CssProperty";
import { Options } from "../../../Options/Options";
import BorderRadiusOptions from "../../../Options/Randomizables/Css/Properties/BorderRadiusOptions";

//class definition
export default class BorderRadius extends CssProperty {

    camelCase: 'borderRadius' = 'borderRadius';
    options:    BorderRadiusOptions;

    constructor(options: BorderRadiusOptions, unsafe: boolean) {
        super('border-radius', unsafe);
        this.options = options;
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