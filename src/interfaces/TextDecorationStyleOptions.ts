import KeywordOptions from "./KeywordOptions";
import TextDecorationStyleKeyword from "../enums/TextDecorationStyleKeyword";

export default interface TextDecorationStyleOptions extends KeywordOptions {
  keywords?: TextDecorationStyleKeyword[];
}
