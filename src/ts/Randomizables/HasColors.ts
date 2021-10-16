import colors from '../../json/colors.json';

export default class HasColors {

    protected colors:string[];

    getColors(): string[] {
        return colors;
    }
}