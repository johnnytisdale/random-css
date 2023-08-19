import CssProperty from "../../enums/CssPropertyName";
import { DEFAULT_FONT_WEIGHT_FONT_WEIGHTS } from "../../values/defaults/css/FontWeightDefaults";
import FontWeightOptions from "../../interfaces/FontWeightOptions";
import FontWeightValue from "../../enums/FontWeightValue";
import KeywordProperty from "./KeywordProperty";

export default class FontWeight extends KeywordProperty {
  protected keywords: FontWeightValue[];
  public name = CssProperty.FONT_WEIGHT;

  constructor(options: FontWeightOptions) {
    super();
    this.keywords = options.fontWeights ?? [
      ...DEFAULT_FONT_WEIGHT_FONT_WEIGHTS,
    ];
  }
}
