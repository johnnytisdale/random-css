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

interface IProps {
  clearReset: Function;
  options: IOptions;
  reset: string[];
  size: number;
  text: string;
}

export default class RandomCss extends React.Component<IProps> {

  constructor(props) {
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

            if (this.props.options.css.borderColor) {
              console.log('Randomizing borderColor');
              randomizables.push(new BorderColor(this.props.options.global.unsafe));
            }
            if (this.props.options.css.borderRadius) {
              console.log('Randomizing borderRadius');
              randomizables.push(new BorderRadius());
            }
            if (this.props.options.css.borderStyle) {
              console.log('Randomizing borderStyle');
              randomizables.push(new BorderStyle());
            }
            if (this.props.options.css.borderWidth) {
              console.log('Randomizing borderWidth');
              randomizables.push(new BorderWidth(1, 3));
            }
            if (this.props.options.css.color) {
              randomizables.push(new Color(this.props.options.global.unsafe));
            }
            if (this.props.options.css.backgroundColor) {
              console.log('Randomizing backgroundColor');
              randomizables.push(new BackgroundColor(this.props.options.global.unsafe));
            }
            if (this.props.options.css.textDecorationColor) {
              console.log('Randomizing textDecorationColor');
              randomizables.push(new TextDecorationColor(this.props.options.global.unsafe));
            }
            if (this.props.options.css.textDecorationLine) {
              console.log('Randomizing textDecorationLine');
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

  componentDidUpdate(prevProps: IProps) {
    console.log("    RandomCss updated.");
    if (this.props.reset.length) {
      this.props.clearReset();
    }
  }
}