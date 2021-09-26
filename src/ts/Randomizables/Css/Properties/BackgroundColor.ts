import ColorProperty from "../ColorProperty";
import { Options } from "../../../Options/Options";
import BackgroundColorOptions from "../../../Options/Randomizables/Css/Properties/BackgroundColorOptions";

export default class BackgroundColor extends ColorProperty {

    camelCase: 'backgroundColor' = 'backgroundColor';

    options: BackgroundColorOptions;

    constructor(options: BackgroundColorOptions, unsafe: boolean) {
        super('background-color', unsafe);
        this.options = options;
    }
}