import AnimationOptions from "./AnimationOptions";
import BorderRadiusOptions from "./BorderRadiusOptions";
import BorderStyleOptions from "./BorderStyleOptions";
import ColorOptions from "./ColorOptions";
import FontFamilyOptions from "./FontFamilyOptions";
import FontStyleOptions from "./FontStyleOptions";
import FontWeightOptions from "./FontWeightOptions";
import LengthOptions from "./LengthOptions";
import TextDecorationLineOptions from "./TextDecorationLineOptions";
import TextDecorationStyleOptions from "./TextDecorationStyleOptions";

export default interface StyleConfig {
  animation?: AnimationOptions;
  backgroundColor?: ColorOptions;
  borderColor?: ColorOptions;
  borderRadius?: BorderRadiusOptions;
  borderStyle?: BorderStyleOptions;
  borderWidth?: LengthOptions;
  color?: ColorOptions;
  fontFamily?: FontFamilyOptions;
  fontStyle?: FontStyleOptions;
  fontWeight?: FontWeightOptions;
  textDecorationColor?: ColorOptions;
  textDecorationLine?: TextDecorationLineOptions;
  textDecorationStyle?: TextDecorationStyleOptions;
}
