import ECssProperty from "../../enums/CssProperty";
import FontFamilyName from "../../enums/FontFamilyName";
import FontGenericName from "../../enums/FontGenericName";
import Option from "../../interfaces/Option";
import CssProperty from "./CssProperty";

export interface FontFamilyOptions extends Option {
  fallbackProbability?: number;
  fontFamilyNames?: FontFamilyName[];
  fontGenericNames?: FontGenericName[];
  includeFallbacks?: boolean;
  includeFamilyNames?: boolean;
  includeGenericNames?: boolean;
}

export const DEFAULT_FONT_FAMILY_ENABLED = false;
export const DEFAULT_FONT_FAMILY_FALLBACK_PROBABILITY = .5;
export const DEFAULT_FONT_FAMILY_FONT_FAMILY_NAMES = Object.values(
  FontFamilyName
);
export const DEFAULT_FONT_FAMILY_FONT_GENERIC_NAMES = Object.values(
  FontGenericName
);
export const DEFAULT_FONT_FAMILY_INCLUDE_FALLBACKS = true;
export const DEFAULT_FONT_FAMILY_INCLUDE_FAMILY_NAMES = true;
export const DEFAULT_FONT_FAMILY_INCLUDE_GENERIC_NAMES = true;

export const DEFAULT_FONT_FAMILY: FontFamilyOptions = {
  enabled: DEFAULT_FONT_FAMILY_ENABLED,
  fallbackProbability: DEFAULT_FONT_FAMILY_FALLBACK_PROBABILITY,
  fontFamilyNames: DEFAULT_FONT_FAMILY_FONT_FAMILY_NAMES,
  fontGenericNames: DEFAULT_FONT_FAMILY_FONT_GENERIC_NAMES,
  includeFallbacks: DEFAULT_FONT_FAMILY_INCLUDE_FALLBACKS,
  includeFamilyNames: DEFAULT_FONT_FAMILY_INCLUDE_FAMILY_NAMES,
  includeGenericNames: DEFAULT_FONT_FAMILY_INCLUDE_GENERIC_NAMES
}

export default class FontFamily extends CssProperty {

  private fallbackProbability: number;
  private fontFamilyNames: FontFamilyName[];
  private fontGenericNames: FontGenericName[];
  private includeFallbacks: boolean;
  private includeFamilyNames: boolean;
  private includeGenericNames: boolean;
  protected acceptsLengths = false;
  protected separator = ", ";
  public name = ECssProperty.FONT_FAMILY;

  constructor(options: FontFamilyOptions) {
    super();
    this.fallbackProbability = options.fallbackProbability
      ?? DEFAULT_FONT_FAMILY_FALLBACK_PROBABILITY;
    this.fontFamilyNames = options.fontFamilyNames ??
      [ ...DEFAULT_FONT_FAMILY_FONT_FAMILY_NAMES ];
    this.fontGenericNames = options.fontGenericNames ??
      [ ...DEFAULT_FONT_FAMILY_FONT_GENERIC_NAMES ];
    this.includeFallbacks = options.includeFallbacks
      ?? DEFAULT_FONT_FAMILY_INCLUDE_FALLBACKS;
    this.includeFamilyNames = options.includeFamilyNames
      ?? DEFAULT_FONT_FAMILY_INCLUDE_FAMILY_NAMES;
    this.includeGenericNames = options.includeGenericNames
      ?? DEFAULT_FONT_FAMILY_INCLUDE_GENERIC_NAMES;
    if (
      !this.includeFallbacks &&
      !this.includeFamilyNames &&
      !this.includeGenericNames
    ) {
      throw new Error('You must include at least one type of font value.');
    }
    // TODO: Handle other errors, e.g. empty arrays.
  }

  public getRandomValue(): string {
    return this.includeFallbacks && Math.random() <= this.fallbackProbability
      ? [
        this.getRandomArrayElement(this.fontFamilyNames),
        this.getRandomArrayElement(this.fontGenericNames)
      ].join(", ")
      : this.getRandomArrayElement([
        ...(this.includeFamilyNames ? this.fontFamilyNames : []),
        ...(this.includeGenericNames ? this.fontGenericNames : [])
      ]);
  }
}