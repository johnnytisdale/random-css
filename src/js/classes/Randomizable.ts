import Timer from '../classes/Timer';
import GetsRandom from '../mixins/GetsRandom';
import applyMixins from '../mixins/applyMixins';

abstract class Randomizable {

    //the name of this randomizable
    name: string;

    //a timer for this randomizable
    timer: Timer;

    //the current value of this randomizable
    value: string;

    constructor(name:string) {
        this.name = name;
        this.timer = new Timer;
    }

    getValue():string {
        return this.value;
    }

    abstract setValue():string;

}

interface Randomizable extends GetsRandom {};
applyMixins(Randomizable, [GetsRandom]);

export default Randomizable;