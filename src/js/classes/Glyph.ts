//classes
import Randomizable from "./Randomizable";

//interfaces
import Leet             from '../interfaces/Leet';
import Unicode          from '../interfaces/Unicode';
import UnicodeCharacter from "../interfaces/UnicodeCharacter";

//json
import leetJson         from '../json/leet.json';
import unicodeJson      from '../json/unicode.json';

//specify types of json
const leet:Leet         = leetJson;
const unicode:Unicode   = unicodeJson;

//define class
export default class Glyph extends Randomizable {

    //instance variables
    character:  string;
    leet:       string[] = [];
    unicode:    string[] = [];

    //create a new instance
    constructor(character:string) {

        //call the parent class's constructor
        super('glyph');

        //instance variables
        this.character  = character;
        this.value      = character;

        //leetspeak
        if (leet.hasOwnProperty(this.character)) this.leet = leet[this.character];

        //unicode
        if (unicode.hasOwnProperty(this.character)) {
            this.unicode = unicode[this.character].map(x => String.fromCharCode(parseInt(x.unicode, 16)));
        }
    }

    setValue() {
        switch (this.getRandom(1,3)) {
            case 1: this.value = this.getArrayElement(this.leet);       break;
            case 2: this.value = this.getArrayElement(this.unicode);    break;
            case 3: this.value = this.character;
        }
        
        return this.value;
        
    }

}