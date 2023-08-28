import BorderStyleKeyword from "../../../enums/BorderStyleKeyword";
import BorderStyleOptions from "../../../interfaces/BorderStyleOptions";
import DEFAULT_RANDOMIZABLE from "../RandomizableDefaults";

export const DEFAULT_BORDER_STYLE_KEYWORDS = Object.values(BorderStyleKeyword);

export const DEFAULT_BORDER_STYLE_OPTIONS: BorderStyleOptions = {
  ...DEFAULT_RANDOMIZABLE,
  keywords: DEFAULT_BORDER_STYLE_KEYWORDS,
};
