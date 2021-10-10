//imports
import applyMixins from '../applyMixins';
import Randomizes  from './Randomizes';
import Timer       from '../Timer';

//one of the things that can be randomized (e.g. glyph or css property)
abstract class Randomizable {

    //instance variables
    protected name:   string;            //name of this randomizable
    protected value:  string;            //the current value of this randomizable
    public    timer:  Timer = new Timer; //timer for this randomizable

    //create a new Randomizable
    constructor(name: string) {

        //set instance variables
        this.name   = name;
    }

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
}

//apply mixins
interface Randomizable extends Randomizes {};
applyMixins(Randomizable, [Randomizes]);

//export class
export default Randomizable;