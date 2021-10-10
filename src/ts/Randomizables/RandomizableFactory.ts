import Randomizable from './Randomizable';

//css properties
import Animation            from './Css/Animation/Animation';
import BackgroundColor      from './Css/BackgroundColor/BackgroundColor';
import BorderColor          from './Css/BorderColor/BorderColor';
import BorderRadius         from './Css/BorderRadius/BorderRadius';
import BorderStyle          from './Css/BorderStyle/BorderStyle';
import BorderWidth          from './Css/BorderWidth/BorderWidth';
import Color                from './Css/Color/Color';
import FontFamily           from './Css/FontFamily/FontFamily';
import FontKerning          from './Css/FontKerning/FontKerning';
import FontStretch          from './Css/FontStretch/FontStretch';
import FontStyle            from './Css/FontStyle/FontStyle';
import FontVariant          from './Css/FontVariant/FontVariant';
import FontWeight           from './Css/FontWeight/FontWeight';
import TextDecorationColor  from './Css/TextDecorationColor/TextDecorationColor';
import TextDecorationLine   from './Css/TextDecorationLine/TextDecorationLine';

//options
import {CssOptions}  from './Css/CssOptions';
import Options from '../Options';

//glyph
import Glyph from './Glyph/Glyph';
import { Variations } from './Glyph/Variations';
import leet from '../../json/leet.json';
import Leet from './Glyph/Leet';
import unicode from '../../json/unicode.json';
import Unicode from './Glyph/Unicode';
import UnicodeCharacter from './Glyph/UnicodeCharacter';

//define and export class
export default class RandomizableFactory {

    //instance variables
    leet:    Leet    = leet;
    options: Options;
    unicode: Unicode = unicode;

    //create new instance
    constructor(options: Options) {
        this.options = options;
    }

    //get an array of Randomizables based on the options
    public getRandomizables(character: string): Randomizable[] {

        //define an array that will hold the Randomizables
        let randomizables: Randomizable[] = [];

        //css
        Object.keys(this.options.css).some((name: keyof CssOptions) => {

            //don't make a Randomizable if this option is disabled
            if (!this.options.css[name].enabled) return;

            //make the Randomizable
            let randomizable: Randomizable = this.make(name);

            //if not null, add this Randomizable to the array
            if (randomizable !== null) randomizables.push(randomizable);
        });
        
        //glyph
        if (this.options.glyph.enabled) {
            let glyph = this.make('glyph', character);
            if (glyph !== null) randomizables.push(glyph);
        }


        return randomizables;
    }
    
    //make a Randomizable
    private make(name: string, character: string = null): Randomizable {

        switch (name) {

            case 'animation':

                return new Animation(this.options.css.animation, this.options.global.unsafe);

            case 'backgroundColor':
                
                return new BackgroundColor(this.options.css.backgroundColor, this.options.global.unsafe);

            case 'borderColor':
                return new BorderColor(this.options.css.borderColor, this.options.global.unsafe);

            case 'borderRadius':
                
                return new BorderRadius(this.options.css.borderRadius, this.options.global.unsafe);

            case 'borderStyle':
                
                return new BorderStyle(this.options.css.borderStyle, this.options.global.unsafe);

            case 'borderWidth':
                
                return new BorderWidth(this.options.css.borderWidth, this.options.global.unsafe);

            case 'color':
                
                return new Color(this.options.css.color, this.options.global.unsafe);

            case 'fontFamily':
                
                return new FontFamily(this.options.css.fontFamily, this.options.global.unsafe);

            case 'fontKerning':
                
                return new FontKerning(this.options.css.fontKerning, this.options.global.unsafe);

            case 'fontStretch':
                
                return new FontStretch(this.options.css.fontStretch, this.options.global.unsafe);

            case 'fontStyle':
                
                return new FontStyle(this.options.css.fontStyle, this.options.global.unsafe);

            case 'fontVariant':
                
                return new FontVariant(this.options.css.fontVariant, this.options.global.unsafe);

            case 'fontWeight':
                
                return new FontWeight(this.options.css.fontWeight, this.options.global.unsafe);

            case 'glyph':

                //options
                const glyphOptions = this.options.glyph;

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
                return new Glyph(character, variations);

            case 'textDecorationColor':
                
                return new TextDecorationColor(this.options.css.textDecorationColor, this.options.global.unsafe);

            case 'textDecorationLine':
                
                return new TextDecorationLine(this.options.css.textDecorationLine, this.options.global.unsafe);

            default:
                return null;
        }
    }
}