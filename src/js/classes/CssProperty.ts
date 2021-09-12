import Timer from '../classes/Timer';
import GetsRandom from '../mixins/GetsRandom';
import applyMixins from '../mixins/applyMixins';

abstract class CssProperty {

    //the name of this css property
    name: string;

    //the camelCase name of this css property (for React)
    camelCase: string;

    //if unsafe, we will use inline css
    unsafe: boolean;

    //a timer for this css property
    timer: Timer;

    //the current value of this css property
    value: string;

    constructor(name:string, camelCase:string, unsafe:boolean = false) {
        this.name       = name;
        this.camelCase  = camelCase;
        this.unsafe     = unsafe;
        this.timer      = new Timer;
    }

    getValue():string {
        return this.value;
    }

    abstract setValue():string;

}

interface CssProperty extends GetsRandom {};
applyMixins(CssProperty, [GetsRandom]);

export default CssProperty;