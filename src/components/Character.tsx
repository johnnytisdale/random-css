import AppliedOptions from "../types/AppliedOptions";
import ECssProperty from "../enums/ECssProperty";
import Randomizable from "../classes/Randomizable";

import * as CSS from 'csstype';
import * as React from "react";

type Props = {
  character: string;
  height: number | string;
  index: number;
  randomizables: Randomizable[];
  reset: AppliedOptions;
  width: number | string;
}

type Style = {
  [key in ECssProperty]?: string;
}

type State = {
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
    this.startTicking = this.startTicking.bind(this);
    console.log("        Character constructed.");
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
    console.log("        Character mounted.");
  }

  componentDidUpdate(): void {
    console.log("        Character updated.");
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

  render(): React.ReactNode {
    console.log("        Character rendered.");
    return (
      <div
        data-testid={this.id}
        id={this.id}
        style={{
          ...this.state.style,
          ...(this.state.style.fontWeight !== undefined && { fontWeight: this.state.style.fontWeight as CSS.Property.FontWeight }),
          ...(this.state.style.textDecorationStyle !== undefined && { textDecorationStyle: this.state.style.textDecorationStyle as CSS.Property.TextDecorationStyle }),
          height: this.props.height,
          width: this.props.width
        }}
      >
        {this.state.glyph}
      </div>
    );
  }

  startTicking(): void {
    this.interval = setInterval(() => {
      console.log("            Tick.", Math.random());
      let update = false;
      const newState: State = {
        glyph: this.state.glyph,
        style: this.state.style,
      };
      for (const randomizable of this.props.randomizables) {
        const name = randomizable.name as ECssProperty | 'glyph';
        const newValue = randomizable.isLimitReached();
        const comparator = name === 'glyph'
          ? this.state.glyph
          : this.state.style[name];
        if (newValue !== false && newValue != comparator) {
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