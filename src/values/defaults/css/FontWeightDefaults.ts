import FontWeightOptions from "../../../interfaces/FontWeightOptions";
import FontWeightValue from "../../../enums/FontWeightValue";

export const DEFAULT_FONT_WEIGHT_ENABLED = false;
export const DEFAULT_FONT_WEIGHT_FONT_WEIGHTS = Object.values(FontWeightValue);

export const DEFAULT_FONT_WEIGHT_OPTIONS: FontWeightOptions = {
  enabled: DEFAULT_FONT_WEIGHT_ENABLED,
  fontWeights: DEFAULT_FONT_WEIGHT_FONT_WEIGHTS,
};
