import LengthUnit from "../enums/LengthUnit";
import Option from "./Option";

export default interface LengthOptions extends Option {
  max?: number;
  min?: number;
  units?: LengthUnit[];
}
