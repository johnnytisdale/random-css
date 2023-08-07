import CssProperty from "./CssProperty";
import LengthUnit from "../../enums/LengthUnit";

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
