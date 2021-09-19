import ColorProperty from "../ColorProperty";
import { Options } from "../../../Options/Options";

export default class BackgroundColor extends ColorProperty {

    camelCase: 'backgroundColor' = 'backgroundColor';

    constructor(options:Options) {
        super('background-color', options);
    }
}