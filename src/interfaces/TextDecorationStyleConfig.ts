import KeywordConfig from "./KeywordConfig";
import TextDecorationStyleKeyword from "../enums/TextDecorationStyleKeyword";

export default interface TextDecorationStyleConfig extends KeywordConfig {
  keywords?: TextDecorationStyleKeyword[];
}
