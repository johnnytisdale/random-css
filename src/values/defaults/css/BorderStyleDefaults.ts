import BorderStyleKeyword from "../../../enums/BorderStyleKeyword";
import BorderStyleConfig from "../../../interfaces/BorderStyleConfig";
import DEFAULT_RANDOMIZABLE from "../RandomizableDefaults";

export const DEFAULT_BORDER_STYLE_KEYWORDS = Object.values(BorderStyleKeyword);

export const DEFAULT_BORDER_STYLE_OPTIONS: BorderStyleConfig = {
  ...DEFAULT_RANDOMIZABLE,
  keywords: DEFAULT_BORDER_STYLE_KEYWORDS,
};
