import ColorKeyword from "../enums/ColorKeyword";
import Option from "./Option";

export default interface ColorOptions extends Option {
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
