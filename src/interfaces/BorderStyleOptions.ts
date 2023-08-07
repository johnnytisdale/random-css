import BorderStyleKeyword from "../enums/BorderStyleKeyword";
import Option from "./Option";

export default interface BorderStyleOptions extends Option {
  borderStyles?: BorderStyleKeyword[];
}

export const DEFAULT_BORDER_STYLE_ENABLED = false;
export const DEFAULT_BORDER_STYLE_KEYWORDS = Object.values(BorderStyleKeyword);
export const DEFAULT_BORDER_STYLE_OPTIONS: BorderStyleOptions = {
  enabled: DEFAULT_BORDER_STYLE_ENABLED,
  borderStyles: DEFAULT_BORDER_STYLE_KEYWORDS,
};
