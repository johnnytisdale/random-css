import CssProperty from "../../enums/CssProperty";
import TextDecorationLineKeyword from "../../enums/TextDecorationLineKeyword";
import Option from "../../interfaces/Option";
import KeywordProperty from "./KeywordProperty";

export interface TextDecorationLineOptions extends Option {
  lines?: TextDecorationLineKeyword[];
}

export const DEFAULT_TEXT_DECORATION_LINE_ENABLED = false;
export const DEFAULT_TEXT_DECORATION_LINE_LINES = Object.values(
  TextDecorationLineKeyword,
);

export const DEFAULT_TEXT_DECORATION_LINE_OPTIONS: TextDecorationLineOptions = {
  enabled: DEFAULT_TEXT_DECORATION_LINE_ENABLED,
  lines: DEFAULT_TEXT_DECORATION_LINE_LINES,
};

export default class TextDecorationLine extends KeywordProperty {
  protected keywords: TextDecorationLineKeyword[];
  public name = CssProperty.TEXT_DECORATION_LINE;

  constructor(options: TextDecorationLineOptions) {
    super();
    this.keywords = options.lines ?? [...DEFAULT_TEXT_DECORATION_LINE_LINES];
  }
}
