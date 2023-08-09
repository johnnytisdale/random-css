import CssProperty from "../enums/CssProperty";

type Style = {
  [value in CssProperty]?: string;
};

export default Style;
