import CssProperty from "../../enums/CssPropertyName";
import { DEFAULT_TEXT_DECORATION_STYLE_STYLES } from "../../values/defaults/css/TextDecorationStyleDefaults";
import KeywordProperty from "./KeywordProperty";
import TextDecorationStyleKeyword from "../../enums/TextDecorationStyleKeyword";

export default class TextDecorationStyle extends KeywordProperty {
  protected defaultKeywords = [...DEFAULT_TEXT_DECORATION_STYLE_STYLES];
  protected keywords: TextDecorationStyleKeyword[];
  public name = CssProperty.TEXT_DECORATION_STYLE;
}
