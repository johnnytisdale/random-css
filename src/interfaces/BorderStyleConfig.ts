import BorderStyleKeyword from "../enums/BorderStyleKeyword";
import KeywordConfig from "./KeywordConfig";

export default interface BorderStyleConfig extends KeywordConfig {
  keywords?: BorderStyleKeyword[];
}
