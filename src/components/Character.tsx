import AppliedOptions from "../types/AppliedOptions";
import ECssProperty from "../enums/CssProperty";
import Randomizable from "../classes/Randomizable";

import * as CSS from 'csstype';
import * as React from "react";

interface Props {
  character: string;
  height: number | string;
  index: number;
  randomizables: Randomizable[];
  reset: AppliedOptions;
  unsafe: boolean;
  width: number | string;
}

type Style = {
  [key in ECssProperty]?: string;
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
  interval: NodeJS.Timer | null;
  ticks = 0;

  constructor(props: Props) {
    super(props);
    this.id = `character-${this.props.index}`;
    const initialState: State = { glyph: this.props.character, style: {} };
    this.state = initialState;
    this.getClassname = this.getClassname.bind(this);
    this.startTicking = this.startTicking.bind(this);
  }

  componentDidMount() {

    // Get the default CSS values.
    const element = document.getElementById(this.id);
    if (element == null) {
      console.log(`Failed to get element ${this.id}!`)
      return;
    }
    const style = getComputedStyle(element);
    Object.keys(ECssProperty).forEach((cssProperty: ECssProperty) => {

      this.default[cssProperty] = Object.prototype.hasOwnProperty.call(DEFAULTS, cssProperty)
        ? DEFAULTS[cssProperty]
        : style[cssProperty];
    });
    if (this.props.randomizables.length) {
      this.startTicking();
    }
  }

  componentDidUpdate(): void {
    if (!this.props.randomizables.length && this.interval) {
      this.stopTicking();
    } else if (this.props.randomizables.length && !this.interval) {
      this.startTicking();
    }
    const newState: State = {
      glyph: this.state.glyph,
      style: this.state.style
    };
    let update = false;
    this.props.reset.css.forEach(property => {
      console.log(`            Resetting ${property} to default value: ${this.default[property]}.`);
      update = true;
      newState.style[property] = this.default[property];

    });
    if (this.props.reset.glyph.length) {
      let hasGlyph = false;
      for (const randomizable of this.props.randomizables) {
        if (randomizable.name === 'glyph') {
          hasGlyph = true;
        }
      }
      if (!hasGlyph) {
        console.log(`            Resetting glyph to default value: ${this.props.character}.`);
        update = true;
        newState.glyph = this.props.character;
      }
    }
    if (update) {
      this.setState(newState);
    }
  }

  private getClassname(): string {
    const classNames: Array<string> = [];
    Object.keys(this.state.style).forEach((cssProperty: ECssProperty) => {
      classNames.push(
        `random-css-${cssProperty}-${this.state.style[cssProperty]
          .replaceAll('"', '')
          .replaceAll(' ', '-')
          .replaceAll('%', '')
        }`
      );
    });
    return classNames.join(' ');
  }

  // TODO: Figure out why unchecking border color sets classname to
  // random-css-borderColor-rgb(0,-0,-0)
  render(): React.ReactNode {
    return (
      <div
        className={this.props.unsafe ? '' : this.getClassname()}
        data-testid="character"
        id={this.id}
        style={{

          ...(this.props.unsafe && {
            ...this.state.style,
            ...(this.state.style.fontWeight !== undefined && { fontWeight: this.state.style.fontWeight as CSS.Property.FontWeight }),
            ...(this.state.style.textDecorationStyle !== undefined && { textDecorationStyle: this.state.style.textDecorationStyle as CSS.Property.TextDecorationStyle }),
          }),

          height: this.props.height,
          width: this.props.width
        }}
      >
        { /* TODO: figure out why this.state.glyph is sometimes undefined! */ }
        {this.state.glyph ?? this.props.character}
      </div>
    );
  }

  startTicking(): void {
    this.interval = setInterval(() => {
      // console.log("            Tick.", Math.random());
      let update = false;
      const newState: State = {
        glyph: this.state.glyph,
        style: this.state.style,
      };
      for (const randomizable of this.props.randomizables) {
        if (!randomizable.isLimitReached()) {
          continue;
        }
        const name = randomizable.name as ECssProperty | 'glyph';
        const newValue = randomizable.getRandomValue();
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
        } else if (newValue) {
          console.log("            newValue = ", newValue, ", so not updating.");
        }
      }
      if (update) {
        console.log('            ', this.props.character + ": Setting state: " + JSON.stringify(newState));
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