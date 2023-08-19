import BorderStyleKeyword from "../enums/BorderStyleKeyword";
import Option from "./Option";

export default interface BorderStyleOptions extends Option {
  borderStyles?: BorderStyleKeyword[];
}
