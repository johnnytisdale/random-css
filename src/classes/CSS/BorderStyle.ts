import BorderStyleKeyword from "../../enums/BorderStyleKeyword";
import CssProperty from "../../enums/CssProperty";
import Option from "../../interfaces/Option";
import KeywordProperty from "./KeywordProperty";

export interface BorderStyleOptions extends Option {
  borderStyles?: BorderStyleKeyword[];
}

export const DEFAULT_BORDER_STYLE_ENABLED = false;
export const DEFAULT_BORDER_STYLE_KEYWORDS = Object.values(BorderStyleKeyword);
export const DEFAULT_BORDER_STYLE_OPTIONS: BorderStyleOptions = {
  enabled: DEFAULT_BORDER_STYLE_ENABLED,
  borderStyles: DEFAULT_BORDER_STYLE_KEYWORDS
};

export default class BorderStyle extends KeywordProperty {

  protected keywords: BorderStyleKeyword[];
  public name = CssProperty.BORDER_STYLE;

  constructor(options: BorderStyleOptions, unsafe: boolean) {
    super(unsafe);
    // TODO: Support 4 border styles when !unsafe
    if (unsafe) {
      this.keywordLimit = 4;
    }
    this.keywords = options.borderStyles ?? [...DEFAULT_BORDER_STYLE_KEYWORDS];
  }
}
