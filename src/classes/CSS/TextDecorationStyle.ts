import CssProperty from "../../enums/CssProperty";
import TextDecorationStyleKeyword from "../../enums/TextDecorationStyleKeyword";
import Option from "../../interfaces/Option";
import KeywordProperty from "./KeywordProperty";

export interface TextDecorationStyleOptions extends Option {
  styles?: TextDecorationStyleKeyword[];
}

export const DEFAULT_TEXT_DECORATION_STYLE_ENABLED = false;
export const DEFAULT_TEXT_DECORATION_STYLE_STYLES = Object.values(
  TextDecorationStyleKeyword
);

export const DEFAULT_TEXT_DECORATION_STYLE_OPTIONS: TextDecorationStyleOptions = {
  enabled: DEFAULT_TEXT_DECORATION_STYLE_ENABLED,
  styles: DEFAULT_TEXT_DECORATION_STYLE_STYLES
};

export default class TextDecorationStyle extends KeywordProperty {

  protected keywords;
  public name = CssProperty.TEXT_DECORATION_STYLE;


  constructor(options: TextDecorationStyleOptions) {
    super();
    this.keywords = options?.styles ??
      [ ...DEFAULT_TEXT_DECORATION_STYLE_STYLES ];
  }
}
