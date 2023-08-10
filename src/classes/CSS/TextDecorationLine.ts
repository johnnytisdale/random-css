import CssProperty from "../../enums/CssPropertyName";
import TextDecorationLineKeyword from "../../enums/TextDecorationLineKeyword";
import TextDecorationLineOptions, {
  DEFAULT_TEXT_DECORATION_LINE_LINES,
} from "../../interfaces/TextDecorationLineOptions";
import KeywordProperty from "./KeywordProperty";

export default class TextDecorationLine extends KeywordProperty {
  protected keywords: TextDecorationLineKeyword[];
  public name = CssProperty.TEXT_DECORATION_LINE;

  constructor(options: TextDecorationLineOptions) {
    super();
    this.keywords = options.lines ?? [...DEFAULT_TEXT_DECORATION_LINE_LINES];
  }
}
