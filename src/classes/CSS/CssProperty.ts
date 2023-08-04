import LengthUnit from "../../enums/LengthUnit";
import ValueType from "../../enums/ValueType";
import Randomizable from "../Randomizable";

export default abstract class CssProperty extends Randomizable {

  constructor(protected unsafe = false) {
    super();
  }

  protected abstract acceptsLengths: boolean;
  protected abstract acceptsPercentages: boolean;

  protected separator = " ";

  protected lengthUnit: LengthUnit = LengthUnit.PX;

  protected EValueTypes: Array<ValueType>;

  protected minLength = 0;
  protected maxLength = 3;

  protected getRandomLengthValue(): string {
    return `${this.getRandomNumber(this.minLength, this.maxLength)}${this.lengthUnit}`;
  }

  private getRandomPercentageValue(min = 0, max = 100): string {
    return `${this.getRandomNumber(min, max)}%`;
  }

  public getRandomValue(): string {
    const getValueFunctions: Array<() => string> = [];
    if (this.acceptsLengths) {
      getValueFunctions.push(this.getRandomLengthValue.bind(this));
    }
    if (this.acceptsPercentages) {
      getValueFunctions.push(this.getRandomPercentageValue.bind(this));
    }
    const index = getValueFunctions.length === 1
      ? 0
      : this.getRandomNumber(0, getValueFunctions.length - 1);
    return getValueFunctions[index]();
  }
}