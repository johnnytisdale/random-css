import { BorderRadiusValue } from "../../../Randomizables/Css/BorderRadius/BorderRadiusOptions";
import { BorderStyleValue } from "../../../Randomizables/Css/BorderStyle/BorderStyleOptions";
import { FontFamilyValue } from "../../../Randomizables/Css/FontFamily/FontFamilyOptions";
import { FontKerningValue } from "../../../Randomizables/Css/FontKerning/FontKerningOptions";
import { FontStretchValue } from "../../../Randomizables/Css/FontStretch/FontStretchOptions";
import { FontStyleValue } from "../../../Randomizables/Css/FontStyle/FontStyleOptions";
import { FontVariantValue } from "../../../Randomizables/Css/FontVariant/FontVariantOptions";
import { FontWeightValue } from "../../../Randomizables/Css/FontWeight/FontWeightOptions";
import { TextDecorationLineValue } from "../../../Randomizables/Css/TextDecorationLine/TextDecorationLineOptions";

type ArrayPropertyOption = (
    BorderRadiusValue |
    BorderStyleValue |
    FontFamilyValue  |
    FontKerningValue |
    FontStretchValue |
    FontStyleValue    |
    FontVariantValue |
    FontWeightValue  |
    TextDecorationLineValue
);

export default ArrayPropertyOption;