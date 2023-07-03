import EFontFamily from "../../enums/EFontFamily";
import EFontFamilyGeneric from "../../enums/EFontFamilyGeneric";
import CssProperty from "./CssProperty";

export default class FontFamily extends CssProperty {

  protected acceptsColors = false;
  protected acceptsLengths = false;
  protected acceptsKeywords = true;
  protected acceptsPercentages = false;
  protected keywordGroups: Array<Array<string>>;
  protected keywordLimit: number = 2;
  protected separator: string = ', ';
  public name: string = "fontFamily";

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