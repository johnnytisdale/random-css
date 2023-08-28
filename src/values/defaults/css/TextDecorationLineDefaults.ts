import DEFAULT_RANDOMIZABLE from "../RandomizableDefaults";
import TextDecorationLineKeyword from "../../../enums/TextDecorationLineKeyword";
import TextDecorationLineConfig from "../../../interfaces/TextDecorationLineConfig";

export const DEFAULT_TEXT_DECORATION_LINE_LINES = Object.values(
  TextDecorationLineKeyword
);

export const DEFAULT_TEXT_DECORATION_LINE_OPTIONS: TextDecorationLineConfig = {
  ...DEFAULT_RANDOMIZABLE,
  keywords: DEFAULT_TEXT_DECORATION_LINE_LINES,
};
