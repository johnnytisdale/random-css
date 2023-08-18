import TextDecorationStyleKeyword from "../../../enums/TextDecorationStyleKeyword";
import TextDecorationStyleOptions from "../../../interfaces/TextDecorationStyleOptions";

export const DEFAULT_TEXT_DECORATION_STYLE_ENABLED = false;
export const DEFAULT_TEXT_DECORATION_STYLE_STYLES = Object.values(
  TextDecorationStyleKeyword
);

export const DEFAULT_TEXT_DECORATION_STYLE_OPTIONS: TextDecorationStyleOptions =
  {
    enabled: DEFAULT_TEXT_DECORATION_STYLE_ENABLED,
    styles: DEFAULT_TEXT_DECORATION_STYLE_STYLES,
  };
