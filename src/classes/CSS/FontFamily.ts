import EFontFamily from "../../enums/EFontFamily";
import EFontFamilyGeneric from "../../enums/EFontFamilyGeneric";
import CssProperty from "./CssProperty";
import * as cssProperties from "../../json/cssProperties.json";

const json = cssProperties['font-family'];

export default class FontFamily extends CssProperty {

  protected acceptsColors = false;
  protected acceptsLengths = false;
  protected acceptsKeywords = true;
  protected acceptsPercentages = false;
  protected keywordGroups: Array<Array<string>>;
  protected separator = ', ';
  public name = json.camelCase;

  constructor() {
    super();
    this.keywordGroups = [
      Object.values(EFontFamily),
      Object.values(EFontFamilyGeneric),
    ];
  }

  protected getRandomKeywordValue(): string {
    const keywords: Array<string> = [
      `"${this.getRandomArrayElement(this.keywordGroups[0])}"`
    ];
    const numberOfKeywords = this.getRandomNumber(1, this.keywordLimit);
    if (numberOfKeywords === 2) {
      keywords.push(this.getRandomArrayElement(this.keywordGroups[1]));
    }
    return keywords.join(this.separator);
  }

}