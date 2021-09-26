//randomizables
import Glyph        from './Glyph/Glyph';
import Randomizable from './Randomizable';

//css properties
import Animation            from './Css/Properties/Animation/Animation';
import BackgroundColor      from './Css/Properties/BackgroundColor';
import BorderColor          from './Css/Properties/BorderColor';
import BorderRadius         from './Css/Properties/BorderRadius';
import BorderStyle          from './Css/Properties/BorderStyle';
import BorderWidth          from './Css/Properties/BorderWidth';
import Color                from './Css/Properties/Color';
import FontFamily           from './Css/Properties/FontFamily';
import FontKerning          from './Css/Properties/FontKerning';
import FontStretch          from './Css/Properties/FontStretch';
import FontStyle            from './Css/Properties/FontStyle';
import FontVariant          from './Css/Properties/FontVariant';
import FontWeight           from './Css/Properties/FontWeight';
import TextDecorationColor  from './Css/Properties/TextDecorationColor';
import TextDecorationLine   from './Css/Properties/TextDecorationLine';

//options
import CssOptions                   from '../Options/Randomizables/Css/CssOptions';
import { Options, defaultOptions }  from '../Options/Options';

//json
import leet    from '../../json/leet.json';
import unicode from '../../json/unicode.json'

//types
import { Transformation } from './Css/Properties/Animation/Transformation';

//define and export class
export default class RandomizableFactory {

    //instance variables
    options: Options;

    //create new instance
    constructor(options: Options) {
        this.options = options;
    }

    public getRandomizables(character: string): Randomizable[] {
        let randomizables: Randomizable[] = [];
        Object.keys(this.options.css).some(
            (name: keyof CssOptions) => {
                let randomizable: Randomizable = this.make(name);
                if (randomizable) randomizables.push(randomizable);
            }
        );
        let glyph = this.make('glyph', character);
        if (glyph !== null) randomizables.push(glyph);
        return randomizables;
    }
    
    //make a Randomizable
    make(name: string, character: string = null): Randomizable {

        switch (name) {

            case 'animation': 
                const animationOptions = this.options.css.animation;
                if (!animationOptions.enabled) return null;
                let transformations: Transformation[] = [];
                const possibilities: Transformation[] = ['rotate', 'scale', 'skew'];
                possibilities.some((transformation: Transformation) => {
                    if (animationOptions[transformation]) transformations.push(transformation);
                });
                if (!transformations.length) return null;
                return new Animation(transformations, this.options.global.unsafe);

            case 'glyph':
                const glyphOptions = this.options.glyph;
                if (!glyphOptions.enabled) return null;
                if (!leet.hasOwnProperty(character) && !unicode.hasOwnProperty(character)) return null;
                return new Glyph(character, this.options.glyph, this.options.global.unsafe);


            /*case 'backgroundColor':     return new BackgroundColor(this.options.css.backgroundColor, this.options.global.unsafe);
            case 'borderColor':         return new BorderColor(this.options.css.borderColor, this.options.global.unsafe);
            case 'borderRadius':        return new BorderRadius(this.options.css.borderRadius, this.options.global.unsafe);
            case 'borderStyle':         return new BorderStyle(this.options.css.borderStyle, this.options.global.unsafe);
            case 'borderWidth':         return new BorderWidth(this.options.css.borderWidth, this.options.global.unsafe);
            case 'color':               return new Color(this.options.css.color, this.options.global.unsafe);
            case 'fontFamily':          return new FontFamily(this.options.css.fontFamily, this.options.global.unsafe);
            case 'fontKerning':         return new FontKerning(this.options.css.fontKerning, this.options.global.unsafe);
            case 'fontStretch':         return new FontStretch(this.options.css.fontStretch, this.options.global.unsafe);
            case 'fontStyle':           return new FontStyle(this.options.css.fontStyle, this.options.global.unsafe);
            case 'fontVariant':         return new FontVariant(this.options.css.fontVariant, this.options.global.unsafe);
            case 'fontWeight':          return new FontWeight(this.options.css.fontWeight, this.options.global.unsafe);
            case 'textDecorationColor': return new TextDecorationColor(this.options.css.textDecorationColor, this.options.global.unsafe);
            case 'textDecorationLine':  return new TextDecorationLine(this.options.css.textDecorationLine, this.options.global.unsafe);*/

            
        }
    }
}