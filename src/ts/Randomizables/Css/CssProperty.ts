//imports
import CssOptions           from '../../Options/Randomizables/Css/CssOptions';
import CssPropertyOptions   from '../../Options/Randomizables/Css/CssPropertyOptions';
import Randomizable         from '../Randomizable';
import Style                from '../../Style';

//a randomizable css property
export default abstract class CssProperty extends Randomizable {

    //instance variables
    protected camelCase:    keyof CssOptions; //the camelCase name of this css property (for React)
    protected name:         keyof Style;

    //get the options for this specific css property
    protected getOptions():CssPropertyOptions {
        return this.options.css[this.camelCase];
    }

    public getName(): keyof Style {
        return this.options.global.unsafe ? this.camelCase : this.name;
    }
}