import FontFamilyName from "../enums/FontFamilyName";
import FontGenericName from "../enums/FontGenericName";
import Config from "./Config";

export default interface FontFamilyConfig extends Config {
  fallbackProbability?: number;
  fontFamilyNames?: FontFamilyName[];
  fontGenericNames?: FontGenericName[];
  includeFallbacks?: boolean;
  includeFamilyNames?: boolean;
  includeGenericNames?: boolean;
}
