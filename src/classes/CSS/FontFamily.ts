import ECssProperty from "../../enums/CssProperty";
import FontFamilyName from "../../enums/FontFamilyName";
import FontGenericName from "../../enums/FontGenericName";
import Option from "../../interfaces/Option";
import CssProperty from "./CssProperty";

export interface FontFamilyOptions extends Option {
  fontFamilyNames?: FontFamilyName[];
  fontGenericNames?: FontGenericName[];
}

export const DEFAULT_FONT_FAMILY_ENABLED = true;
export const DEFAULT_FONT_FAMILY_FONT_FAMILY_NAMES = Object.values(
  FontFamilyName
);
export const DEFAULT_FONT_FAMILY_FONT_GENERIC_NAMES = Object.values(
  FontGenericName
);

export const DEFAULT_FONT_FAMILY: FontFamilyOptions = {
  enabled: DEFAULT_FONT_FAMILY_ENABLED,
  fontFamilyNames: DEFAULT_FONT_FAMILY_FONT_FAMILY_NAMES,
  fontGenericNames: DEFAULT_FONT_FAMILY_FONT_GENERIC_NAMES
}

export default class FontFamily extends CssProperty {

  private fontFamilyNames: FontFamilyName[];
  private fontGenericNames: FontGenericName[];
  protected acceptsLengths = false;
  protected separator = ", ";
  public name = ECssProperty.FONT_FAMILY;

  constructor(options: FontFamilyOptions) {
    super();
    this.fontFamilyNames = options.fontFamilyNames ??
      [ ...DEFAULT_FONT_FAMILY_FONT_FAMILY_NAMES ];
    this.fontGenericNames = options.fontGenericNames ??
      [ ...DEFAULT_FONT_FAMILY_FONT_GENERIC_NAMES ];
  }

  public getRandomValue(): string {
    const keywords: Array<string> = [
      this.getRandomArrayElement(this.fontFamilyNames)
    ];
    if (this.getRandomBoolean()) {
      keywords.push(this.getRandomArrayElement(this.fontGenericNames));
    }
    return keywords.join(this.separator);
  }

}