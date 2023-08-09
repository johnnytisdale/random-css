import CssProperty from "./CssProperty";
import LengthUnit from "../../enums/LengthUnit";
import Randomizable from "../Randomizable";

export default abstract class LengthProperty extends CssProperty {
  protected abstract units: LengthUnit[];
  protected abstract min: number;
  protected abstract max: number;

  public getRandomValue(): string {
    const length = Randomizable.getRandomNumber(this.min, this.max);
    const unit = Randomizable.getRandomArrayElement(this.units);
    return `${length}${unit}`;
  }
}
