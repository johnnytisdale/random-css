import CssColorProperty from "../enums/CssColorProperty";
import CssColorPropertyName from "../types/CssColorPropertyName";
import Style from "../types/Style";

export interface ColorContrastPlugin {
  primary?: ColorContrastPrimary;
  secondary?: ColorContrastSecondary;
}

export interface ColorContrastPrimary {
  cssPropertyName: CssColorPropertyName;
  secondary: CssColorPropertyName | Array<CssColorPropertyName>;
  setSecondaryStyle: (style: Style) => void;
}

export type ColorContrastSecondary = {
  [key in CssColorProperty]?: ColorContrastSecondaryInput;
};

export type ColorContrastSecondaryInput = {
  cssPropertyName: CssColorPropertyName;
  style: Style;
};
