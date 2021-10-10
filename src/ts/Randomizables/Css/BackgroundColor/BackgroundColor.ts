import BackgroundColorOptions from "./BackgroundColorOptions";
import ColorProperty from "../ColorProperty";

export default class BackgroundColor extends ColorProperty {

    camelCase: 'backgroundColor' = 'backgroundColor';

    options: BackgroundColorOptions;

    constructor(options: BackgroundColorOptions, unsafe: boolean) {
        super('background-color', options, unsafe);
    }
}