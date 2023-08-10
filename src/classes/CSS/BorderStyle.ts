import BorderStyleKeyword from "../../enums/BorderStyleKeyword";
import BorderStyleOptions, {
  DEFAULT_BORDER_STYLE_KEYWORDS,
} from "../../interfaces/BorderStyleOptions";
import CssProperty from "../../enums/CssPropertyName";
import KeywordProperty from "./KeywordProperty";

export default class BorderStyle extends KeywordProperty {
  protected keywords: BorderStyleKeyword[];
  public name = CssProperty.BORDER_STYLE;

  constructor(options: BorderStyleOptions, external: boolean) {
    super(external);
    // TODO: Support 4 border styles when external === true
    if (!external) {
      this.keywordLimit = 4;
    }
    this.keywords = options.borderStyles ?? [...DEFAULT_BORDER_STYLE_KEYWORDS];
  }
}
