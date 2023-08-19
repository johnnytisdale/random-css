import Option from "./Option";
import TextDecorationLineKeyword from "../enums/TextDecorationLineKeyword";

export default interface TextDecorationLineOptions extends Option {
  lines?: TextDecorationLineKeyword[];
}
