import colors from '../json/colors.json';

export default class HasColors {

    colors:string[];

    getColors(): string[] {
        return colors;
    }
}