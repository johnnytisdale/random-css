//imports
import ArrayProperty from "../ArrayProperty";
import BorderRadiusOptions from "./BorderRadiusOptions";
import { BorderRadiusValue } from "./BorderRadiusOptions";

//class definition
export default class BorderRadius extends ArrayProperty {

    camelCase: 'borderRadius' = 'borderRadius';
    public values: BorderRadiusValue[];

    constructor(options: BorderRadiusOptions, unsafe: boolean) {
        super('border-radius', options, unsafe);
    }

    private getBorderRadius() {
        let percentages = [];
        for (let i = 0; i < parseInt(this.getArrayElement(this.values)); i++) {
            percentages.push(`${this.getRandom(0, 100)}%`);
        }
        return percentages.join(' ');
    }

    public randomize():string {
        return  this.value = this.getBorderRadius();
    }
}