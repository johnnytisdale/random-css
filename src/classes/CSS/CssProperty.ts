import LengthUnit from "../../enums/LengthUnit";
import ValueType from "../../enums/ValueType";
import Randomizable from "../Randomizable";

export default abstract class CssProperty extends Randomizable {

  constructor(protected unsafe = false) {
    super();
  }

  protected abstract acceptsLengths: boolean;

  protected separator = " ";

  protected lengthUnit: LengthUnit = LengthUnit.PX;

  protected EValueTypes: Array<ValueType>;

  protected minLength = 0;
  protected maxLength = 3;

  protected getRandomLengthValue(): string {
    return `${this.getRandomNumber(this.minLength, this.maxLength)}${this.lengthUnit}`;
  }

  public getRandomValue(): string {
    const getValueFunctions: Array<() => string> = [];
    if (this.acceptsLengths) {
      getValueFunctions.push(this.getRandomLengthValue.bind(this));
    }
    const index = getValueFunctions.length === 1
      ? 0
      : this.getRandomNumber(0, getValueFunctions.length - 1);
    return getValueFunctions[index]();
  }
}
