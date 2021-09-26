//imports
import CssOptions           from '../../Options/Randomizables/Css/CssOptions';
import CssPropertyOptions   from '../../Options/Randomizables/Css/CssPropertyOptions';
import Randomizable         from '../Randomizable';
import Style                from '../../Style';

//a randomizable css property
export default abstract class CssProperty extends Randomizable {

    //instance variables
    protected camelCase:    keyof CssOptions;
    protected name:         keyof Style;

    constructor(name: string, unsafe: boolean) {
        super(name, unsafe);
    }

    public getName(): keyof Style {
        return this.unsafe ? this.camelCase : this.name;
    }
}