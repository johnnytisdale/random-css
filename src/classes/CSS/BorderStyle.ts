import BorderStyleKeyword from "../../enums/BorderStyleKeyword";
import BorderStyleOptions from "../../interfaces/BorderStyleOptions";
import CssProperty from "../../enums/CssPropertyName";
import { DEFAULT_BORDER_STYLE_KEYWORDS } from "../../values/defaults/css/BorderStyleDefaults";
import KeywordProperty from "./KeywordProperty";

export default class BorderStyle extends KeywordProperty {
  protected defaultKeywords = [...DEFAULT_BORDER_STYLE_KEYWORDS];
  protected keywords: BorderStyleKeyword[];
  public name = CssProperty.BORDER_STYLE;

  protected setSpecificConfig(config: BorderStyleOptions) {
    if (!this.external) {
      this.keywordLimit = 4;
    }
    super.setSpecificConfig(config);
  }
}
