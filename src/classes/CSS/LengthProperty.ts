import CssProperty from "./CssProperty";
import LengthUnit from "../../enums/LengthUnit";
import Option from "../../interfaces/Option";

export interface LengthOptions extends Option {
  max?: number;
  min?: number;
  units?: LengthUnit[];
}

export const DEFAULT_LENGTH_MAX = 3;
export const DEFAULT_LENGTH_MIN = 1;
export const DEFAULT_LENGTH_UNITS = Object.values(LengthUnit);

export const DEFAULT_LENGTH_OPTIONS: LengthOptions = {
  max: DEFAULT_LENGTH_MAX,
  min: DEFAULT_LENGTH_MIN,
  units: DEFAULT_LENGTH_UNITS,
};

export default abstract class LengthProperty extends CssProperty {
  protected abstract units: LengthUnit[];
  protected abstract min: number;
  protected abstract max: number;

  public getRandomValue(): string {
    const length = this.getRandomNumber(this.min, this.max);
    const unit = this.getRandomArrayElement(this.units);
    return `${length}${unit}`;
  }
}
