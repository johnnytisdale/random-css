import CssProperty from "../../enums/CssPropertyName";
import { DEFAULT_TEXT_DECORATION_LINE_LINES } from "../../values/defaults/css/TextDecorationLineDefaults";
import KeywordProperty from "./KeywordProperty";
import TextDecorationLineKeyword from "../../enums/TextDecorationLineKeyword";

export default class TextDecorationLine extends KeywordProperty {
  protected defaultKeywords = [...DEFAULT_TEXT_DECORATION_LINE_LINES];
  protected keywords: TextDecorationLineKeyword[];
  public name = CssProperty.TEXT_DECORATION_LINE;
}
