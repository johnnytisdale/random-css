import getRandom from '../Character/methods/getRandom';

export default class Timer {

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
        this.interval = getRandom(3, 10);
    }

}