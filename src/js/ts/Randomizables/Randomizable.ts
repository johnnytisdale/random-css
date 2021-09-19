//mixins
import applyMixins from '../../mixins/applyMixins';
import GetsRandom  from '../../mixins/GetsRandom';

//classes
import Timer from '../Timer';

//interfaces
import { Options } from '../Options/Options';
import RandomizableOptions from '../Options/Randomizables/RandomizableOptions';
import CssOptions from '../Options/Randomizables/Css/CssOptions';
import ArrayPropertyOptions from '../Options/Randomizables/Css/ArrayPropertyOptions';

//one of the things that can be randomized (e.g. glyph or css property)
abstract class Randomizable {

    //the name of this randomizable
    name: string;

    //whether this randomizable is enabled
    options: Options;

    //a timer for this randomizable
    timer: Timer = new Timer;

    //the current value of this randomizable
    value: string;

    protected enabled: boolean;

    protected wasJustDisabled: boolean = false;

    //create a new instance
    constructor(name: string, options:Options) {

        //set instance variables
        this.name    = name;
        this.options = options;
    }

    //get the current value of this randomizable
    getValue():string {
        return this.value;
    }

    justDisabled():boolean {
        const wasJustDisabled = this.wasJustDisabled;
        if (wasJustDisabled) this.wasJustDisabled = false;
        return wasJustDisabled;
    }

    //randomly select a new value for this randomizable, and return it
    abstract setValue():string;

    abstract isEnabled():boolean;

    protected abstract getOptions():RandomizableOptions;
}

//apply mixins
interface Randomizable extends GetsRandom {};
applyMixins(Randomizable, [GetsRandom]);

//export class
export default Randomizable;