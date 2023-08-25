import DEFAULT_RANDOMIZABLE from "../RandomizableDefaults";
import TextDecorationStyleKeyword from "../../../enums/TextDecorationStyleKeyword";
import TextDecorationStyleOptions from "../../../interfaces/TextDecorationStyleOptions";

export const DEFAULT_TEXT_DECORATION_STYLE_STYLES = Object.values(
  TextDecorationStyleKeyword
);

export const DEFAULT_TEXT_DECORATION_STYLE_OPTIONS: TextDecorationStyleOptions =
  {
    ...DEFAULT_RANDOMIZABLE,
    styles: DEFAULT_TEXT_DECORATION_STYLE_STYLES,
  };
