import "../styles/RandomCss.scss";

import Animation from "../classes/CSS/Animation";
import AppliedOptions from "../interfaces/AppliedOptions";
import BackgroundColor from "../classes/CSS/BackgroundColor";
import BorderColor from "../classes/CSS/BorderColor";
import BorderRadius from "../classes/CSS/BorderRadius";
import BorderStyle from "../classes/CSS/BorderStyle";
import BorderWidth from "../classes/CSS/BorderWidth";
import Character from "./Character";
import Color from "../classes/CSS/Color";
import CssProperty from "../enums/CssProperty";
import FontFamily from "../classes/CSS/FontFamily";
import FontStyle from "../classes/CSS/FontStyle";
import FontWeight from "../classes/CSS/FontWeight";
import Glyph from "../classes/Glyph";
import GlyphOption from "../enums/GlyphOption";
import Option from "../interfaces/Option";
import Options from "../interfaces/Options";
import Randomizable from "../classes/Randomizable";
import TextDecorationColor from "../classes/CSS/TextDecorationColor";
import TextDecorationLine from "../classes/CSS/TextDecorationLine";
import TextDecorationStyle from "../classes/CSS/TextDecorationStyle";

import * as React from "react";

interface Props {
  options: Options;
  text: string;
}

interface State {
  reset: AppliedOptions,
  resetForSpaces: AppliedOptions,
}

export default class RandomCss extends React.Component<Props, State> {

  private spacesHaveStyle = false;

  constructor(props: Props) {
    super(props);
    this.state = {
      reset: { css: [], glyph: [] },
      resetForSpaces: { css: [], glyph: [] }
    };
  }

  private getAppliedOptions(): AppliedOptions {
    return {
      css: Object.entries(this.props.options.css)
        .map(([cssProperty, cssOption]: [CssProperty, Option]) => (
          cssOption.enabled === true
            ? cssProperty
            : null
        )).filter(Boolean),
      glyph: Object.entries(this.props.options.glyph)
      .map(([glyphOption, option]: [GlyphOption, Option]) => (
        option.enabled === true
          ? glyphOption
          : null
      )).filter(Boolean)
    };
  }

