import RangeProperty from '../RangeProperty';
import BorderWidthOptions from './BorderWidthOptions';

export default class BorderWidth extends RangeProperty {

    protected camelCase = 'borderWidth' as const;

    options: BorderWidthOptions;

    constructor(options: BorderWidthOptions, unsafe: boolean) {
        super('border-width', options, unsafe);
    }
}