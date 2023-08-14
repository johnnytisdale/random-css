import GlyphInput from "./GlyphInput";
import RandomElementProps from "./RandomElementProps";

import { HTMLAttributes } from "react";

export default interface RandomStringProps
  extends RandomElementProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * If true, the text will be centered.
   */
  center?: boolean;

  /**
   * Randomly change characters to similar glyphs.
   */
  glyphConfig?: GlyphInput;

  /**
   * If true, random styles will not be applied to spaces.
   */
  ignoreSpaces?: boolean;

  /**
   * Font size, measured in rem.
   */
  size?: number;

  /**
   * The text to be randomized.
   */
  text?: string;
}

export const DEFAULT_RANDOM_STRING_PROPS_CENTER = false;
export const DEFAULT_RANDOM_STRING_PROPS_IGNORE_SPACES = true;
export const DEFAULT_RANDOM_STRING_PROPS_SIZE = 3;
export const DEFAULT_RANDOM_STRING_PROPS_TEXT = "random css";
