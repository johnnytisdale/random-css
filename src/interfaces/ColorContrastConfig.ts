import CssColorPropertyName from "../types/CssColorPropertyName";
import Style from "../types/Style";

export default interface ColorContrastConfig {
  primary?: boolean;
  secondaryColors?: Array<CssColorPropertyName>;
  setSecondaryStyle?: (style: Style) => void;
  style?: Style;
}
