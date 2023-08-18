import GlyphInput from "../types/GlyphInput";
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
  glyph?: GlyphInput;

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
