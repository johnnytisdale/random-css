import CssProperty from "../../enums/CssProperty";
import FontWeightValue from "../../enums/FontWeightValue";
import Option from "../../interfaces/Option";
import KeywordProperty from "./KeywordProperty";

export interface FontWeightOptions extends Option {
  fontWeights?: FontWeightValue[];
}

export const DEFAULT_FONT_WEIGHT_ENABLED = false;
export const DEFAULT_FONT_WEIGHT_FONT_WEIGHTS = Object.values(FontWeightValue);

export const DEFAULT_FONT_WEIGHT_OPTIONS: FontWeightOptions = {
  enabled: DEFAULT_FONT_WEIGHT_ENABLED,
  fontWeights: DEFAULT_FONT_WEIGHT_FONT_WEIGHTS
};

export default class FontWeight extends KeywordProperty {

  protected keywords: string[];
  public name = CssProperty.FONT_WEIGHT;

  constructor(options: FontWeightOptions) {
    super();
    this.keywords = options.fontWeights ??
      [ ...DEFAULT_FONT_WEIGHT_FONT_WEIGHTS ];
  }
}
