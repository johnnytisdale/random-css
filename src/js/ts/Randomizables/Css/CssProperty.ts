//parent class

import CssOptions           from '../../Options/Randomizables/Css/CssOptions';
import CssPropertyOptions   from '../../Options/Randomizables/Css/CssPropertyOptions';
import { Options }          from '../../Options/Options';
import Randomizable         from '../Randomizable';

//define and export class
export default abstract class CssProperty extends Randomizable {

    //the camelCase name of this css property (for React)
    camelCase: keyof CssOptions;

    //the current value of this css property
    value: string;

    //create a new instance
    constructor(name: string, options:Options) {

        //call the parent class's constructor
        super(name, options);
    }

    protected getOptions():CssPropertyOptions {
        return this.options.css[this.camelCase];
    }

    isEnabled():boolean {

        const wasEnabled = this.enabled;

        if (wasEnabled === null) {
            this.enabled = this.getOptions().enabled;
            return this.enabled;
        }

        const enabled  = this.getOptions().enabled;

        if (wasEnabled && !enabled) {
            console.log(this.name + ' was just disabled');
            this.wasJustDisabled = true;
        }

        this.enabled = enabled;

        return enabled;
    }
}