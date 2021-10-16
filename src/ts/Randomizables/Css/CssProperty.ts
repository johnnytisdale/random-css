//imports
import {CssOptions}           from './CssOptions';
import CssPropertyOptions   from './CssPropertyOptions';
import Randomizable         from '../Randomizable';
import Style                from '../../Style';

//a randomizable css property
export default abstract class CssProperty extends Randomizable {

    //instance variables
    protected camelCase:    keyof CssOptions;
    protected name:         keyof Style;
    protected unsafe: boolean;           //"unsafe" in the context of Content Security Policy (inline css)

    //create a new instance
    constructor(name: string, unsafe: boolean) {

        //call parent's constructor
        super(name);

        //set instance variables
        this.unsafe = unsafe;
    }

    public getName(): keyof Style {
        return this.unsafe ? this.camelCase : this.name;
    }
}