import CssPropertyName from "../enums/CssPropertyName";

type CssColorProperty = Extract<
  CssPropertyName,
  | CssPropertyName.BACKGROUND_COLOR
  | CssPropertyName.BORDER_COLOR
  | CssPropertyName.COLOR
  | CssPropertyName.TEXT_DECORATION_COLOR
>;

export default CssColorProperty;
