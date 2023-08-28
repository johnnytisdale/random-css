import KeywordOptions from "./KeywordOptions";
import TextDecorationLineKeyword from "../enums/TextDecorationLineKeyword";

export default interface TextDecorationLineOptions extends KeywordOptions {
  keywords?: TextDecorationLineKeyword[];
}
