import DEFAULT_RANDOMIZABLE from "../RandomizableDefaults";
import FontWeightConfig from "../../../interfaces/FontWeightConfig";
import FontWeightValue from "../../../enums/FontWeightValue";

export const DEFAULT_FONT_WEIGHT_FONT_WEIGHTS = Object.values(FontWeightValue);

export const DEFAULT_FONT_WEIGHT_OPTIONS: FontWeightConfig = {
  ...DEFAULT_RANDOMIZABLE,
  keywords: DEFAULT_FONT_WEIGHT_FONT_WEIGHTS,
};
