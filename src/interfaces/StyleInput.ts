import CssPropertyName from "../enums/CssPropertyName";
import StyleConfig from "./StyleConfig";

type StyleInput =
  | StyleConfig
  | CssPropertyName
  | Array<StyleConfig | CssPropertyName>;

export default StyleInput;
