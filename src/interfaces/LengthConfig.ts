import LengthUnit from "../enums/LengthUnit";
import Config from "./Config";

export default interface LengthConfig extends Config {
  max?: number;
  min?: number;
  units?: LengthUnit[];
}
