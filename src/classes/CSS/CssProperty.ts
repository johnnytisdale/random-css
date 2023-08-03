import LengthUnit from "../../enums/LengthUnit";
import ValueType from "../../enums/ValueType";
import Randomizable from "../Randomizable";

export default abstract class CssProperty extends Randomizable {

  constructor(protected unsafe = false) {
    super();
  }

  protected abstract acceptsKeywords: boolean;
  protected abstract acceptsLengths: boolean;
  protected abstract acceptsPercentages: boolean;

  protected keywords: Array<string>;
  // NOTE: Moving away from using keywordLimit. Instead of programmatically
  // combining keywords, we are just including all combinations in the keywords
  // array, which comes from cssProperties.json
  protected keywordLimit = 0;
  protected separator = " ";

  protected lengthUnit: LengthUnit = LengthUnit.PX;

  protected EValueTypes: Array<ValueType>;

  protected minLength = 0;
  protected maxLength = 3;

  protected getRandomKeywordValue(): string {
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