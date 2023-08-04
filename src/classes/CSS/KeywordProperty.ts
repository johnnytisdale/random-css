import CssProperty from "./CssProperty";

export default abstract class KeywordProperty extends CssProperty {

  protected acceptsLengths = false;
  protected acceptsKeywords = true;

  protected keywords: Array<string>;
  protected keywordLimit = 0;

  public getRandomValue(): string {
    const keywords: string[] = [];
    for (let i = 0; i < this.getRandomNumber(1, this.keywordLimit); i++) {
      keywords.push(this.getRandomArrayElement(this.keywords));
    }
    return keywords.join(' ');
  }
}