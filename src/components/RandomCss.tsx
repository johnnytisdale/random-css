import "../styles/RandomCss.scss";

import Animation, { DEFAULT_ANIMATION_OPTIONS } from "../classes/CSS/Animation";
import BackgroundColor from "../classes/CSS/BackgroundColor";
import BorderColor from "../classes/CSS/BorderColor";
import BorderRadius, { DEFAULT_BORDER_RADIUS_OPTIONS } from "../classes/CSS/BorderRadius";
import BorderStyle, { DEFAULT_BORDER_STYLE_OPTIONS } from "../classes/CSS/BorderStyle";
import BorderWidth, { DEFAULT_BORDER_WIDTH_OPTIONS } from "../classes/CSS/BorderWidth";
import Character from "./Character";
import Color from "../classes/CSS/Color";
import CssProperty from "../enums/CssProperty";
import { DEFAULT_COLOR_OPTIONS } from "../classes/CSS/ColorProperty";
import FontFamily, { DEFAULT_FONT_FAMILY_OPTIONS } from "../classes/CSS/FontFamily";
import FontStyle from "../classes/CSS/FontStyle";
import FontWeight from "../classes/CSS/FontWeight";
import Glyph from "../classes/Glyph";
import OptionName from "../types/OptionName";
import Options from "../interfaces/Options";
import Randomizable from "../classes/Randomizable";
import Randomizables from "../interfaces/Randomizables";
import TextDecorationColor from "../classes/CSS/TextDecorationColor";
import TextDecorationLine, { DEFAULT_TEXT_DECORATION_LINE_OPTIONS } from "../classes/CSS/TextDecorationLine";
import TextDecorationStyle, { DEFAULT_TEXT_DECORATION_STYLE_OPTIONS } from "../classes/CSS/TextDecorationStyle";

import * as React from "react";
import { useCallback, useMemo } from "react";

interface Props {
  options: Options;
  text: string;
}

/**
 * TODO: move ignoreSpaces check here, also filter out randomizables that don't
 * affect spaces such as fontFamily.
 */


const ignoreForSpaces: Record<OptionName, boolean> = {
  animation: false,
  backgroundColor: false,
  borderColor: false,
  borderRadius: false,
  borderStyle: false,
  borderWidth: false,
  color: true,
  fontFamily: true,
  fontStyle: true,
  fontWeight: true,
  glyph: true,
  textDecorationColor: true,
  textDecorationLine: true,
  textDecorationStyle: true
};

export default function RandomCss({options, text}: Props): React.ReactNode {

  const className = useMemo(
    () => [
      "random-css-container",
      !options.global?.unsafe
        ? `random-css-container-${
          String(options.global.size).replaceAll('.', '-')
        }`
        : null
    ]
      .filter(Boolean)
      .join(' '),
    [options.global?.size, options.global?.unsafe]
  );

  const getRandomizableForCssProperty = useCallback(
    (option: CssProperty): Randomizable => {
      switch (option) {
        case CssProperty.ANIMATION:
          return new Animation(
            options.css?.animation ?? { ...DEFAULT_ANIMATION_OPTIONS },
            options.global?.unsafe
          );
        case CssProperty.BACKGROUND_COLOR:
          return new BackgroundColor(
            options.css.backgroundColor ?? { ...DEFAULT_COLOR_OPTIONS },
            options.global.unsafe
          );
        case CssProperty.BORDER_COLOR:
          return new BorderColor(
            options.css.borderColor ?? { ...DEFAULT_COLOR_OPTIONS },
            options.global.unsafe
          );
        case CssProperty.BORDER_RADIUS:
          return new BorderRadius(
            options.css.borderRadius ?? { ...DEFAULT_BORDER_RADIUS_OPTIONS }
          );
        case CssProperty.BORDER_STYLE:
          return new BorderStyle(
            options.css.borderStyle ?? { ...DEFAULT_BORDER_STYLE_OPTIONS },
            options.global.unsafe
          );
        case CssProperty.BORDER_WIDTH:
          return new BorderWidth(options.css.borderWidth
            ?? { ...DEFAULT_BORDER_WIDTH_OPTIONS });
        case CssProperty.COLOR:
          return new Color(
            options.css.color ?? { ...DEFAULT_COLOR_OPTIONS },
            options.global.unsafe
          );
        case CssProperty.FONT_FAMILY:
          return new FontFamily(options.css.fontFamily
            ?? { ...DEFAULT_FONT_FAMILY_OPTIONS });
        case CssProperty.FONT_STYLE:
          return new FontStyle(
            options.css?.fontStyle ?? { ...DEFAULT_ANIMATION_OPTIONS },
            options.global.unsafe
          );
        case CssProperty.FONT_WEIGHT:
          return new FontWeight(options.css?.fontWeight
            ?? { ...DEFAULT_FONT_FAMILY_OPTIONS });
        case CssProperty.TEXT_DECORATION_COLOR:
          return new TextDecorationColor(
            options.css.textDecorationColor ?? { ...DEFAULT_ANIMATION_OPTIONS },
            options.global.unsafe
          );
        case CssProperty.TEXT_DECORATION_LINE:
          return new TextDecorationLine(
            options.css.textDecorationLine
              ?? { ...DEFAULT_TEXT_DECORATION_LINE_OPTIONS }
          );
        case CssProperty.TEXT_DECORATION_STYLE:
          return new TextDecorationStyle(
            options.css.textDecorationStyle
              ?? { ...DEFAULT_TEXT_DECORATION_STYLE_OPTIONS }
          );
      }
    },
    [options]
  );

  const isLeetEnabled = useMemo(
    () => options.glyph?.leet?.enabled === true,
    [options.glyph?.leet?.enabled]
  );
  const isUnicodeEnabled = useMemo(
    () => options.glyph?.unicode?.enabled === true,
    [options.glyph?.unicode?.enabled]
  );

  const getRandomizables = useCallback(
    (character: string): Randomizables => (
      [ ...Object.values(CssProperty), 'glyph' ].reduce(
        (accumulated: Partial<Randomizables>, key: OptionName) => {
          const acc: Partial<Randomizables> = { ...accumulated, [key]: null };
          if (
            character == " " &&
            (options.global?.ignoreSpaces || ignoreForSpaces[key])
          ) {
            return acc;
          }
          if (key === 'glyph') {
            if (isLeetEnabled || isUnicodeEnabled) {
              acc[key] = new Glyph(character, isLeetEnabled, isUnicodeEnabled);
            }
          } else if (options.css?.[key]?.enabled) {
            acc[key] = getRandomizableForCssProperty(key);
          }
          return acc;
        },
        {}
      ) as Randomizables
    ),
    [
      getRandomizableForCssProperty,
      isLeetEnabled,
      isUnicodeEnabled,
      options.global?.ignoreSpaces
    ]
  );

  /**
   * This value serves as both the font size and the width of the divs
   * that contain the characters. The height of the divs will be equal to this
   * value multiplied by 1.1875.
   */
  const size = useMemo(
    () => `${options.global.size}rem`,
    [options.global.size]
  );

  return (
    <div
      className={className}
      {...options.global.unsafe && { style: { fontSize: size } }}
    >
      {
        text.split('').map((character, i) => (
          <Character
            key={`${i}-${character}`}
            character={character}
            index={i}
            randomizables={getRandomizables(character)}
            size={options.global.size}
            unsafe={options.global.unsafe}
          />
        ))
      }
    </div>
  );
}
