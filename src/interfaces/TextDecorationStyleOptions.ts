import Option from "./Option";
import TextDecorationStyleKeyword from "../enums/TextDecorationStyleKeyword";

export default interface TextDecorationStyleOptions extends Option {
  styles?: TextDecorationStyleKeyword[];
}
