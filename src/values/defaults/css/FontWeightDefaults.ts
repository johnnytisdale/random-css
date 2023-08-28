import DEFAULT_RANDOMIZABLE from "../RandomizableDefaults";
import FontWeightOptions from "../../../interfaces/FontWeightOptions";
import FontWeightValue from "../../../enums/FontWeightValue";

export const DEFAULT_FONT_WEIGHT_FONT_WEIGHTS = Object.values(FontWeightValue);

export const DEFAULT_FONT_WEIGHT_OPTIONS: FontWeightOptions = {
  ...DEFAULT_RANDOMIZABLE,
  keywords: DEFAULT_FONT_WEIGHT_FONT_WEIGHTS,
};
