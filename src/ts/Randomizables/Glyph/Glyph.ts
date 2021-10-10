//imports
import Randomizable   from "../Randomizable";
import { Variations } from "./Variations";

//define class
export default class Glyph extends Randomizable {

    //instance variables
    character:  string;
    length:     number;
    variations: Variations;

    //create a new instance
    constructor(character: string, variations: Variations) {

        //call the parent class's constructor
        super('glyph');

        //instance variables
        this.character  = character;
        this.length     = variations.length;
        this.value      = character;
        this.variations = variations;
    }

    randomize(): string {
        const choice = this.getRandom(0, this.length);
        if (!choice) return this.value = this.character;
        return this.value = this.getArrayElement(this.variations[choice - 1]);
    }
}