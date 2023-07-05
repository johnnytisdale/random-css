import EColor from "../../enums/EColor";
import ELengthUnit from "../../enums/ELengthUnit";
import EValueType from "../../enums/EValueType";
import Randomizable from "../Randomizable";

export default abstract class CssProperty extends Randomizable {

  constructor(unsafe = false) {
    super();
    this.unsafe = unsafe;
  }

  private unsafe: boolean;

  protected abstract acceptsColors: boolean;
  protected abstract acceptsKeywords: boolean;
  protected abstract acceptsLengths: boolean;
  protected abstract acceptsPercentages: boolean;

  protected keywords: Array<string>;
  protected keywordLimit = 0;
  protected separator = " ";

  protected lengthUnit: ELengthUnit = ELengthUnit.PX;

  protected EValueTypes: Array<EValueType>;

  protected rMin = 0;
  protected rMax = 255;
  protected gMin = 0;
  protected gMax = 255;
  protected bMin = 0;
  protected bMax = 255;

  protected minLength = 0;
  protected maxLength = 3;

  private getRandomColorValue(): string {
    if (this.unsafe) {
      const red = this.getRandomNumber(this.rMin, this.rMax);
      const green = this.getRandomNumber(this.gMin, this.gMax);
      const blue = this.getRandomNumber(this.bMin, this.bMax);
      return `rgb(${red}, ${green}, ${blue})`;
    }
    return this.getRandomArrayElement(Object.values(EColor));
  }

  protected getRandomKeywordValue(): string {
    console.log(`Getting random ${this.name} value...`);
    console.log(`Limit is ${String(this.keywordLimit)}...`);
    if (this.keywordLimit === 1) {
      return this.getRandomArrayElement(Object.values(this.keywords));
    }
    const limit = this.keywordLimit === 0
      ? this.keywords.length
      : this.keywordLimit;
    const numberOfKeywords = this.getRandomNumber(1, limit);
    if (numberOfKeywords === limit) {
      return this.keywords.join(this.separator);
    }
    let availableKeywords = this.keywords.map(keyword => keyword);
    const keywords: Array<string> = [];
    for (let i = 0; i < numberOfKeywords; i++) {
      const index = this.getRandomNumber(0, availableKeywords.length - 1);
      keywords.push(availableKeywords[index]);
      availableKeywords = availableKeywords.splice(index);
    }
    return keywords.join(this.separator);
  }

  protected getRandomLengthValue(): string {
    return `${this.getRandomNumber(this.minLength, this.maxLength)}${this.lengthUnit}`;
  }

  private getRandomPercentageValue(min = 0, max = 100): string {
    return `${this.getRandomNumber(min, max)}%`;
  }

  public getRandomValue(): string {
    const getValueFunctions: Array<() => string> = [];
    if (this.acceptsColors) {
      getValueFunctions.push(this.getRandomColorValue.bind(this));
    }
    if (this.acceptsKeywords) {
      getValueFunctions.push(this.getRandomKeywordValue.bind(this));
    }
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