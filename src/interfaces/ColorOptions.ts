import Color from "../enums/ColorKeyword";
import Option from "./Option";

export default interface ColorOptions extends Option {
  bMax?: number;
  bMin?: number;
  colorKeywords?: Color[];
  gMax?: number;
  gMin?: number;
  rMax?: number;
  rMin?: number;
}