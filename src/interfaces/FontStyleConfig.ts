import FontStyleKeyword from "../enums/FontStyleKeyword";
import Config from "./Config";

export default interface FontStyleConfig extends Config {
  degrees?: boolean;
  degreesProbability?: number;
  fontStyles?: FontStyleKeyword[];
  maxDegrees?: number;
  minDegrees?: number;
}
