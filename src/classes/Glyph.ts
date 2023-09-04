import GlyphConfig from "../interfaces/GlyphConfig";
import GlyphType from "../enums/GlyphType";
import LeetGlyphs from "../values/enums/LeetGlyphs";
import Letter from "../enums/Letter";
import MiscellaneousRandomizableName from "../enums/MiscellaneousRandomizableName";
import Randomizable from "./Randomizable";
import UnicodeGlyphs from "../values/enums/UnicodeGlyphs";

export default class Glyph extends Randomizable {
  private glyphs: Array<string>;
  private lower: Letter;
  private specifications: Partial<Record<GlyphType, Array<string>>> = {};
  public name = MiscellaneousRandomizableName.GLYPH;

  constructor(
    protected character: string,
    protected setValue: (value: string) => void
  ) {
    super();
    const lowercase = character.toLowerCase();
    if (lowercase.match(/[a-z]/g)) {
      this.lower = lowercase as Letter;
    }
  }

  private getLeetValues(): Array<string> {
    return this.specifications?.leet ?? LeetGlyphs[this.lower];
  }

  // TODO: support "Force case" (only lowercase or only uppercase)
  private getUnicodeValues(): Array<string> {
    return (this.specifications?.unicode ?? UnicodeGlyphs[this.lower]).map(
      (unicode) => Glyph.fromUnicode(unicode)
    );
  }

  protected resetValue() {
    this.setValue(this.character);
  }

  protected setSpecificConfig(config: GlyphConfig): void {
    if (!this.lower) {
      this.enabled = false;
      return;
    }
    this.glyphs = [this.character];
    if (!config?.leet?.enabled && !config?.unicode?.enabled) {
      return;
    }
    if (config?.leet?.enabled) {
      this.specifications.leet = config?.leet?.glyphs?.[this.lower];
      this.glyphs.push(...this.getLeetValues());
    }
    if (config?.unicode?.enabled) {
      this.specifications.unicode = config?.unicode?.glyphs?.[this.lower];
      this.glyphs.push(...this.getUnicodeValues());
    }
  }

  public getRandomValue(): string {
    return Randomizable.array(this.glyphs);
  }

  public static fromUnicode(unicode: string) {
    return String.fromCodePoint(parseInt(unicode, 16));
  }
}
