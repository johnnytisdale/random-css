//imports
import CssOptions           from '../../Options/Randomizables/Css/CssOptions';
import CssPropertyOptions   from '../../Options/Randomizables/Css/CssPropertyOptions';
import Randomizable         from '../Randomizable';

//a randomizable css property
export default abstract class CssProperty extends Randomizable {

    //instance variables
    protected camelCase: keyof CssOptions; //the camelCase name of this css property (for React)

    //get the options for this specific css property
    protected getOptions():CssPropertyOptions {
        return this.options.css[this.camelCase];
    }
}