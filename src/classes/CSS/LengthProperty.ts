import CssProperty from "./CssProperty";
import LengthUnit from "../../enums/LengthUnit";
import Randomizable from "../Randomizable";

export default abstract class LengthProperty extends CssProperty {
  protected abstract units: LengthUnit[];
  protected abstract min: number;
  protected abstract max: number;

  public getRandomValue(): string {
    const length = Randomizable.number(this.min, this.max);
    const unit = Randomizable.array(this.units);
    return `${length}${unit}`;
  }
}
