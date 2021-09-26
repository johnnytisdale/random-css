import RangeProperty from '../RangeProperty';
import CssOptions from '../../../Options/Randomizables/Css/CssOptions';
import { Options } from "../../../Options/Options";
import BorderWidthOptions from '../../../Options/Randomizables/Css/Properties/BorderWidthOptions';

export default class BorderWidth extends RangeProperty {

    camelCase: 'borderWidth' = 'borderWidth';

    options: BorderWidthOptions;

    constructor(options: BorderWidthOptions, unsafe: boolean) {
        super('border-width', unsafe, 1, 5, 'px');
        this.options = options;
    }
}