import * as React from "react";
import BackgroundColor from "../../classes/CSS/BackgroundColor";
import Character from "../Character";
import Color from "../../classes/CSS/Color";
import Randomizable from "../../classes/Randomizable";
import "./style.scss";
import TextDecorationColor from "../../classes/CSS/TextDecorationColor";
import TextDecorationLine from "../../classes/CSS/TextDecorationLine";
import Animation from "../../classes/CSS/Animation";
import BorderWidth from "../../classes/CSS/BorderWidth";
import BorderStyle from "../../classes/CSS/BorderStyle";
import BorderColor from "../../classes/CSS/BorderColor";
import BorderRadius from "../../classes/CSS/BorderRadius";
import FontFamily from "../../classes/CSS/FontFamily";
import FontStyle from "../../classes/CSS/FontStyle";
import FontWeight from "../../classes/CSS/FontWeight";
import Options from "../../types/Options";
import ECssProperty from "../../enums/ECssProperty";
import Glyph from "../../classes/Glyph";

interface Props {
  options: Options;
  size: number;
  text: string;
}

type State = {
  stylesToReset: Array<ECssProperty>,
  stylesToResetForSpaces: Array<ECssProperty>,
};

export default class RandomCss extends React.Component<Props, State> {

  private appliedStyles: Array<ECssProperty>;
  private spacesHaveStyle: boolean = false;

  constructor(props: Props) {
    super(props);
    console.log("    RandomCss constructed.");
    this.state = {
      stylesToReset: [],
      stylesToResetForSpaces: []
    };
    this.getRandomizables = this.getRandomizables.bind(this);
    this.setAppliedStyles = this.setAppliedStyles.bind(this);
    this.setAppliedStyles();
  }

  private setAppliedStyles(): void {
    this.appliedStyles = Object.entries(this.props.options.css)
      .map((entry: [ECssProperty, boolean]) => entry[1] ? entry[0] : null)
      .filter(value => value != null);
  }

  private getRandomizables(character: string): Randomizable[] {
    const randomizables: Array<Randomizable> = [];
    if (this.props.options.css.animation) {
      randomizables.push(new Animation());
    }
    if (this.props.options.css.backgroundColor) {
      randomizables.push(new BackgroundColor(this.props.options.global.unsafe));
    }
    if (this.props.options.css.borderColor) {
      randomizables.push(new BorderColor(this.props.options.global.unsafe));
    }
    if (this.props.options.css.borderRadius) {
      randomizables.push(new BorderRadius());
    }
    if (this.props.options.css.borderStyle) {
      randomizables.push(new BorderStyle());
    }
    if (this.props.options.css.borderWidth) {
      randomizables.push(new BorderWidth(1, 3));
    }
    if (this.props.options.css.color) {
      randomizables.push(new Color(this.props.options.global.unsafe));
    }
    if (this.props.options.css.fontFamily) {
      randomizables.push(new FontFamily());
    }
    if (this.props.options.css.fontStyle) {
      randomizables.push(new FontStyle());
    }
    if (this.props.options.css.fontWeight) {
      randomizables.push(new FontWeight());
    }
    if (this.props.options.css.textDecorationColor) {
      randomizables.push(new TextDecorationColor(this.props.options.global.unsafe));
    }
    if (this.props.options.css.textDecorationLine) {
      randomizables.push(new TextDecorationLine());
    }
    if (this.props.options.glyph.leet || this.props.options.glyph.unicode) {
      randomizables.push(new Glyph(
        character,
        this.props.options.glyph.leet,
        this.props.options.glyph.unicode
      ));
    }
    return randomizables;
  }

  render(): React.ReactNode {

    console.log("    RandomCss rendered.");

    /**
     * This value serves as both the font size and the width of the divs
     * that contain the characters.
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
              ? this.state.stylesToResetForSpaces
              : this.state.stylesToReset;
            return (
              <Character
                key={i}
                character={character}
                height={`${this.props.size * 1.1875}rem`}
                index={i}
                randomizables={randomizables}
                reset={reset}
                width={size}
              />
            );
          })
        }
      </div>
    );
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    console.log("    RandomCss updated.");
    if (this.state.stylesToReset.length) {
      this.setState({ stylesToReset: [] });
      return;
    }
    if (this.state.stylesToReset.length === 0 && prevState.stylesToReset.length !== 0) {
      return;
    }
    const hasSpace = this.props.text.indexOf(' ') >= 0;
    const stylesToReset: Array<ECssProperty> = [];
    Object.entries(this.props.options.css).forEach(([cssProperty, checked]: [ECssProperty, boolean]) => {
      if (!checked && this.appliedStyles.includes(cssProperty)) {
        stylesToReset.push(cssProperty);
      }
    });
    this.setAppliedStyles();
    if (stylesToReset.length) {
      this.setState({ stylesToReset });
    }
    if (this.state.stylesToResetForSpaces.length) {
      this.spacesHaveStyle = false;
      this.setState({ stylesToResetForSpaces: [] });
      return;
    }
    if (this.state.stylesToResetForSpaces.length === 0 && prevState.stylesToResetForSpaces.length !== 0) {
      return;
    }
    if (hasSpace && this.props.options.global.ignoreSpaces && this.spacesHaveStyle) {
      this.setState({ stylesToResetForSpaces: this.appliedStyles.map(style => style) });
      return;
    }
    this.spacesHaveStyle = hasSpace && this.appliedStyles.length > 0 && !this.props.options.global.ignoreSpaces;
  }
}