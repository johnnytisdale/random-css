import FontFamilyName from "../../enums/FontFamilyName";
import FontGenericName from "../../enums/FontGenericName";
import CssProperty from "./CssProperty";
import * as cssProperties from "../../json/cssProperties.json";

const json = cssProperties['font-family'];

export default class FontFamily extends CssProperty {

  protected acceptsLengths = false;
  protected acceptsKeywords = true;
  protected keywordGroups: Array<Array<string>>;
  protected separator = ', ';
  public name = json.camelCase;

  constructor() {
    super();
    this.keywordGroups = [
      Object.values(FontFamilyName),
      Object.values(FontGenericName),
    ];
  }

  protected getRandomKeywordValue(): string {
    const keywords: Array<string> = [
      this.getRandomArrayElement(this.keywordGroups[0])
    ];
    if (this.getRandomBoolean()) {
      keywords.push(this.getRandomArrayElement(this.keywordGroups[1]));
    }
    return keywords.join(this.separator);
  }

}