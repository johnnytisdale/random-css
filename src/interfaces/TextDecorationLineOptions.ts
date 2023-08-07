import Option from "./Option";
import TextDecorationLineKeyword from "../enums/TextDecorationLineKeyword";

export default interface TextDecorationLineOptions extends Option {
  lines?: TextDecorationLineKeyword[];
}

export const DEFAULT_TEXT_DECORATION_LINE_ENABLED = false;
export const DEFAULT_TEXT_DECORATION_LINE_LINES = Object.values(
  TextDecorationLineKeyword
);

export const DEFAULT_TEXT_DECORATION_LINE_OPTIONS: TextDecorationLineOptions = {
  enabled: DEFAULT_TEXT_DECORATION_LINE_ENABLED,
  lines: DEFAULT_TEXT_DECORATION_LINE_LINES,
};
