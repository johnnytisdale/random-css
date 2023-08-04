import Color from "../enums/ColorKeyword";
import Options from "./Option";

// TODO: Move this to Color.ts
export default interface ColorOptions extends Options {
  bMax?: number;
  bMin?: number;
  colorKeywords?: Color[];
  gMax?: number;
  gMin?: number;
  rMax?: number;
  rMin?: number;
}
