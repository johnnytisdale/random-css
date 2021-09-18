//randomizables
import Randomizable from './Randomizable';

//css properties
import Animation from './Animation';
import CssProperty from './CssProperty';
import ArrayProperty from './ArrayProperty';
import BorderRadius from './BorderRadius';
import ColorProperty from './ColorProperty';
import RangeProperty from './RangeProperty'


import CssPropertyOptions from '../interfaces/CssPropertyOptions';
import Glyph from './Glyph';

export default class RandomizableFactory {

    unsafe:boolean;

    constructor(unsafe:boolean) {
        this.unsafe = unsafe;
    }
    
    make(type:string, name:string, options:CssPropertyOptions): Randomizable {

        if (type == 'css') {

            //color
            if (options.type == 'color') {
                return new ColorProperty(
                    name,
                    options.camelCase,
                    this.unsafe
                );
            }

            //array
            else if (options.type == 'array') {
                return new ArrayProperty(
                    name,
                    options.camelCase,
                    this.unsafe,
                    options.values
                );
            }

            //range
            else if (options.type == 'range') {
                return new RangeProperty(
                    name,
                    options.camelCase,
                    this.unsafe,
                    options.min,
                    options.max,
                    options.unit
                );
            }

            //animation
            else if (name == 'animation') {
                return new Animation(this.unsafe);
            }

            //border radius
            else if (name == 'border-radius') {
                return new BorderRadius(this.unsafe);
            }

        }

        else if (type == 'glyph') {
            return new Glyph(options.character);
        }

    }
}