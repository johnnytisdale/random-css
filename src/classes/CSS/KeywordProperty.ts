import CssProperty from "./CssProperty";
import Randomizable from "../Randomizable";
import KeywordOptions from "../../interfaces/KeywordOptions";

export default abstract class KeywordProperty extends CssProperty {
  protected abstract keywords: Array<string>;
  protected abstract defaultKeywords: Array<string>;
  protected keywordLimit = 1;

  protected setSpecificConfig(config: KeywordOptions) {
    this.keywords = config.keywords ?? this.defaultKeywords;
  }

  public getRandomValue(): string {
    const keywords: string[] = [];
    for (let i = 0; i < Randomizable.number(1, this.keywordLimit); i++) {
      keywords.push(Randomizable.array(this.keywords));
    }
    return keywords.join(this.separator);
  }
}
