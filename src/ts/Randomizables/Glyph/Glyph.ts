//imports
import Randomizable   from "../Randomizable";
import GlyphOptions from "./GlyphOptions";
import { Variations } from "./Variations";
import leet from '../../../json/leet.json';
import Leet from '../Glyph/Leet';
import unicode from '../../../json/unicode.json';
import Unicode from '../Glyph/Unicode';
import UnicodeCharacter from '../Glyph/UnicodeCharacter';

//define class
export default class Glyph extends Randomizable {

    //instance variables
    character:  string;
    length:     number;
    variations: Variations;
    leet:    Leet    = leet;
    options: GlyphOptions;
    unicode: Unicode = unicode;

    //create a new instance
    constructor(options: GlyphOptions, character: string) {

        //call the parent class's constructor
        super('glyph');

        //instance variables
        this.character  = character;
        this.enabled    = options.enabled;
        this.options    = options;
        this.value      = character;
        

        //options
        const glyphOptions = options;

        //do not make this Randomizable if there are no glyphs for the character
        if (!leet.hasOwnProperty(character) && !unicode.hasOwnProperty(character)) return null;

        //do not make this Randomizable if both leet and unicode are disabled
        if (!glyphOptions.leet && !glyphOptions.unicode) return null;

        let variations: Variations = [];
        if (glyphOptions.leet) variations.push(this.leet[character]);
        if (glyphOptions.unicode) {
            variations.push(
                this.unicode[character].map(
                    (x: UnicodeCharacter) => String.fromCharCode(parseInt(x.unicode, 16))
                )
            );
        }
        this.length     = variations.length;
        this.variations = variations;
    }

    isEnabled(): boolean {
        return this.enabled;
    }

    randomize(): string {
        const choice = this.getRandom(0, this.length);
        if (!choice) return this.value = this.character;
        return this.value = this.getArrayElement(this.variations[choice - 1]);
    }
}