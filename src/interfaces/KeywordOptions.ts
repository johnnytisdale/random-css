import Option from "./Option";

export default interface KeywordOptions<T> extends Option {
  keywords?: T[];
}