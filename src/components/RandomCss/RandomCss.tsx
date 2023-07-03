import * as React from "react";
import BackgroundColor from "../../classes/CssProperty/BackgroundColor";
import Character from "../Character";
import Color from "../../classes/CssProperty/Color";
import Randomizable from "../../classes/Randomizable";
import "./style.scss";
import TextDecorationColor from "../../classes/CssProperty/TextDecorationColor";
import TextDecorationLine from "../../classes/CssProperty/TextDecorationLine";
import BorderWidth from "../../classes/CssProperty/BorderWidth";
import BorderStyle from "../../classes/CssProperty/BorderStyle";
import BorderColor from "../../classes/CssProperty/BorderColor";
import BorderRadius from "../../classes/CssProperty/BorderRadius";
import IOptions from "../../interfaces/IOptions";
import FontFamily from "../../classes/CssProperty/FontFamily";
import FontStyle from "../../classes/CssProperty/FontStyle";
import FontWeight from "../../classes/CssProperty/FontWeight";

interface Props {
  clearReset: Function;
  options: IOptions;
  reset: string[];
  size: number;
  text: string;
}

export default class RandomCss extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    console.log("    RandomCss constructed.");
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
            const randomizables: Randomizable[] = [];
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
            return (
              <Character
                key={i}
                character={character}
                height={`${this.props.size * 1.1875}rem`}
                index={i}
                randomizables={randomizables}
                reset={this.props.reset}
                width={size}
              />
            );
          })
        }
      </div>
    );
  }

  componentDidUpdate(prevProps: Props) {
    console.log("    RandomCss updated.");
    if (this.props.reset.length) {
      this.props.clearReset();
    }
  }
}