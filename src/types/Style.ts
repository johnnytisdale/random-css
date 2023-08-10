import CssPropertyName from "../enums/CssPropertyName";

type Style = {
  [value in CssPropertyName]?: string;
};

export default Style;
