import CssProperty from "./CssProperty";
import Randomizable from "../Randomizable";

export default abstract class KeywordProperty extends CssProperty {
  protected abstract keywords: string[];
  protected keywordLimit = 1;

  public getRandomValue(): string {
    const keywords: string[] = [];
    for (let i = 0; i < Randomizable.number(1, this.keywordLimit); i++) {
      keywords.push(Randomizable.array(this.keywords));
    }
    return keywords.join(" ");
  }
}
