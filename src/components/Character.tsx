import CssProperty from "../enums/CssProperty";
import OptionName from "../types/OptionName";
import Randomizable from "../classes/Randomizable";
import Randomizables from "../interfaces/Randomizables";
import Timeouts from "../interfaces/Timeouts";

import { Property as CssPropertyType } from 'csstype';
import * as React from "react";
import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";

interface Props {
  character: string;
  index: number;
  randomizables: Randomizables | null;
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
  size,
  unsafe
}: Props): React.ReactNode {

  const defaults = useRef<Style>({});
  const id = useMemo(() => `character-${index}`, [index]);
  const [state, setState] = useReducer(
    (state: State, newState: Partial<State>) => ({ ...state, ...newState }),
    { glyph: character, style: {} }
  );
  const _randomizables = useRef<Randomizables>(randomizables);
  const timeouts = useRef(
    [ ...Object.values(CssProperty), 'glyph' ].reduce(
      (accumulated, key) => ({
        ...accumulated,
        [key]: null, 
      }),
      {}
    ) as Timeouts
  );

  const reset = useCallback(
    (key: OptionName) => {
      const newState: State = { ...state };
      if (key === "glyph") {
        newState.glyph = character;
      } else {
        newState.style[key] = defaults.current[key];
      }
      setState(newState);
      timeouts.current[key] = null;
    },
    [character, defaults.current, setState, state, timeouts.current]
  );

  /**
   * When the component mounts, record the default CSS values.
   */
  useEffect(
    () => {
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
    },
    []
  );

  const timeoutFunction = useCallback(
    (randomizable: Randomizable, key: OptionName) => {
      if (randomizable === undefined) {
        return reset(key);
      }
      if (randomizable == null || _randomizables.current[key] == null) {
        return;
      }
      const name = randomizable.name as OptionName; 
      const newState = { ...state };
      const newValue = randomizable.getRandomValue();
      if (newValue !== undefined) {
        const comparator = name === 'glyph'
          ? state.glyph
          : state.style[name];
        if (newValue !== comparator) {
          if (name === 'glyph') {
            newState.glyph = newValue;
          } else {
            newState.style[name] = newValue;
          }
        }
        setState(newState);
      }
      timeouts.current[name] = setTimeout(
        () => timeoutFunction(_randomizables.current[name], name),
        (_randomizables.current[name] == null)
          ? 0
          : _randomizables.current[name].getRandomNumber(300, 3000)
      );
    },
    [_randomizables.current, state, timeouts.current]
  );

  // randomizables changed
  useEffect(
    () => {
      _randomizables.current ={ ...randomizables };
      const newState = { ...state };
      let update = false;

      /**
       * This condition is usually met when ignoreSpaces changes to true.
       */
      if (randomizables == null) {
        for (const _ of [...Object.values(CssProperty), 'glyph']) {
          const key = _ as OptionName;
          if (timeouts.current[key]) {
            update = true;
            if (key === "glyph") {
              newState.glyph = character;
            } else {
              newState.style[key] = defaults.current[key];
            }
          }
        }
        if (update) {
          setState(newState);
        }
        return;
      }
      Object.entries(_randomizables.current).forEach(([_, randomizable]) => {
        const key = _ as OptionName;
        if (randomizable == null) {
          if (timeouts.current[key] == null) {
            return;
          }
          update = true;
          if (key === "glyph") {
            newState.glyph = character;
          } else {
            newState.style[key] = defaults.current[key];
          }
        } else {
          timeouts.current[key] = setTimeout(
            () => timeoutFunction(randomizable, key),
            randomizable == null ? 0 : randomizable.getRandomNumber(300, 3000)
          );
        }
      });
      if (update) {
        setState(newState);
      }
    },
    [randomizables]
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
                  state.style.fontWeight as CssPropertyType.FontWeight
              }
            ),
            ...(
              state.style.textDecorationStyle !== undefined && {
                textDecorationStyle:
                  state.style.textDecorationStyle as
                    CssPropertyType.TextDecorationStyle
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
