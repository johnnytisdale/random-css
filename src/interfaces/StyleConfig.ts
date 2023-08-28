import AnimationConfig from "./AnimationConfig";
import BorderRadiusConfig from "./BorderRadiusConfig";
import BorderStyleConfig from "./BorderStyleConfig";
import ColorConfig from "./ColorConfig";
import FontFamilyConfig from "./FontFamilyConfig";
import FontStyleConfig from "./FontStyleConfig";
import FontWeightConfig from "./FontWeightConfig";
import LengthConfig from "./LengthConfig";
import TextDecorationLineConfig from "./TextDecorationLineConfig";
import TextDecorationStyleConfig from "./TextDecorationStyleConfig";

export default interface StyleConfig {
  animation?: AnimationConfig;
  backgroundColor?: ColorConfig;
  borderColor?: ColorConfig;
  borderRadius?: BorderRadiusConfig;
  borderStyle?: BorderStyleConfig;
  borderWidth?: LengthConfig;
  color?: ColorConfig;
  fontFamily?: FontFamilyConfig;
  fontStyle?: FontStyleConfig;
  fontWeight?: FontWeightConfig;
  textDecorationColor?: ColorConfig;
  textDecorationLine?: TextDecorationLineConfig;
  textDecorationStyle?: TextDecorationStyleConfig;
}
