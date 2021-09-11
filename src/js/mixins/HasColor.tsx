import colors from '../json/colors.json';

export default class HasColor {

    colors:string[];

    getColors():string[] {
        if (typeof this.colors == 'undefined') {
            this.colors = colors;
        }
        return this.colors;
    }
}