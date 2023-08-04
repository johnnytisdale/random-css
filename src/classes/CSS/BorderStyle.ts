import BorderStyleKeyword from "../../enums/BorderStyleKeyword";
import CssProperty from "../../enums/CssProperty";
import KeywordOptions from "../../interfaces/KeywordOptions";
import KeywordProperty from "./KeywordProperty";

export const DEFAULT_BORDER_STYLE_ENABLED = false;
export const DEFAULT_BORDER_STYLE_KEYWORDS = Object.values(BorderStyleKeyword);
export const DEFAULT_BORDER_STYLE = {
  enabled: DEFAULT_BORDER_STYLE_ENABLED,
  keywords: DEFAULT_BORDER_STYLE_KEYWORDS
};

export default class BorderStyle extends KeywordProperty {

  protected keywordLimit = this.unsafe ? 4 : 1;
  public name = CssProperty.BORDER_STYLE;

  constructor(options: KeywordOptions<BorderStyleKeyword>, unsafe: boolean) {
    super(unsafe);
    this.keywords = options.keywords ?? [ ...DEFAULT_BORDER_STYLE_KEYWORDS ];
  }
}