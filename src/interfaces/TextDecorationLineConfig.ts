import KeywordConfig from "./KeywordConfig";
import TextDecorationLineKeyword from "../enums/TextDecorationLineKeyword";

export default interface TextDecorationLineConfig extends KeywordConfig {
  keywords?: TextDecorationLineKeyword[];
}
