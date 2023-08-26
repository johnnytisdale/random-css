import CssProperty from "../../enums/CssPropertyName";
import { DEFAULT_TEXT_DECORATION_LINE_LINES } from "../../values/defaults/css/TextDecorationLineDefaults";
import KeywordProperty from "./KeywordProperty";
import TextDecorationLineKeyword from "../../enums/TextDecorationLineKeyword";
import TextDecorationLineOptions from "../../interfaces/TextDecorationLineOptions";

export default class TextDecorationLine extends KeywordProperty {
  protected keywords: TextDecorationLineKeyword[];
  public name = CssProperty.TEXT_DECORATION_LINE;

  constructor(options: TextDecorationLineOptions) {
    super(options);
    this.keywords = options.lines ?? [...DEFAULT_TEXT_DECORATION_LINE_LINES];
  }
}
