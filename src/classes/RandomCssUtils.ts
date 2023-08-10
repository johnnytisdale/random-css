import Animation from "./CSS/Animation";
import BackgroundColor from "./CSS/BackgroundColor";
import BorderColor from "./CSS/BorderColor";
import BorderRadius from "./CSS/BorderRadius";
import BorderStyle from "./CSS/BorderStyle";
import BorderWidth from "./CSS/BorderWidth";
import Color from "./CSS/Color";
import CssOptions from "../interfaces/CssOptions";
import CssPropertyName from "../enums/CssPropertyName";
import { DEFAULT_ANIMATION_OPTIONS } from "../interfaces/AnimationOptions";
import { DEFAULT_BORDER_RADIUS_OPTIONS } from "../interfaces/BorderRadiusOptions";
import { DEFAULT_BORDER_STYLE_OPTIONS } from "../interfaces/BorderStyleOptions";
import { DEFAULT_BORDER_WIDTH_OPTIONS } from "../interfaces/LengthOptions";
import { DEFAULT_COLOR_OPTIONS } from "../interfaces/ColorOptions";
import { DEFAULT_FONT_FAMILY_OPTIONS } from "../interfaces/FontFamilyOptions";
import { DEFAULT_TEXT_DECORATION_LINE_OPTIONS } from "../interfaces/TextDecorationLineOptions";
import FontFamily from "./CSS/FontFamily";
import FontStyle from "./CSS/FontStyle";
import FontWeight from "./CSS/FontWeight";
import Glyph from "./Glyph";
import GlyphOptions from "../interfaces/GlyphOptions";
import Randomizable from "./Randomizable";
import Randomizables from "../interfaces/Randomizables";
import RandomizableName from "../types/RandomizableName";
import TextDecorationColor from "./CSS/TextDecorationColor";
import TextDecorationLine from "./CSS/TextDecorationLine";
import TextDecorationStyle, {
  DEFAULT_TEXT_DECORATION_STYLE_OPTIONS,
} from "./CSS/TextDecorationStyle";

export default class RandomCssUtils {
  public static reducer<T>(state: T, newState: Partial<T>): T {
    return { ...state, ...newState };
  }

  public static getRandomizables(
    cssOptions: CssOptions,
    unsafe: boolean,
    character?: string,
    glyphOptions?: GlyphOptions,
    ignoreSpaces?: boolean
  ): Randomizables {
    return [...Object.values(CssPropertyName), "glyph"].reduce(
      (accumulated: Partial<Randomizables>, key: RandomizableName) => {
        const acc: Partial<Randomizables> = { ...accumulated, [key]: null };
        if (
          character == " " &&
          (ignoreSpaces || Randomizable.ignoreForSpaces[key])
        ) {
          return acc;
        }
        if (key === "glyph") {
          const isLeetEnabled = glyphOptions?.leet?.enabled === true;
          const isUnicodeEnabled = glyphOptions?.unicode?.enabled === true;
          if (isLeetEnabled || isUnicodeEnabled) {
            acc[key] = new Glyph(character, glyphOptions);
          }
        } else if (cssOptions?.[key]?.enabled) {
          acc[key] = RandomCssUtils.getRandomizableForCssProperty(
            key,
            cssOptions,
            unsafe
          );
        }
        return acc;
      },
      {}
    ) as Randomizables;
  }

  public static getRandomizableForCssProperty(
    cssProperty: CssPropertyName,
    cssOptions: CssOptions,
    unsafe: boolean
  ): Randomizable {
    switch (cssProperty) {
      case CssPropertyName.ANIMATION:
        return new Animation(
          cssOptions?.animation ?? { ...DEFAULT_ANIMATION_OPTIONS },
          unsafe
        );
      case CssPropertyName.BACKGROUND_COLOR:
        return new BackgroundColor(
          cssOptions.backgroundColor ?? { ...DEFAULT_COLOR_OPTIONS },
          unsafe
        );
      case CssPropertyName.BORDER_COLOR:
        return new BorderColor(
          cssOptions.borderColor ?? { ...DEFAULT_COLOR_OPTIONS },
          unsafe
        );
      case CssPropertyName.BORDER_RADIUS:
        return new BorderRadius(
          cssOptions.borderRadius ?? { ...DEFAULT_BORDER_RADIUS_OPTIONS }
        );
      case CssPropertyName.BORDER_STYLE:
        return new BorderStyle(
          cssOptions.borderStyle ?? { ...DEFAULT_BORDER_STYLE_OPTIONS },
          unsafe
        );
      case CssPropertyName.BORDER_WIDTH:
        return new BorderWidth(
          cssOptions.borderWidth ?? { ...DEFAULT_BORDER_WIDTH_OPTIONS }
        );
      case CssPropertyName.COLOR:
        return new Color(
          cssOptions.color ?? { ...DEFAULT_COLOR_OPTIONS },
          unsafe
        );
      case CssPropertyName.FONT_FAMILY:
        return new FontFamily(
          cssOptions.fontFamily ?? { ...DEFAULT_FONT_FAMILY_OPTIONS }
        );
      case CssPropertyName.FONT_STYLE:
        return new FontStyle(
          cssOptions?.fontStyle ?? { ...DEFAULT_ANIMATION_OPTIONS },
          unsafe
        );
      case CssPropertyName.FONT_WEIGHT:
        return new FontWeight(
          cssOptions?.fontWeight ?? { ...DEFAULT_FONT_FAMILY_OPTIONS }
        );
      case CssPropertyName.TEXT_DECORATION_COLOR:
        return new TextDecorationColor(
          cssOptions.textDecorationColor ?? { ...DEFAULT_ANIMATION_OPTIONS },
          unsafe
        );
      case CssPropertyName.TEXT_DECORATION_LINE:
        return new TextDecorationLine(
          cssOptions.textDecorationLine ?? {
            ...DEFAULT_TEXT_DECORATION_LINE_OPTIONS,
          }
        );
      case CssPropertyName.TEXT_DECORATION_STYLE:
        return new TextDecorationStyle(
          cssOptions.textDecorationStyle ?? {
            ...DEFAULT_TEXT_DECORATION_STYLE_OPTIONS,
          }
        );
      default:
        return null;
    }
  }
}