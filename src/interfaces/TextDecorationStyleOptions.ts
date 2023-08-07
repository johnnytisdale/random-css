import Option from "./Option";
import TextDecorationStyleKeyword from "../enums/TextDecorationStyleKeyword";

export default interface TextDecorationStyleOptions extends Option {
  styles?: TextDecorationStyleKeyword[];
}

export const DEFAULT_TEXT_DECORATION_STYLE_ENABLED = false;
export const DEFAULT_TEXT_DECORATION_STYLE_STYLES = Object.values(
  TextDecorationStyleKeyword
);
