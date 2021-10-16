import Animation           from './Css/Animation/Animation';
import BackgroundColor     from './Css/BackgroundColor/BackgroundColor';
import BorderColor         from './Css/BorderColor/BorderColor';
import BorderRadius        from './Css/BorderRadius/BorderRadius';
import BorderStyle         from './Css/BorderStyle/BorderStyle';
import BorderWidth         from './Css/BorderWidth/BorderWidth';
import Color               from './Css/Color/Color';
import { CssOptions }      from './Css/CssOptions';
import FontFamily          from './Css/FontFamily/FontFamily';
import FontKerning         from './Css/FontKerning/FontKerning';
import FontStretch         from './Css/FontStretch/FontStretch';
import FontStyle           from './Css/FontStyle/FontStyle';
import FontVariant         from './Css/FontVariant/FontVariant';
import FontWeight          from './Css/FontWeight/FontWeight';
import Glyph               from './Glyph/Glyph';
import Options             from '../Options';
import Randomizable        from './Randomizable';
import TextDecorationColor from './Css/TextDecorationColor/TextDecorationColor';
import TextDecorationLine  from './Css/TextDecorationLine/TextDecorationLine';

export default class RandomizableFactory {

    //instance variables
    options: Options;

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
            //if (!this.options.css[name].enabled) return null;

            //make the Randomizable
            let randomizable: Randomizable = this.make(name, character);

            //if not null, add this Randomizable to the array
            if (randomizable !== null) randomizables.push(randomizable);
        });
        
        //glyph
        if (this.options.glyph.enabled && character != '') {
            let glyph = this.make('glyph', character);
            if (glyph !== null) randomizables.push(glyph);
        }

        return randomizables;
    }
    
    //make a Randomizable
    private make(name: string, character: string = null): Randomizable {
        //if (this.options.global.ignoreSpaces && character == ' ') return null;

        switch (name) {

            case 'animation':

                let animationOptions = JSON.parse(JSON.stringify(this.options.css.animation));
                if (character == ' ' && this.options.global.ignoreSpaces) {
                    animationOptions.enabled = false;
                }
                return new Animation(animationOptions, this.options.global.unsafe);

            case 'backgroundColor':

                let backgroundOptions = JSON.parse(JSON.stringify(this.options.css.backgroundColor));
                if (character == ' ' && this.options.global.ignoreSpaces) {
                    backgroundOptions.enabled = false;
                }
                return new BackgroundColor(backgroundOptions, this.options.global.unsafe);

            case 'borderColor':

                let borderColorOptions = JSON.parse(JSON.stringify(this.options.css.borderColor));
                if (character == ' ' && this.options.global.ignoreSpaces) {
                    borderColorOptions.enabled = false;
                }
                return new BorderColor(borderColorOptions, this.options.global.unsafe);

            case 'borderRadius':
                
                let borderRadiusOptions = JSON.parse(JSON.stringify(this.options.css.borderRadius));
                if (character == ' ' && this.options.global.ignoreSpaces) {
                    borderRadiusOptions.enabled = false;
                }
                return new BorderRadius(borderRadiusOptions, this.options.global.unsafe);

            case 'borderStyle':
                
                let borderStyleOptions = JSON.parse(JSON.stringify(this.options.css.borderStyle));
                if (character == ' ' && this.options.global.ignoreSpaces) {
                    borderStyleOptions.enabled = false;
                }
                return new BorderStyle(borderStyleOptions, this.options.global.unsafe);

            case 'borderWidth':
                
                let borderWidthOptions = JSON.parse(JSON.stringify(this.options.css.borderWidth));
                if (character == ' ' && this.options.global.ignoreSpaces) {
                    borderWidthOptions.enabled = false;
                }
                return new BorderWidth(borderWidthOptions, this.options.global.unsafe);

            case 'color':
                
                if (character == ' ') { return null; }
                return new Color(this.options.css.color, this.options.global.unsafe);

            case 'fontFamily':
                
                if (character == ' ') { return null; }
                return new FontFamily(this.options.css.fontFamily, this.options.global.unsafe);

            case 'fontKerning':
                
                if (character == ' ') { return null; }
                return new FontKerning(this.options.css.fontKerning, this.options.global.unsafe);

            case 'fontStretch':
                
                if (character == ' ') { return null; }
                return new FontStretch(this.options.css.fontStretch, this.options.global.unsafe);

            case 'fontStyle':
                
                if (character == ' ') { return null; }
                return new FontStyle(this.options.css.fontStyle, this.options.global.unsafe);

            case 'fontVariant':
                
                if (character == ' ') { return null; }
                return new FontVariant(this.options.css.fontVariant, this.options.global.unsafe);

            case 'fontWeight':
                
                if (character == ' ') { return null; }
                return new FontWeight(this.options.css.fontWeight, this.options.global.unsafe);

            case 'glyph':
                
                return new Glyph(this.options.glyph, character);

            case 'textDecorationColor':
                
                if (character == ' ') { return null; }
                return new TextDecorationColor(this.options.css.textDecorationColor, this.options.global.unsafe);

            case 'textDecorationLine':
                
                if (character == ' ') { return null; }
                return new TextDecorationLine(this.options.css.textDecorationLine, this.options.global.unsafe);

            default:
                return null;
        }
    }
}