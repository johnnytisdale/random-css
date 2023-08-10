import CssPropertyName from "../enums/CssPropertyName";

type CssColorProperty = Extract<
  CssProperty,
  | CssProperty.BACKGROUND_COLOR
  | CssProperty.BORDER_COLOR
  | CssProperty.COLOR
  | CssProperty.TEXT_DECORATION_COLOR
>;

export default CssColorProperty;
