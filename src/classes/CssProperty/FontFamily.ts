import EFontFamily from "../../enums/EFontFamily";
import EFontFamilyGeneric from "../../enums/EFontFamilyGeneric";
import CssProperty from "./CssProperty";

export default class FontFamily extends CssProperty {

  protected acceptsColors = false;
  protected acceptsLengths = false;
  protected acceptsKeywords = true;
  protected acceptsPercentages = false;
  protected keywordLimit: number = 1;
  public name: string = "fontFamily";

  constructor() {
    super();
    this.keywords = [
      ...Object.values(EFontFamily),
      ...Object.values(EFontFamilyGeneric),
    ];
  }

}