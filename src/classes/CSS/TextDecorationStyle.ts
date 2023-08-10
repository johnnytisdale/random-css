import CssProperty from "../../enums/CssPropertyName";
import KeywordProperty from "./KeywordProperty";
import TextDecorationStyleKeyword from "../../enums/TextDecorationStyleKeyword";
import TextDecorationStyleOptions, {
  DEFAULT_TEXT_DECORATION_STYLE_ENABLED,
  DEFAULT_TEXT_DECORATION_STYLE_STYLES,
} from "../../interfaces/TextDecorationStyleOptions";

export const DEFAULT_TEXT_DECORATION_STYLE_OPTIONS: TextDecorationStyleOptions =
  {
    enabled: DEFAULT_TEXT_DECORATION_STYLE_ENABLED,
    styles: DEFAULT_TEXT_DECORATION_STYLE_STYLES,
  };

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
