import CssProperty from "./CssProperty";
import {
  DEFAULT_LENGTH_MAX,
  DEFAULT_LENGTH_MIN,
  DEFAULT_LENGTH_UNITS,
} from "../../values/defaults/css/LengthDefaults";
import LengthOptions from "../../interfaces/LengthOptions";
import LengthUnit from "../../enums/LengthUnit";
import Randomizable from "../Randomizable";

export default abstract class LengthProperty extends CssProperty {
  protected units: LengthUnit[];
  protected min: number;
  protected max: number;

  protected setSpecificConfig(config: LengthOptions) {
    this.max = config.max ?? DEFAULT_LENGTH_MAX;
    this.min = config.min ?? DEFAULT_LENGTH_MIN;
    this.units = config.units ?? [...DEFAULT_LENGTH_UNITS];
  }

  public getRandomValue(): string {
    const length = Randomizable.number(this.min, this.max);
    const unit = Randomizable.array(this.units);
    return `${length}${unit}`;
  }
}
