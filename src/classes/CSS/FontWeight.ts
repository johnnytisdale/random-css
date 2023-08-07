import CssProperty from "../../enums/CssProperty";
import FontWeightOptions, {
  DEFAULT_FONT_WEIGHT_FONT_WEIGHTS,
} from "../../interfaces/FontWeightOptions";
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
