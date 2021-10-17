import { axes }            from './Randomizables/Css/Animation/Axis';
import { borderRadiusValues } from './Randomizables/Css/BorderRadius/BorderRadiusOptions';
import { borderStyleValues } from './Randomizables/Css/BorderStyle/BorderStyleOptions';
import { ColorPropertyOptions } from './Randomizables/Css/ColorPropertyOptions';
import { directions }      from './Randomizables/Css/Animation/Direction';
import { fillModes }       from './Randomizables/Css/Animation/FillMode';
import { fontFamilyValues } from './Randomizables/Css/FontFamily/FontFamilyOptions';
import { fontKerningValues } from './Randomizables/Css/FontKerning/FontKerningOptions';
import { fontStretchValues } from './Randomizables/Css/FontStretch/FontStretchOptions';
import { fontStyleValues } from './Randomizables/Css/FontStyle/FontStyleOptions';
import { fontVariantValues } from './Randomizables/Css/FontVariant/FontVariantOptions';
import { fontWeightValues } from './Randomizables/Css/FontWeight/FontWeightOptions';
import { iterations }      from './Randomizables/Css/Animation/Iteration';
import Options from './Options';
import { scaleDirections } from './Randomizables/Css/Animation/ScaleDirection';
import { textDecorationLineValues } from './Randomizables/Css/TextDecorationLine/TextDecorationLineOptions';
import { timingFunctions } from './Randomizables/Css/Animation/TimingFunction';
import { transformations } from './Randomizables/Css/Animation/Transformation';
//import lengthUnits from './Randomizables/Css/lengthUnits';
import lengthUnits from './Randomizables/Css/absoluteLengthUnits';

function defaultColorOptions(): ColorPropertyOptions {
    return {
        enabled: false,
        rMin:    0,
        rMax:    255,
        gMin:    0,
        gMax:    255,
        bMin:    0,
        bMax:    255
    }
};

const defaultOptions: Options = {
    global: {
        center:       true,
        size:         4,
        text:         'random css',
        ignoreSpaces: true,
        unsafe:       true
    },
    css: {
        animation: {
            enabled:         false,
            axes:            axes,
            directions:      directions,
            fillModes:       fillModes,
            iterations:      iterations,
            scaleDirections: scaleDirections,
            timingFunctions: timingFunctions,
            transformations: transformations
        },
        backgroundColor: defaultColorOptions(),
        borderColor: defaultColorOptions(),
        borderRadius: {
            enabled: false,
            values: borderRadiusValues.map(x => x)
        },
        borderStyle: {
            enabled: false,
            values: borderStyleValues.map(x => x)
        },
        borderWidth: {
            enabled: false,
            max: 5,
            min: 1,
            units: lengthUnits.map(x => x)
        },
        color: defaultColorOptions(),
        fontFamily: {
            enabled: false,
            values: fontFamilyValues.map(x => x)
        }, 
       fontKerning: {
            enabled: false,
            values:  fontKerningValues.map(x => x)
        }, 
        fontStretch: {
            enabled: false,
            values:  fontStretchValues.map(x => x)
        },
        fontStyle: {
            enabled: false,
            values:  fontStyleValues.map(x => x)
        }, 
        fontVariant: {
            enabled: false,
            values: fontVariantValues.map(x => x)
        }, 
        fontWeight: {
            enabled: false,
            values: fontWeightValues.map(x => x)
        },
        textDecorationColor: defaultColorOptions(),
        textDecorationLine: {
            enabled: false,
            values: textDecorationLineValues.map(x => x)
        }
    },
    glyph: {
        enabled: true,
        leet:    false,
        unicode: true
    }
}

export default defaultOptions;