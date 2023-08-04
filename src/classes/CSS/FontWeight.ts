import CssProperty from "../../enums/CssProperty";
import FontWeightValue from "../../enums/FontWeightValue";
import Option from "../../interfaces/Option";
import KeywordProperty from "./KeywordProperty";

export interface FontWeightOptions extends Option {
  fontWeights?: FontWeightValue[];
}

export const DEFAULT_FONT_WEIGHT_ENABLED = true;
export const DEFAULT_FONT_WEIGHT_FONT_WEIGHTS = Object.values(FontWeightValue);

export const DEFAULT_FONT_WEIGHT: FontWeightOptions = {
  enabled: DEFAULT_FONT_WEIGHT_ENABLED,
  fontWeights: DEFAULT_FONT_WEIGHT_FONT_WEIGHTS
};

export default class FontWeight extends KeywordProperty {

  protected acceptsLengths = false;
  public name = CssProperty.FONT_WEIGHT;

  protected keywords: string[];

  constructor(options: FontWeightOptions) {
    super();
    this.keywords = options.fontWeights ??
      [ ...DEFAULT_FONT_WEIGHT_FONT_WEIGHTS ];
  }
}