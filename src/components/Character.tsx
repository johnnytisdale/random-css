import AppliedOptions from "../interfaces/AppliedOptions";
import CssProperty from "../enums/CssProperty";
import Randomizable from "../classes/Randomizable";

import * as CSS from 'csstype';
import * as React from "react";

interface Props {
  character: string;
  index: number;
  randomizables: Randomizable[];
  reset: AppliedOptions;
  size: number;
  unsafe: boolean;
}

type Style = {
  [value in CssProperty]?: string;
}

interface State {
  style: Style;
  glyph?: string;
}

const DEFAULTS: Style = {
  borderWidth: '1px'
}

export default class Character extends React.Component<Props, State> {

  default: Style = {};
  id: string;
  interval: NodeJS.Timer | null = null;
  ticks = 0;

  constructor(props: Props) {
    super(props);
    this.id = `character-${this.props.index}`;
    this.state = { glyph: this.props.character, style: {} };
  }

  componentDidMount() {

    // Get the default CSS values.
    const element = document.getElementById(this.id);
    if (element === null) {
      return;
    }
    const style = getComputedStyle(element);
    Object.values(CssProperty).forEach((cssProperty: CssProperty) => {

      this.default[cssProperty] = Object.prototype.hasOwnProperty.call(
        DEFAULTS,
        cssProperty
      )
        ? DEFAULTS[cssProperty]
        : style[cssProperty];
    });
    if (this.props.randomizables.length > 0) {
      this.startTicking();
    }
  }

  componentDidUpdate(): void {
    if (this.props.randomizables.length === 0 && this.interval !== null) {
      this.stopTicking();
    } else if (this.props.randomizables.length > 0 && this.interval === null) {
      this.startTicking();
    }
    const newState: State = {
      glyph: this.state.glyph,
      style: this.state.style
    };
    let update = false;
    this.props.reset.css.forEach(property => {
      update = true;
      newState.style[property] = this.default[property];

    });
    if (this.props.reset.glyph.length > 0) {
      let hasGlyph = false;
      /**
       * TODO: Define randomizables as an object to reduce the complexity of
       * checking for the existence of a particular randomizable.
       */
      for (const randomizable of this.props.randomizables) {
        if (randomizable.name === 'glyph') {
          hasGlyph = true;
          break;
        }
      }
      /**
       * Only reset the character to its default value if the other glyph option
       * is not also checked.
       */
      if (hasGlyph === false) {
        update = true;
        newState.glyph = this.props.character;
      }
    }
    if (update) {
      this.setState(newState);
    }
  }

  private getClassName(): string {
    return [
      this.props.unsafe === false
        ? `random-css-character-${String(this.props.size).replaceAll('.', '-')}`
        : null,
      ...Object.keys(this.state.style).map((cssProperty: CssProperty) => (
        `random-css-${cssProperty}-${this.state.style[cssProperty]
          .replaceAll('"', '')
          .replaceAll(' ', '-')
          .replaceAll('%', '')
        }`
      ))
    ].filter(Boolean).join(' ');
  }

  // TODO: Figure out why unchecking border color sets classname to
  // random-css-borderColor-rgb(0,-0,-0)
  render(): React.ReactNode {
    return (
      <div
        className={
          this.props.unsafe ? 'random-css-character' : this.getClassName()
        }
        data-testid="character"
        id={this.id}
        style={
          this.props.unsafe === false
            ? null
            : {
              height: `${this.props.size * 1.1875}rem`,
              width: `${this.props.size}rem`,
              ...this.state.style,
              ...(
                this.state.style.fontWeight !== undefined && {
                  fontWeight:
                    this.state.style.fontWeight as CSS.Property.FontWeight
                }
              ),
              ...(
                this.state.style.textDecorationStyle !== undefined && {
                  textDecorationStyle:
                    this.state.style.textDecorationStyle as
                      CSS.Property.TextDecorationStyle
                }
              ),
            }
          }
      >
        { /* TODO: figure out why this.state.glyph is sometimes undefined! */ }
        {this.state.glyph ?? this.props.character}
      </div>
    );
  }

  startTicking(): void {
    this.interval = setInterval(() => {
      let update = false;
      const newState: State = {
        glyph: this.state.glyph,
        style: this.state.style,
      };
      for (const randomizable of this.props.randomizables) {
        if (!randomizable.isLimitReached()) {
          continue;
        }
        const name = randomizable.name as CssProperty | 'glyph';
        const newValue = randomizable.getRandomValue();
        if (newValue === undefined) {
          continue;
        }
        const comparator = name === 'glyph'
          ? this.state.glyph
          : this.state.style[name];
        if (newValue !== comparator) {
          if (name === 'glyph') {
            newState.glyph = newValue;
          } else {
            newState.style[name] = newValue;
          }
          update = true;
        }
      }
      if (update) {
        this.setState(newState);
      }
    }, 300);
  }

  stopTicking(): void {
    if (this.interval != null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  componentWillUnmount() {
    this.stopTicking();
  }
}
