import RangeProperty from '../RangeProperty';
import CssOptions from '../../../Options/Randomizables/Css/CssOptions';
import { Options } from "../../../Options/Options";

export default class BorderWidth extends RangeProperty {

    camelCase: 'borderWidth' = 'borderWidth';

    constructor(options:Options) {
        super('border-width', options, 1, 5, 'px');
    }
}