  private getClassName(): string {
    return [
      "random-css-container",
      this.props.options.global.unsafe === false
        ? `random-css-container-${
          String(this.props.options.global.size).replaceAll('.', '-')
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
          this.props.options.css?.animation,
          this.props.options.global?.unsafe
        );
      case CssProperty.BACKGROUND_COLOR:
        return new BackgroundColor(
          this.props.options.css.backgroundColor,
          this.props.options.global.unsafe
        );
      case CssProperty.BORDER_COLOR:
        return new BorderColor(
          this.props.options.css.borderColor,
          this.props.options.global.unsafe
        );
      case CssProperty.BORDER_RADIUS:
        return new BorderRadius(this.props.options.css.borderRadius);
      case CssProperty.BORDER_STYLE:
        return new BorderStyle(
          this.props.options.css.borderStyle,
          this.props.options.global.unsafe
        );
      case CssProperty.BORDER_WIDTH:
        return new BorderWidth(this.props.options.css.borderWidth);
      case CssProperty.COLOR:
        return new Color(
          this.props.options.css.color,
          this.props.options.global.unsafe
        );
      case CssProperty.FONT_FAMILY:
        return new FontFamily(this.props.options.css.fontFamily);
      case CssProperty.FONT_STYLE:
        return new FontStyle(
          this.props.options.css?.fontStyle,
          this.props.options.global.unsafe
        );
      case CssProperty.FONT_WEIGHT:
        return new FontWeight(this.props.options.css?.fontWeight);
      case CssProperty.TEXT_DECORATION_COLOR:
        return new TextDecorationColor(
          this.props.options.css.textDecorationColor,
          this.props.options.global.unsafe
        );
      case CssProperty.TEXT_DECORATION_LINE:
        return new TextDecorationLine(
          this.props.options.css.textDecorationLine
        );
      case CssProperty.TEXT_DECORATION_STYLE:
        return new TextDecorationStyle(
          this.props.options.css.textDecorationStyle
        );
    }
  }

  private getRandomizables(character: string): Randomizable[] {
    const randomizables: Array<Randomizable> = [];
    Object.values(CssProperty).forEach(optionName => {
      if (this.props.options.css?.[optionName]?.enabled === true) {
        randomizables.push(this.getRandomizableForCssProperty(optionName));
      }
    });
    const isLeetEnabled = this.props.options.glyph?.leet?.enabled === true;
    const isUnicodeEnabled = (
      this.props.options.glyph?.unicode?.enabled === true
    );
    if (isLeetEnabled || isUnicodeEnabled) {
      randomizables.push(new Glyph(character, isLeetEnabled, isUnicodeEnabled));
    }
    return randomizables;
  }

  render(): React.ReactNode {

    /**
     * This value serves as both the font size and the width of the divs
     * that contain the characters. The height of the divs will be equal to this
     * value multiplied by 1.1875.
     */
    const size = `${this.props.options.global.size}rem`;

    return (
      <div
        className={this.getClassName()}
        {
          ...(
            this.props.options.global.unsafe === true &&
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
              this.props.options.global.ignoreSpaces === true
            );
            const randomizables: Randomizable[] = ignore === true
              ? []
              : this.getRandomizables(character);
            const reset = ignore === true
              ? this.state.resetForSpaces
              : this.state.reset;
            return (
              <Character
                key={`${i}-${character}`}
                character={character}
                index={i}
                randomizables={randomizables}
                reset={reset}
                size={this.props.options.global.size}
                unsafe={this.props.options.global.unsafe}
              />
            );
          })
        }
      </div>
    );
  }

  componentDidUpdate(prevProps: Props, prevState: State) {

    /**
     * We just reset one or more CSS properties (or glyph) back to its default
     * value, which caused componentDidUpdate to be called again. Clear the
     * arrays in this.state.reset and return to avoid infinite re-renders.
     */
    if (this.state.reset.css.length > 0 || this.state.reset.glyph.length > 0) {
      this.setState({ reset: { css: [], glyph: [] } });
      return;
    }

    /**
     * We just cleared the arrays in this.state.reset, which caused
     * componentDidUpdate to be called again. Return to avoid infinite
     * re-renders.
     */
    if (
      (this.state.reset.css.length === 0 && prevState.reset.css.length !== 0) ||
      (
        this.state.reset.glyph.length === 0 &&
        prevState.reset.glyph.length !== 0
      )
    ) {
      return;
    }

    /**
     * Determine which CSS properties and glyph options were removed in this
     * update.
     */
    const reset: AppliedOptions = {
      css: Object.values(CssProperty).filter(cssProperty => (
        prevProps.options.css?.[cssProperty]?.enabled === true &&
        this.props.options.css?.[cssProperty]?.enabled !== true
      )),
      glyph: Object.values(GlyphOption).filter(glyphOption => (
        prevProps.options.glyph?.[glyphOption]?.enabled === true &&
        this.props.options.glyph?.[glyphOption]?.enabled !== true
      ))
    };

    /**
     * One or more CSS properties or glyph options has been removed. Reset the
     * characters to their default values.
     */
    if (reset.css.length > 0 || reset.glyph.length > 0) {
      this.setState({ reset });
    }

    /**
     * We just enabled ignoreSpaces and then reset one or more CSS properties
     * for spaces in the text, which caused componentDidUpdate to be called
     * again. Clear the arrays in this.state.reset and return to avoid infinite
     * re-renders.
     * TODO: No point in this.state.resetForSpaces.glyph?
     */
    if (
      this.state.resetForSpaces.css.length > 0 ||
      this.state.resetForSpaces.glyph.length > 0
    ) {
      this.setState({ resetForSpaces: { css: [], glyph: [] } });
      return;
    }

    /**
     * Just cleared the arrays in this.state.resetForSpaces, which caused
     * componentDidUpdate to be called again. Return to avoid infinite
     * re-renders.
     */
    if (
      (
        this.state.resetForSpaces.css.length === 0 &&
        prevState.resetForSpaces.css.length !== 0
      ) ||
      (
        this.state.resetForSpaces.glyph.length === 0 &&
        prevState.resetForSpaces.glyph.length !== 0
      )
    ) {
      return;
    }

    // Determine whether there any spaces in the text.
    const hasSpace = this.props.text.indexOf(' ') >= 0;

    /**
     * There are spaces in the text and ignoreSpaces has just been enabled.
     * Update state to reflect the CSS properties that need to be reset to their
     * default values for any spaces in the text.
     */
    if (
      hasSpace === true &&
      this.props.options.global.ignoreSpaces === true &&
      this.spacesHaveStyle === true
    ) {
      this.spacesHaveStyle = false;
      this.setState({ resetForSpaces: this.getAppliedOptions() });
      return;
    }

    /**
     * Determine whether any CSS properties are being randomized for spaces in
     * the text.
     */
    const appliedOptions = this.getAppliedOptions();
    this.spacesHaveStyle = (
      hasSpace === true &&
      (appliedOptions.css.length > 0 || appliedOptions.glyph.length > 0) &&
      this.props.options.global.ignoreSpaces === false
    );
  }
}
