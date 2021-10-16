//imports
import applyMixins from '../applyMixins';
import Randomizes  from './Randomizes';
import Timer       from '../Timer';
import RandomizableOptions from './RandomizableOptions';

//one of the things that can be randomized (e.g. glyph or css property)
abstract class Randomizable {

    //instance variables
    protected enabled: boolean;
    protected name:    string;            //name of this randomizable
    protected value:  string;            //the current value of this randomizable
    public    timer:  Timer = new Timer; //timer for this randomizable
    protected   justDisabled:    boolean = false;        //was this prop disabled since last iteration?

    //create a new Randomizable
    constructor(name: string) {

        //set instance variables
        this.name   = name;
    }

    protected abstract options: RandomizableOptions;

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

    public isEnabled(): boolean {

        return this.enabled;

    }

    public wasJustDisabled(): boolean {
        return this.justDisabled;
    }
}

//apply mixins
interface Randomizable extends Randomizes {};
applyMixins(Randomizable, [Randomizes]);

//export class
export default Randomizable;