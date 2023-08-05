import AppliedOptions from "../interfaces/AppliedOptions";
import CssProperty from "../enums/CssProperty";
import Randomizable from "../classes/Randomizable";

import * as CSS from 'csstype';
import * as React from "react";
import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";

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

export default function Character({
  character,
  index,
  randomizables,
  reset,
  size,
  unsafe
}: Props): React.ReactNode {

  const defaults = useRef<Style>({});
  const id = useMemo(() => `character-${index}`, [index]);
  const interval = useRef<NodeJS.Timer>(null);
  const _randomizables = useRef<Randomizable[]>(randomizables);

  const [state, setState] = useReducer(
    (state: State, newState: Partial<State>) => ({ ...state, ...newState }),
    { glyph: character, style: {} }
  );

  const startTicking = useCallback(
    () => {
      interval.current = (
        setInterval(() => {
          let update = false;
          const newState: State = {
            glyph: state.glyph,
            style: state.style,
          };
          for (const randomizable of _randomizables.current) {
            if (!randomizable.isLimitReached()) {
              continue;
            }
            const name = randomizable.name as CssProperty | 'glyph';
            const newValue = randomizable.getRandomValue();
            if (newValue === undefined) {
              continue;
            }
            const comparator = name === 'glyph'
              ? state.glyph
              : state.style[name];
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
            setState(newState);
          }
        }, 300)
      );
    },
    [_randomizables]
  );

  // componentDidMount
  useEffect(
    () => {
      // Get the default CSS values.
      const element = document.getElementById(id);
      if (element === null) {
        return;
      }
      const style = getComputedStyle(element);
      Object.values(CssProperty).forEach((cssProperty: CssProperty) => {

        defaults.current[cssProperty] = Object.prototype.hasOwnProperty.call(
          DEFAULTS,
          cssProperty
        )
          ? DEFAULTS[cssProperty]
          : style[cssProperty];
      });
      if (randomizables.length > 0) {
        startTicking();
      }

      // componentWillUnmount
      return () => {
        clearInterval(interval.current);
        interval.current = null;
      }
    },
    []
  );

  // componentDidUpdate
  useEffect(
    () => {
      _randomizables.current = randomizables;
      if (randomizables.length === 0 && interval.current !== null) {
        clearInterval(interval.current);
        interval.current = null;
      } else if (randomizables.length > 0 && interval.current === null) {
        startTicking();
      }
      const newState: State = {
        glyph: state.glyph,
        style: state.style
      };
      let update = false;
      reset.css.forEach(property => {
        update = true;
        newState.style[property] = defaults.current[property];
      });
      if (reset.glyph.length > 0) {
        let hasGlyph = false;
        /**
         * TODO: Define randomizables as an object to reduce the complexity of
         * checking for the existence of a particular randomizable.
         */
        for (const randomizable of randomizables) {
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
          newState.glyph = character;
        }
      }
      if (update) {
        setState(newState);
      }
    },
    [interval.current, randomizables, reset, state]
  );

  const getClassName = useCallback(
    () => [
      unsafe === false
        ? `random-css-character-${String(size).replaceAll('.', '-')}`
        : null,
      ...Object.keys(state.style).map((cssProperty: CssProperty) => (
        `random-css-${cssProperty}-${state.style[cssProperty]
          .replaceAll('"', '')
          .replaceAll(' ', '-')
          .replaceAll('%', '')
        }`
      ))
    ].filter(Boolean).join(' '),
    [size, state.style, unsafe]
  );

  // TODO: Figure out why unchecking border color sets classname to
  // random-css-borderColor-rgb(0,-0,-0)
  return (
    <div
      className={
        unsafe ? 'random-css-character' : getClassName()
      }
      data-testid="character"
      id={id}
      style={
        unsafe === false
          ? null
          : {
            height: `${size * 1.1875}rem`,
            width: `${size}rem`,
            ...state.style,
            ...(
              state.style.fontWeight !== undefined && {
                fontWeight:
                  state.style.fontWeight as CSS.Property.FontWeight
              }
            ),
            ...(
              state.style.textDecorationStyle !== undefined && {
                textDecorationStyle:
                  state.style.textDecorationStyle as
                    CSS.Property.TextDecorationStyle
              }
            ),
          }
        }
    >
      { /* TODO: figure out why state.glyph is sometimes undefined! */ }
      {state.glyph ?? character}
    </div>
  );
}
