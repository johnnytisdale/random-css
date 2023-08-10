import BorderStyleKeyword from "../../enums/BorderStyleKeyword";
import BorderStyleOptions, {
  DEFAULT_BORDER_STYLE_KEYWORDS,
} from "../../interfaces/BorderStyleOptions";
import CssProperty from "../../enums/CssPropertyName";
import KeywordProperty from "./KeywordProperty";

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
