import AnimationOptions             from './Properties/AnimationOptions';
import BackgroundColorOptions       from './Properties/BackgroundColorOptions';
import BorderColorOptions           from './Properties/BorderColorOptions';
import BorderRadiusOptions          from './Properties/BorderRadiusOptions';
import BorderStyleOptions           from './Properties/BorderStyleOptions';
import BorderWidthOptions           from './Properties/BorderWidthOptions';
import ColorOptions                 from './Properties/ColorOptions';
import FontFamilyOptions            from './Properties/FontFamilyOptions';
import FontKerningOptions           from './Properties/FontKerningOptions';
import FontStretchOptions           from './Properties/FontStretchOptions';
import FontStyleOptions             from './Properties/FontStyleOptions';
import FontVariantOptions           from './Properties/FontVariantOptions';
import FontWeightOptions            from './Properties/FontWeightOptions';
import TextDecorationColorOptions   from './Properties/TextDecorationColorOptions';
import TextDecorationLineOptions    from './Properties/TextDecorationLineOptions';


export default interface CssOptions {
    animation:              AnimationOptions;
    backgroundColor:        BackgroundColorOptions;
    borderColor:            BorderColorOptions;
    borderRadius:           BorderRadiusOptions;
    borderStyle:            BorderStyleOptions;
    borderWidth:            BorderWidthOptions;
    fontFamily:             FontFamilyOptions
    fontKerning:            FontKerningOptions;
    fontStretch:            FontStretchOptions;
    fontStyle:              FontStyleOptions;
    fontVariant:            FontVariantOptions;
    fontWeight:             FontWeightOptions;
    color:                  ColorOptions;
    textDecorationColor:    TextDecorationColorOptions;
    textDecorationLine:     TextDecorationLineOptions;
}