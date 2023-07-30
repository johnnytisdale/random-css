import "../styles/RandomCss.scss";

import Animation from "../classes/CSS/Animation";
import AppliedOptions from "../types/AppliedOptions";
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
import Options from "../types/Options";
import Randomizable from "../classes/Randomizable";
import TextDecorationColor from "../classes/CSS/TextDecorationColor";
import TextDecorationLine from "../classes/CSS/TextDecorationLine";
import TextDecorationStyle from "../classes/CSS/TextDecorationStyle";

import * as React from "react";
import Option from "../interfaces/Option";

interface Props {
  options: Options;
  size: number;
  text: string;
}

interface State {
  reset: AppliedOptions,
  resetForSpaces: AppliedOptions,
}

export default class RandomCss extends React.Component<Props, State> {

  private appliedOptions: AppliedOptions = { css: [], glyph: [] };
  private spacesHaveStyle = false;
  private renderCount = 0;

  constructor(props: Props) {
    super(props);
    this.state = {
      reset: { css: [], glyph: [] },
      resetForSpaces: { css: [], glyph: [] }
    };
    this.getRandomizables = this.getRandomizables.bind(this);
    this.setAppliedOptions = this.setAppliedOptions.bind(this);
    this.setAppliedOptions();
  }

  private setAppliedOptions(): void {
    this.appliedOptions.css = Object.entries(this.props.options.css)
      .map(
        ([cssProperty, cssOption]: [CssProperty, Option]) => cssOption.enabled
          ? cssProperty
          : null
      ).filter(value => value != null);
    this.appliedOptions.glyph = Object.entries(this.props.options.glyph)
      .map(
        ([glyphOption, option]: [GlyphOption, Option]) => option.enabled === true
          ? glyphOption
          : null
      ).filter(value => value != null);
  }

  private getRandomizableForCssProperty(option: CssProperty): Randomizable {
    switch (option) {
      case CssProperty.animation:
        return new Animation();
      case CssProperty.backgroundColor:
        return new BackgroundColor(this.props.options.global.unsafe);
      case CssProperty.borderColor:
        return new BorderColor(this.props.options.global.unsafe);
      case CssProperty.borderRadius:
        return new BorderRadius();
      case CssProperty.borderStyle:
        return new BorderStyle(this.props.options.global.unsafe);
      case CssProperty.borderWidth:
        return new BorderWidth(1, 3);
      case CssProperty.color:
        return new Color(this.props.options.global.unsafe);
      case CssProperty.fontFamily:
        return new FontFamily();
      case CssProperty.fontStyle:
        return new FontStyle(this.props.options.global.unsafe);
      case CssProperty.fontWeight:
        return new FontWeight();
      case CssProperty.textDecorationColor:
        return new TextDecorationColor(this.props.options.global.unsafe);
      case CssProperty.textDecorationLine:
        return new TextDecorationLine();
      case CssProperty.textDecorationStyle:
        return new TextDecorationStyle();
    }
  }

  private getRandomizables(character: string): Randomizable[] {
    const randomizables: Array<Randomizable> = [];
    Object.values(CssProperty).forEach(optionName => {
      if (
        this.props.options.css[optionName] !== undefined &&
        this.props.options.css[optionName].enabled === true
      ) {
        randomizables.push(this.getRandomizableForCssProperty(optionName));
      }
    })
    if (this.props.options.glyph.leet || this.props.options.glyph.unicode) {
      randomizables.push(new Glyph(
        character,
        this.props.options.glyph.leet.enabled,
        this.props.options.glyph.unicode.enabled
      ));
    }
    return randomizables;
  }

  render(): React.ReactNode {

    this.renderCount++;

    /**
     * This value serves as both the font size and the width of the divs
     * that contain the characters. The height of the divs will be equal to this
     * value multiplied by 1.1875.
     */
    const size = `${this.props.size}rem`;

    return (
      <div className="random-css-container" style={{ fontSize: size, margin: "auto", width: "min-content" }}>
        {
          this.props.text.split('').map((character, i) => {
            const ignore = character === ' '
              && this.props.options.global.ignoreSpaces;
            const randomizables: Randomizable[] = ignore
              ? []
              : this.getRandomizables(character);
            const reset = ignore
              ? this.state.resetForSpaces
              : this.state.reset;
            return (
              <Character
                key={`${i}-${character}`}
                character={character}
                height={`${this.props.size * 1.1875}rem`}
                index={i}
                randomizables={randomizables}
                reset={reset}
                unsafe={this.props.options.global.unsafe}
                width={size}
              />
            );
          })
        }
      </div>
    );
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.reset.css.length || this.state.reset.glyph.length) {
      this.setState({ reset: { css: [], glyph: [] } });
      return;
    }
    if (
      (this.state.reset.css.length === 0 && prevState.reset.css.length !== 0) ||
      (this.state.reset.glyph.length === 0 && prevState.reset.glyph.length !== 0)
    ) {
      return;
    }
    const reset: AppliedOptions = { css: [], glyph: [] };
    Object.entries(this.props.options.css).forEach(([cssProperty, cssOption]: [CssProperty, Option]) => {
      if (cssOption.enabled === false && this.appliedOptions.css.includes(cssProperty)) {
        console.log('Adding ' + cssProperty + ' to reset');
        reset.css.push(cssProperty);
      }
    });
    Object.entries(this.props.options.glyph).forEach(([glyphOption, option]: [GlyphOption, Option]) => {
      if (option.enabled === false && this.appliedOptions.glyph.includes(glyphOption)) {
        console.log('Adding ' + glyphOption + ' to reset');
        reset.glyph.push(glyphOption);
      }
    });
    this.setAppliedOptions();
    if (reset.css.length || reset.glyph.length) {
      console.log({ reset });
      this.setState({ reset });
    }
    if (this.state.resetForSpaces.css.length || this.state.resetForSpaces.glyph.length) {
      this.spacesHaveStyle = false;
      this.setState({ resetForSpaces: { css: [], glyph: [] } });
      return;
    }
    if (
      (this.state.resetForSpaces.css.length === 0 && prevState.resetForSpaces.css.length !== 0) ||
      (this.state.resetForSpaces.glyph.length === 0 && prevState.resetForSpaces.glyph.length !== 0)
    ) {
      return;
    }
    const hasSpace = this.props.text.indexOf(' ') >= 0;
    if (hasSpace && this.props.options.global.ignoreSpaces && this.spacesHaveStyle) {
      console.log('reset: spaces have style...');
      this.setState({
        resetForSpaces: {
          css: this.appliedOptions.css.map(option => option),
          glyph: this.appliedOptions.glyph.map(option => option)
        }
      });
      return;
    }
    this.spacesHaveStyle = hasSpace &&
      (
        this.appliedOptions.css.length > 0 ||
        this.appliedOptions.glyph.length > 0
      ) &&
      !this.props.options.global.ignoreSpaces;
  }
}