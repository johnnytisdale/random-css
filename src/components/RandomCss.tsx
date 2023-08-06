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
import Options from "../interfaces/Options";
import Randomizable from "../classes/Randomizable";
import Randomizables from "../interfaces/Randomizables";
import TextDecorationColor from "../classes/CSS/TextDecorationColor";
import TextDecorationLine, { DEFAULT_TEXT_DECORATION_LINE_OPTIONS } from "../classes/CSS/TextDecorationLine";
import TextDecorationStyle, { DEFAULT_TEXT_DECORATION_STYLE_OPTIONS } from "../classes/CSS/TextDecorationStyle";

import * as React from "react";
interface Props {
  options: Options;
  text: string;
}

export default class RandomCss extends React.Component<Props> {

  private getClassName(): string {
    return [
      "random-css-container",
      this.props?.options.global.unsafe === false
        ? `random-css-container-${
          String(this.props?.options.global.size).replaceAll('.', '-')
        }`
        : null
    ]
      .filter(Boolean)
      .join(' ');
  }

  private getRandomizableForCssProperty(option: CssProperty): Randomizable {
    switch (option) {
      case CssProperty.ANIMATION:
        return new Animation(
          this.props?.options.css?.animation ?? { ...DEFAULT_ANIMATION_OPTIONS },
          this.props?.options.global?.unsafe
        );
      case CssProperty.BACKGROUND_COLOR:
        return new BackgroundColor(
          this.props?.options.css.backgroundColor ?? { ...DEFAULT_COLOR_OPTIONS },
          this.props?.options.global.unsafe
        );
      case CssProperty.BORDER_COLOR:
        return new BorderColor(
          this.props?.options.css.borderColor ?? { ...DEFAULT_COLOR_OPTIONS },
          this.props?.options.global.unsafe
        );
      case CssProperty.BORDER_RADIUS:
        return new BorderRadius(this.props?.options.css.borderRadius ?? { ...DEFAULT_BORDER_RADIUS_OPTIONS });
      case CssProperty.BORDER_STYLE:
        return new BorderStyle(
          this.props?.options.css.borderStyle ?? { ...DEFAULT_BORDER_STYLE_OPTIONS },
          this.props?.options.global.unsafe
        );
      case CssProperty.BORDER_WIDTH:
        return new BorderWidth(this.props?.options.css.borderWidth ?? { ...DEFAULT_BORDER_WIDTH_OPTIONS });
      case CssProperty.COLOR:
        return new Color(
          this.props?.options.css.color ?? { ...DEFAULT_COLOR_OPTIONS },
          this.props?.options.global.unsafe
        );
      case CssProperty.FONT_FAMILY:
        return new FontFamily(this.props?.options.css.fontFamily ?? { ...DEFAULT_FONT_FAMILY_OPTIONS });
      case CssProperty.FONT_STYLE:
        return new FontStyle(
          this.props?.options.css?.fontStyle ?? { ...DEFAULT_ANIMATION_OPTIONS },
          this.props?.options.global.unsafe
        );
      case CssProperty.FONT_WEIGHT:
        return new FontWeight(this.props?.options.css?.fontWeight ?? { ...DEFAULT_FONT_FAMILY_OPTIONS });
      case CssProperty.TEXT_DECORATION_COLOR:
        return new TextDecorationColor(
          this.props?.options.css.textDecorationColor ?? { ...DEFAULT_ANIMATION_OPTIONS },
          this.props?.options.global.unsafe
        );
      case CssProperty.TEXT_DECORATION_LINE:
        return new TextDecorationLine(
          this.props?.options.css.textDecorationLine ?? { ...DEFAULT_TEXT_DECORATION_LINE_OPTIONS }
        );
      case CssProperty.TEXT_DECORATION_STYLE:
        return new TextDecorationStyle(
          this.props?.options.css.textDecorationStyle ?? { ...DEFAULT_TEXT_DECORATION_STYLE_OPTIONS }
        );
    }
  }

  private getRandomizables(character: string): Randomizables {
    // TODO: useMemo for isLeetEnabled and isUnicodeEnabled?
    const isLeetEnabled = this.props?.options.glyph?.leet?.enabled === true;
    const isUnicodeEnabled = (
      this.props?.options.glyph?.unicode?.enabled === true
    );
    return [ ...Object.values(CssProperty), 'glyph' ].reduce(
      (accumulated: Partial<Randomizables>, key: keyof Randomizables) => {
        return {
            ...accumulated,
            ...{
              [key]: key === 'glyph'
                ? (
                  isLeetEnabled || isUnicodeEnabled
                    ? new Glyph(character, isLeetEnabled, isUnicodeEnabled)
                    : null
                ) : (
                  this.props?.options.css?.[key]?.enabled
                    ? this.getRandomizableForCssProperty(key)
                    : null
                )
            },
          };
      },
      {}  
    ) as Randomizables;
  }

  render(): React.ReactNode {

    /**
     * This value serves as both the font size and the width of the divs
     * that contain the characters. The height of the divs will be equal to this
     * value multiplied by 1.1875.
     */
    const size = `${this.props?.options.global.size}rem`;

    return (
      <div
        className={this.getClassName()}
        {
          ...(
            this.props?.options.global.unsafe === true &&
            {
              style: {
                fontSize: size
              }
            }
          )
        }
      >
        {
          this.props.text.split('').map((character, i) => {
            const ignore = (
              character === ' ' &&
              this.props?.options.global.ignoreSpaces === true
            );
            const randomizables: Randomizables | null = ignore === true
              ? null
              : this.getRandomizables(character);
            return (
              <Character
                key={`${i}-${character}`}
                character={character}
                index={i}
                randomizables={randomizables}
                size={this.props?.options.global.size}
                unsafe={this.props?.options.global.unsafe}
              />
            );
          })
        }
      </div>
    );
  }
}
