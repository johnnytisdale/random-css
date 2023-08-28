import BorderStyleKeyword from "../enums/BorderStyleKeyword";
import KeywordOptions from "./KeywordOptions";

export default interface BorderStyleOptions extends KeywordOptions {
  keywords?: BorderStyleKeyword[];
}
