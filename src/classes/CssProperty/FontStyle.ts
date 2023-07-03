import CssProperty from "./CssProperty";

export default class FontStyle extends CssProperty {

  protected acceptsColors = false;
  protected acceptsLengths = false;
  protected acceptsKeywords = true;
  protected acceptsPercentages = false;
  public name: string = "fontStyle";

  constructor() {
    super();
  }

  protected keywords: string[] = [
    "italic",
    "oblique",
    "normal",
  ];

  protected getRandomKeywordValue(): string {
    let keyword = this.getRandomArrayElement(this.keywords);
    if (keyword == "oblique") {
      const hasDegrees = this.getRandomBoolean();
      if (hasDegrees) {
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