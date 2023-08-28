import CssProperty from "../../enums/CssPropertyName";
import { DEFAULT_FONT_WEIGHT_FONT_WEIGHTS } from "../../values/defaults/css/FontWeightDefaults";
import FontWeightValue from "../../enums/FontWeightValue";
import KeywordProperty from "./KeywordProperty";

export default class FontWeight extends KeywordProperty {
  protected defaultKeywords = [...DEFAULT_FONT_WEIGHT_FONT_WEIGHTS];
  protected keywords: FontWeightValue[];
  public name = CssProperty.FONT_WEIGHT;
}
