import FontStyleKeyword from "../enums/FontStyleKeyword";
import Option from "./Option";

export default interface FontStyleOptions extends Option {
  degrees?: boolean;
  degreesProbability?: number;
  fontStyles?: FontStyleKeyword[];
  maxDegrees?: number;
  minDegrees?: number;
}
