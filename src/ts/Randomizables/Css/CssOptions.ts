import {AnimationOptions}         from './Animation/AnimationOptions';
import BackgroundColorOptions     from './BackgroundColor/BackgroundColorOptions';
import BorderColorOptions         from './BorderColor/BorderColorOptions';
import BorderRadiusOptions        from './BorderRadius/BorderRadiusOptions';
import BorderStyleOptions         from './BorderStyle/BorderStyleOptions';
import BorderWidthOptions         from './BorderWidth/BorderWidthOptions';
import ColorOptions               from './Color/ColorOptions';
import FontFamilyOptions          from './FontFamily/FontFamilyOptions';
import FontKerningOptions         from './FontKerning/FontKerningOptions';
import FontStretchOptions         from './FontStretch/FontStretchOptions';
import FontStyleOptions           from './FontStyle/FontStyleOptions';
import FontVariantOptions         from './FontVariant/FontVariantOptions';
import FontWeightOptions          from './FontWeight/FontWeightOptions';
import TextDecorationColorOptions from './TextDecorationColor/TextDecorationColorOptions';
import TextDecorationLineOptions  from './TextDecorationLine/TextDecorationLineOptions';


interface CssOptions {
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

type CssOption = (
      AnimationOptions
    | BackgroundColorOptions
    | BorderColorOptions
    | BorderRadiusOptions
    | BorderStyleOptions
    | BorderWidthOptions
    | FontFamilyOptions
    | FontKerningOptions
    | FontStretchOptions
    | FontStyleOptions
    | FontVariantOptions
    | FontWeightOptions
    | ColorOptions
    | TextDecorationColorOptions
    | TextDecorationLineOptions
);

export {
    CssOptions, CssOption
};