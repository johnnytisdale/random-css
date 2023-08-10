import CssPropertyName from "../enums/CssPropertyName";

type Style = {
  [value in CssProperty]?: string;
};

export default Style;
