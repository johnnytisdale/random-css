import ColorKeyword from "../enums/ColorKeyword";
import Options from "./Option";

export default interface ColorOptions extends Options {
  bMax?: number;
  bMin?: number;
  colorKeywords?: ColorKeyword[];
  gMax?: number;
  gMin?: number;
  rMax?: number;
  rMin?: number;
}
