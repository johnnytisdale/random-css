import CssPropertyOptions from "./CssPropertyOptions";

type ColorPropertyOption = 'rMin' | 'rMax' | 'gMin' | 'gMax' | 'bMin' | 'bMax';

const colorPropertyOptions: ColorPropertyOption[] = [
    'rMin',
    'rMax',
    'gMin',
    'gMax',
    'bMin',
    'bMax'
];

interface ColorPropertyOptions extends CssPropertyOptions {
    rMin: number;
    rMax: number;
    gMin: number;
    gMax: number;
    bMin: number;
    bMax: number;
}

export {
    ColorPropertyOption,
    colorPropertyOptions,
    ColorPropertyOptions
};