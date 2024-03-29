import CssProperty from "./CssProperty";
import CssPropertyName from "../../enums/CssPropertyName";
import {
  DEFAULT_FONT_FAMILY_FALLBACK_PROBABILITY,
  DEFAULT_FONT_FAMILY_FONT_FAMILY_NAMES,
  DEFAULT_FONT_FAMILY_FONT_GENERIC_NAMES,
  DEFAULT_FONT_FAMILY_INCLUDE_FALLBACKS,
  DEFAULT_FONT_FAMILY_INCLUDE_FAMILY_NAMES,
  DEFAULT_FONT_FAMILY_INCLUDE_GENERIC_NAMES,
} from "../../values/defaults/css/FontFamilyDefaults";
import FontFamilyName from "../../enums/FontFamilyName";
import FontGenericName from "../../enums/FontGenericName";
import FontFamilyConfig from "../../interfaces/FontFamilyConfig";
import Randomizable from "../Randomizable";

export default class FontFamily extends CssProperty {
  private fallbackProbability: number;
  private fontFamilyNames: FontFamilyName[];
  private fontGenericNames: FontGenericName[];
  private includeFallbacks: boolean;
  private includeFamilyNames: boolean;
  private includeGenericNames: boolean;
  protected separator = ", ";
  public name = CssPropertyName.FONT_FAMILY;

  protected setSpecificConfig(config: FontFamilyConfig) {
    this.fallbackProbability =
      config.fallbackProbability ?? DEFAULT_FONT_FAMILY_FALLBACK_PROBABILITY;
    this.fontFamilyNames = config.fontFamilyNames ?? [
      ...DEFAULT_FONT_FAMILY_FONT_FAMILY_NAMES,
    ];
    this.fontGenericNames = config.fontGenericNames ?? [
      ...DEFAULT_FONT_FAMILY_FONT_GENERIC_NAMES,
    ];
    this.includeFallbacks =
      config.includeFallbacks ?? DEFAULT_FONT_FAMILY_INCLUDE_FALLBACKS;
    this.includeFamilyNames =
      config.includeFamilyNames ?? DEFAULT_FONT_FAMILY_INCLUDE_FAMILY_NAMES;
    this.includeGenericNames =
      config.includeGenericNames ?? DEFAULT_FONT_FAMILY_INCLUDE_GENERIC_NAMES;
    if (
      !this.includeFallbacks &&
      !this.includeFamilyNames &&
      !this.includeGenericNames
    ) {
      // TODO: Fail more gracefully?
      throw new Error("You must include at least one type of font value.");
    }
    // TODO: Handle other errors, e.g. empty arrays.
  }

  public getRandomValue(): string {
    return this.includeFallbacks && Math.random() <= this.fallbackProbability
      ? [
          Randomizable.array(this.fontFamilyNames),
          Randomizable.array(this.fontGenericNames),
        ].join(", ")
      : Randomizable.array([
          ...(this.includeFamilyNames ? this.fontFamilyNames : []),
          ...(this.includeGenericNames ? this.fontGenericNames : []),
        ]);
  }
}
