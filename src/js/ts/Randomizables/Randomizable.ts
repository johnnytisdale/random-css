//imports
import applyMixins          from '../../mixins/applyMixins';
import GetsRandom           from '../../mixins/GetsRandom';
import { Options }          from '../Options/Options';
import RandomizableOptions  from '../Options/Randomizables/RandomizableOptions';
import Timer                from '../Timer';

//one of the things that can be randomized (e.g. glyph or css property)
abstract class Randomizable {

    //instance variables
    protected   enabled:            boolean;                //whether this randomizable is enabled
    protected   name:               string;                 //name of this randomizable
    protected   options:            Options;                //reference to the root component's options prop
    protected   value:              string;                 //the current value of this randomizable
    protected   wasJustDisabled:    boolean = false;        //was this prop disabled since last iteration?
    public      timer:              Timer   = new Timer;    //timer for this randomizable

    //create a new Randomizable
    constructor(name: string, options: Options) {

        //set instance variables
        this.name    = name;
        this.options = options;
    }

    //get the options for this specific Randomizable
    protected abstract getOptions(): RandomizableOptions;

    //set (and return) a random value for this Randomizable
    public abstract randomize(): string;

    //get the name of this Randomizable
    public getName(): string {
        return this.name;
    }

    //get the current value of this Randomizable
    public getValue(): string {
        return this.value;
    }

    //is this Randomizable enabled?
    public isEnabled():boolean {

        //was this Randomizable enabled last time we checked?
        const wasEnabled = this.enabled;

        //is this Randomizable currently enabled?
        const isEnabled  = this.getOptions().enabled;

        //this Randomizable was disabled since the last iteration
        if (wasEnabled === true && isEnabled === false) {
            console.log(this.name + ' was just disabled');
            this.wasJustDisabled = true;
        }

        return this.enabled = isEnabled;
    }

    //was this Randomizable just disabled?
    public justDisabled(): boolean {


        const wasJustDisabled = this.wasJustDisabled;
        if (wasJustDisabled) this.wasJustDisabled = false;
        return wasJustDisabled;
    }
}

//apply mixins
interface Randomizable extends GetsRandom {};
applyMixins(Randomizable, [GetsRandom]);

//export class
export default Randomizable;