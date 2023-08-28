import ColorKeyword from "../enums/ColorKeyword";
import Config from "./Config";

export default interface ColorConfig extends Config {
  alpha?: boolean;
  aMax?: number;
  aMin?: number;
  bMax?: number;
  bMin?: number;
  colorKeywords?: ColorKeyword[];
  gMax?: number;
  gMin?: number;
  rMax?: number;
  rMin?: number;
}
