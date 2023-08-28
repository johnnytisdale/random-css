import Animation from "./CSS/Animation";
import BackgroundColor from "./CSS/BackgroundColor";
import BorderColor from "./CSS/BorderColor";
import BorderRadius from "./CSS/BorderRadius";
import BorderStyle from "./CSS/BorderStyle";
import BorderWidth from "./CSS/BorderWidth";
import Color from "./CSS/Color";
import CssPropertyName from "../enums/CssPropertyName";
import { DEFAULT_ANIMATION_OPTIONS } from "../values/defaults/css/AnimationDefaults";
import { DEFAULT_BORDER_RADIUS_OPTIONS } from "../values/defaults/css/BorderRadiusDefaults";
import { DEFAULT_BORDER_STYLE_OPTIONS } from "../values/defaults/css/BorderStyleDefaults";
import { DEFAULT_COLOR_OPTIONS } from "../values/defaults/css/ColorDefaults";
import { DEFAULT_FONT_FAMILY_OPTIONS } from "../values/defaults/css/FontFamilyDefaults";
import { DEFAULT_BORDER_WIDTH_OPTIONS } from "../values/defaults/css/LengthDefaults";
import { DEFAULT_TEXT_DECORATION_LINE_OPTIONS } from "../values/defaults/css/TextDecorationLineDefaults";
import { DEFAULT_TEXT_DECORATION_STYLE_OPTIONS } from "../values/defaults/css/TextDecorationStyleDefaults";
import FontFamily from "./CSS/FontFamily";
import FontStyle from "./CSS/FontStyle";
import FontWeight from "./CSS/FontWeight";
import Option from "../interfaces/Option";
import Randomizable from "./Randomizable";
import Randomizables from "../types/Randomizables";
import Style from "../types/Style";
import StyleConfig from "../interfaces/StyleConfig";
import TextDecorationColor from "./CSS/TextDecorationColor";
import TextDecorationLine from "./CSS/TextDecorationLine";
import TextDecorationStyle from "./CSS/TextDecorationStyle";

export default class RandomCssUtils {
  public static reducer<T>(state: T, newState: Partial<T>): T {
    return { ...state, ...newState };
  }

  public static getCssRandomizables(
    style: Style,
    setStyle: (style: Style) => void
  ): Randomizables {
    return Object.values(CssPropertyName).reduce(
      (accumulated: Partial<Randomizables>, key: CssPropertyName) => ({
        ...accumulated,
        [key]: RandomCssUtils.getRandomizableForCssProperty(
          key,
          style,
          setStyle
        ),
      }),
      {}
    ) as Randomizables;
  }

  public static getRandomizableForCssProperty(
    cssProperty: CssPropertyName,
    style: Style,
    setStyle: (style: Style) => void
  ): Randomizable {
    switch (cssProperty) {
      case CssPropertyName.ANIMATION:
        return new Animation(style, setStyle);
      case CssPropertyName.BACKGROUND_COLOR:
        return new BackgroundColor(style, setStyle);
      case CssPropertyName.BORDER_COLOR:
        return new BorderColor(style, setStyle);
      case CssPropertyName.BORDER_RADIUS:
        return new BorderRadius(style, setStyle);
      case CssPropertyName.BORDER_STYLE:
        return new BorderStyle(style, setStyle);
      case CssPropertyName.BORDER_WIDTH:
        return new BorderWidth(style, setStyle);
      case CssPropertyName.COLOR:
        return new Color(style, setStyle);
      case CssPropertyName.FONT_FAMILY:
        return new FontFamily(style, setStyle);
      case CssPropertyName.FONT_STYLE:
        return new FontStyle(style, setStyle);
      case CssPropertyName.FONT_WEIGHT:
        return new FontWeight(style, setStyle);
      case CssPropertyName.TEXT_DECORATION_COLOR:
        return new TextDecorationColor(style, setStyle);
      case CssPropertyName.TEXT_DECORATION_LINE:
        return new TextDecorationLine(style, setStyle);
      case CssPropertyName.TEXT_DECORATION_STYLE:
        return new TextDecorationStyle(style, setStyle);
    }
  }

  public static getConfigForCssProperty(
    cssProperty: CssPropertyName,
    styleConfig: StyleConfig
  ): Option {
    switch (cssProperty) {
      case CssPropertyName.ANIMATION:
        return styleConfig?.animation ?? { ...DEFAULT_ANIMATION_OPTIONS };
      case CssPropertyName.BACKGROUND_COLOR:
        return styleConfig?.backgroundColor ?? { ...DEFAULT_COLOR_OPTIONS };
      case CssPropertyName.BORDER_COLOR:
        return styleConfig?.borderColor ?? { ...DEFAULT_COLOR_OPTIONS };
      case CssPropertyName.BORDER_RADIUS:
        return (
          styleConfig?.borderRadius ?? { ...DEFAULT_BORDER_RADIUS_OPTIONS }
        );
      case CssPropertyName.BORDER_STYLE:
        return styleConfig?.borderStyle ?? { ...DEFAULT_BORDER_STYLE_OPTIONS };
      case CssPropertyName.BORDER_WIDTH:
        return styleConfig?.borderWidth ?? { ...DEFAULT_BORDER_WIDTH_OPTIONS };
      case CssPropertyName.COLOR:
        return styleConfig?.color ?? { ...DEFAULT_COLOR_OPTIONS };
      case CssPropertyName.FONT_FAMILY:
        return styleConfig?.fontFamily ?? { ...DEFAULT_FONT_FAMILY_OPTIONS };
      case CssPropertyName.FONT_STYLE:
        return styleConfig?.fontStyle ?? { ...DEFAULT_ANIMATION_OPTIONS };
      case CssPropertyName.FONT_WEIGHT:
        return styleConfig?.fontWeight ?? { ...DEFAULT_FONT_FAMILY_OPTIONS };
      case CssPropertyName.TEXT_DECORATION_COLOR:
        return (
          styleConfig?.textDecorationColor ?? { ...DEFAULT_ANIMATION_OPTIONS }
        );
      case CssPropertyName.TEXT_DECORATION_LINE:
        return (
          styleConfig?.textDecorationLine ?? {
            ...DEFAULT_TEXT_DECORATION_LINE_OPTIONS,
          }
        );
      case CssPropertyName.TEXT_DECORATION_STYLE:
        return (
          styleConfig?.textDecorationStyle ?? {
            ...DEFAULT_TEXT_DECORATION_STYLE_OPTIONS,
          }
        );
    }
  }

  public static getConfigFromInput<Input, Config>(input: Input): Config {
    const config = {} as Config;
    for (const item of Array.isArray(input) ? input : [input]) {
      if (typeof item === "string") {
        config[item as keyof Config] = {
          ...config[item as keyof Config],
          ...{ enabled: true },
        };
      } else if (typeof item === "object") {
        Object.keys(item).forEach((key) => {
          if (typeof item[key] === "object") {
            config[key as keyof Config] = {
              ...config[key as keyof Config],
              ...item[key as keyof Config],

              /**
               * The user should not have to type "{ enabled : true }" because it
               * is too cumbersome. If they include a CSSPropertyName in their
               * input, then unless they explicity set enabled to false for it,
               * we will assume they want to enable it.
               */
              ...(item[key as keyof Config]?.enabled !== false && {
                enabled: true,
              }),
            };
          } else {
            config[key as keyof Config] = item[key as keyof Config];
          }
        });
      }
    }
    return config;
  }
}
