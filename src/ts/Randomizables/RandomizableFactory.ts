//randomizables
import Glyph        from './Glyph/Glyph';
import Randomizable from './Randomizable';

//css properties
import Animation            from './Css/Properties/Animation';
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


//define and export class
export default class RandomizableFactory {

    //instance variables
    options: Options;

    //create new instance
    constructor(options: Options) {
        this.options = options;
    }

    public getRandomizables(character: string): Randomizable[] {
        let randomizables: Randomizable[];
        randomizables = Object.keys(this.options.css).map((name: keyof CssOptions) => this.make(name));
        randomizables.push(this.make('glyph', character));
        return randomizables;
    }
    
    //make a Randomizable
    make(name: string, character: string = null): Randomizable {

        switch (name) {
            case 'animation':           return new Animation(this.options);
            case 'backgroundColor':     return new BackgroundColor(this.options);
            case 'borderColor':         return new BorderColor(this.options);
            case 'borderRadius':        return new BorderRadius(this.options);
            case 'borderStyle':         return new BorderStyle(this.options);
            case 'borderWidth':         return new BorderWidth(this.options);
            case 'color':               return new Color(this.options);
            case 'fontFamily':          return new FontFamily(this.options);
            case 'fontKerning':         return new FontKerning(this.options);
            case 'fontStretch':         return new FontStretch(this.options);
            case 'fontStyle':           return new FontStyle(this.options);
            case 'fontVariant':         return new FontVariant(this.options);
            case 'fontWeight':          return new FontWeight(this.options);
            case 'glyph':               return new Glyph(character, this.options);
            case 'textDecorationColor': return new TextDecorationColor(this.options);
            case 'textDecorationLine':  return new TextDecorationLine(this.options);
        }
    }
}