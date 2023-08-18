import CssProperty from "../../enums/CssPropertyName";
import { DEFAULT_TEXT_DECORATION_STYLE_STYLES } from "../../values/defaults/css/TextDecorationStyleDefaults";
import KeywordProperty from "./KeywordProperty";
import TextDecorationStyleKeyword from "../../enums/TextDecorationStyleKeyword";
import TextDecorationStyleOptions from "../../interfaces/TextDecorationStyleOptions";

export default class TextDecorationStyle extends KeywordProperty {
  protected keywords: TextDecorationStyleKeyword[];
  public name = CssProperty.TEXT_DECORATION_STYLE;

  constructor(options: TextDecorationStyleOptions) {
    super();
    this.keywords = options?.styles ?? [
      ...DEFAULT_TEXT_DECORATION_STYLE_STYLES,
    ];
  }
}
