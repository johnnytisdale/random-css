import applyMixins from './applyMixins';
import Randomizes from "./Randomizables/Randomizes";

class Timer {

    interval:   number;
    ticks:      number;

    //create new instance
    constructor() {
        this.set();
    }

    //increment the ticks
    increment() {

        //tick tock
        this.ticks++;

        //interval has not yet elapsed
        if (this.ticks < this.interval) { return false; }

        //interval has elapsed
        this.set();
        return true;
    }

    //set/reset
    set() {
        this.ticks    = 0;
        this.interval = this.getRandom(3, 20);
    }

}

//apply mixins
interface Timer extends Randomizes {}
applyMixins(Timer, [Randomizes]);

export default Timer;