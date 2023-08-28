import DEFAULT_RANDOMIZABLE from "../RandomizableDefaults";
import TextDecorationLineKeyword from "../../../enums/TextDecorationLineKeyword";
import TextDecorationLineOptions from "../../../interfaces/TextDecorationLineOptions";

export const DEFAULT_TEXT_DECORATION_LINE_LINES = Object.values(
  TextDecorationLineKeyword
);

export const DEFAULT_TEXT_DECORATION_LINE_OPTIONS: TextDecorationLineOptions = {
  ...DEFAULT_RANDOMIZABLE,
  keywords: DEFAULT_TEXT_DECORATION_LINE_LINES,
};
