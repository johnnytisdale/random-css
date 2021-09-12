//mixins
import applyMixins from '../mixins/applyMixins';
import GetsRandom  from '../mixins/GetsRandom';

//classes
import Timer from '../classes/Timer';

//one of the things that can be randomized (e.g. glyph or css property)
abstract class Randomizable {

    //the name of this randomizable
    name: string;

    //a timer for this randomizable
    timer: Timer = new Timer;

    //the current value of this randomizable
    value: string;

    //create a new instance
    constructor(name:string) {

        //set instance variables
        this.name  = name;
    }

    //get the current value of this randomizable
    getValue():string {
        return this.value;
    }

    //randomly select a new value for this randomizable, and return it
    abstract setValue():string;
}

//apply mixins
interface Randomizable extends GetsRandom {};
applyMixins(Randomizable, [GetsRandom]);

//export class
export default Randomizable;