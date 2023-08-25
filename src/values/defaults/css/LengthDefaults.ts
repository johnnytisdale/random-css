import DEFAULT_RANDOMIZABLE from "../RandomizableDefaults";
import LengthOptions from "../../../interfaces/LengthOptions";
import LengthUnit from "../../../enums/LengthUnit";

export const DEFAULT_LENGTH_MAX = 3;
export const DEFAULT_LENGTH_MIN = 1;
export const DEFAULT_LENGTH_UNITS = Object.values(LengthUnit);

export const DEFAULT_LENGTH_OPTIONS: LengthOptions = {
  max: DEFAULT_LENGTH_MAX,
  min: DEFAULT_LENGTH_MIN,
  units: DEFAULT_LENGTH_UNITS,
};

export const DEFAULT_BORDER_WIDTH_OPTIONS: LengthOptions = {
  ...DEFAULT_RANDOMIZABLE,
  ...DEFAULT_LENGTH_OPTIONS,
};
