import DEFAULT_RANDOMIZABLE from "../RandomizableDefaults";
import LengthConfig from "../../../interfaces/LengthConfig";
import LengthUnit from "../../../enums/LengthUnit";

export const DEFAULT_LENGTH_MAX = 3;
export const DEFAULT_LENGTH_MIN = 1;
export const DEFAULT_LENGTH_UNITS = Object.values(LengthUnit);

export const DEFAULT_LENGTH_OPTIONS: LengthConfig = {
  max: DEFAULT_LENGTH_MAX,
  min: DEFAULT_LENGTH_MIN,
  units: DEFAULT_LENGTH_UNITS,
};

export const DEFAULT_BORDER_WIDTH_OPTIONS: LengthConfig = {
  ...DEFAULT_RANDOMIZABLE,
  ...DEFAULT_LENGTH_OPTIONS,
};
