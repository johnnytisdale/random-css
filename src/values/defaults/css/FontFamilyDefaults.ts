import DEFAULT_RANDOMIZABLE from "../RandomizableDefaults";
import FontFamilyName from "../../../enums/FontFamilyName";
import FontFamilyConfig from "../../../interfaces/FontFamilyConfig";
import FontGenericName from "../../../enums/FontGenericName";

export const DEFAULT_FONT_FAMILY_FALLBACK_PROBABILITY = 0.5;
export const DEFAULT_FONT_FAMILY_FONT_FAMILY_NAMES =
  Object.values(FontFamilyName);
export const DEFAULT_FONT_FAMILY_FONT_GENERIC_NAMES =
  Object.values(FontGenericName);
export const DEFAULT_FONT_FAMILY_INCLUDE_FALLBACKS = true;
export const DEFAULT_FONT_FAMILY_INCLUDE_FAMILY_NAMES = true;
export const DEFAULT_FONT_FAMILY_INCLUDE_GENERIC_NAMES = true;

export const DEFAULT_FONT_FAMILY_OPTIONS: FontFamilyConfig = {
  ...DEFAULT_RANDOMIZABLE,
  fallbackProbability: DEFAULT_FONT_FAMILY_FALLBACK_PROBABILITY,
  fontFamilyNames: DEFAULT_FONT_FAMILY_FONT_FAMILY_NAMES,
  fontGenericNames: DEFAULT_FONT_FAMILY_FONT_GENERIC_NAMES,
  includeFallbacks: DEFAULT_FONT_FAMILY_INCLUDE_FALLBACKS,
  includeFamilyNames: DEFAULT_FONT_FAMILY_INCLUDE_FAMILY_NAMES,
  includeGenericNames: DEFAULT_FONT_FAMILY_INCLUDE_GENERIC_NAMES,
};
