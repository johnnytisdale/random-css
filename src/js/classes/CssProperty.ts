//parent class
import Randomizable from './Randomizable';

//define and export class
export default abstract class CssProperty extends Randomizable {

    //the camelCase name of this css property (for React)
    camelCase: string;

    //if unsafe, we will use inline css
    unsafe: boolean;

    //the current value of this css property
    value: string;

    //create a new instance
    constructor(name:string, camelCase:string, unsafe:boolean = false) {

        //call the parent class's constructor
        super(name);

        //set instance variables
        this.camelCase  = camelCase;
        this.unsafe     = unsafe;
    }
}