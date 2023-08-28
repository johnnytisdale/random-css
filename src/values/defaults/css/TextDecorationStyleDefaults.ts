import DEFAULT_RANDOMIZABLE from "../RandomizableDefaults";
import TextDecorationStyleKeyword from "../../../enums/TextDecorationStyleKeyword";
import TextDecorationStyleConfig from "../../../interfaces/TextDecorationStyleConfig";

export const DEFAULT_TEXT_DECORATION_STYLE_STYLES = Object.values(
  TextDecorationStyleKeyword
);

export const DEFAULT_TEXT_DECORATION_STYLE_OPTIONS: TextDecorationStyleConfig =
  {
    ...DEFAULT_RANDOMIZABLE,
    keywords: DEFAULT_TEXT_DECORATION_STYLE_STYLES,
  };
