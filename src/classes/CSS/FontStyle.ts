import CssProperty from "./CssProperty";
import * as cssProperties from "../../json/cssProperties.json";

const json = cssProperties['font-style'];

export default class FontStyle extends CssProperty {

  protected acceptsLengths = false;
  protected acceptsKeywords = true;
  public name = json.camelCase;

  protected keywords = json.values;

  protected getRandomKeywordValue(): string {
    let keyword = this.getRandomArrayElement(this.keywords);
    // TODO: Support oblique deg when unsafe === false
    if (this.unsafe && keyword == "oblique") {
      if (this.getRandomBoolean()) {
        const degrees = this.getRandomNumber(0, 90);
        const isNegative = degrees === 0
          ? false
          : this.getRandomBoolean();
        keyword = `${keyword} ${isNegative ? '-' : ''}${degrees}deg`;
      }
    }
    return keyword;
  }

}