import CssOptions from "../../interfaces/CssOptions";
import { DEFAULT_ANIMATION } from "./Animation";
import { DEFAULT_BORDER_RADIUS } from "./BorderRadius";
import { DEFAULT_BORDER_STYLE } from "./BorderStyle";
import { DEFAULT_BORDER_WIDTH } from "./BorderWidth";
import { DEFAULT_COLOR_OPTIONS } from "./ColorProperty";
import { DEFAULT_FONT_FAMILY } from "./FontFamily";
import { DEFAULT_FONT_STYLE } from "./FontStyle";
import { DEFAULT_FONT_WEIGHT } from "./FontWeight";
import { DEFAULT_GLOBAL_OPTIONS_UNSAFE } from "../../interfaces/GlobalOptions";
import { DEFAULT_TEXT_DECORATION_LINE } from "./TextDecorationLine";
import { DEFAULT_TEXT_DECORATION_STYLE } from "./TextDecorationStyle";
import Randomizable from "../Randomizable";

export const DEFAULT_CSS_OPTIONS: CssOptions = {
  animation: { ...DEFAULT_ANIMATION },
  backgroundColor: { ...DEFAULT_COLOR_OPTIONS },
  borderColor: { ...DEFAULT_COLOR_OPTIONS },
  borderRadius: { ...DEFAULT_BORDER_RADIUS },
  borderStyle: { ...DEFAULT_BORDER_STYLE },
  borderWidth: { ...DEFAULT_BORDER_WIDTH },
  color: { ...DEFAULT_COLOR_OPTIONS },
  fontFamily: { ...DEFAULT_FONT_FAMILY },
  fontStyle: { ...DEFAULT_FONT_STYLE },
  fontWeight: { ...DEFAULT_FONT_WEIGHT },
  textDecorationColor: { ...DEFAULT_COLOR_OPTIONS },
  textDecorationLine: { ...DEFAULT_TEXT_DECORATION_LINE },
  textDecorationStyle: { ...DEFAULT_TEXT_DECORATION_STYLE }
}

export default abstract class CssProperty extends Randomizable {

  protected separator = " ";

  constructor(protected unsafe = DEFAULT_GLOBAL_OPTIONS_UNSAFE) {
    super();
  }

  public abstract getRandomValue(): string;
}
