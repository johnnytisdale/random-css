import FontFamilyName from "../enums/FontFamilyName";
import FontGenericName from "../enums/FontGenericName";
import Option from "./Option";

export default interface FontFamilyOptions extends Option {
  fallbackProbability?: number;
  fontFamilyNames?: FontFamilyName[];
  fontGenericNames?: FontGenericName[];
  includeFallbacks?: boolean;
  includeFamilyNames?: boolean;
  includeGenericNames?: boolean;
}
