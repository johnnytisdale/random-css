import CssProperty from "../enums/CssProperty";
import OptionName from "../types/OptionName";
import Randomizable from "../classes/Randomizable";
import Randomizables from "../interfaces/Randomizables";
import Timeouts from "../interfaces/Timeouts";

import { Property as CssPropertyType } from "csstype";
import * as React from "react";
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

interface Props {
  character: string;
  index: number;
  randomizables: Randomizables | null;
  size: number;
  unsafe: boolean;
}

type Style = {
  [value in CssProperty]?: string;
};

const DEFAULTS: Style = {
  borderWidth: "1px",
};

const reducer = (style: Style, newStyle: Style) => ({ ...style, ...newStyle });

export default function Character({
  character,
  index,
  randomizables,
  size,
  unsafe,
}: Props): React.ReactNode {
  const defaults = useRef<Style>({});
  const [glyph, setGlyph] = useState(character);
  const id = useMemo(() => `character-${index}`, [index]);
  const [style, setStyle] = useReducer(reducer, {});
  const _randomizables = useRef<Randomizables>(randomizables);
  const timeouts = useRef(
    [...Object.values(CssProperty), "glyph"].reduce(
      (accumulated, key) => ({ ...accumulated, [key]: null }),
      {}
    ) as Timeouts
  );

  /**
   * When the component mounts, record the default CSS values.
   */
  useEffect(() => {
    const element = document.getElementById(id);
    if (element === null) {
      return;
    }
    const computedStyle = getComputedStyle(element);
    Object.values(CssProperty).forEach((cssProperty: CssProperty) => {
      defaults.current[cssProperty] = Object.prototype.hasOwnProperty.call(
        DEFAULTS,
        cssProperty
      )
        ? DEFAULTS[cssProperty]
        : computedStyle[cssProperty];
    });
  }, []);

  const timeoutFunction = useCallback(
    (randomizable: Randomizable, key: OptionName) => {
      if (randomizable == null || _randomizables.current[key] == null) {
        return;
      }
      const name = randomizable.name as OptionName;
      const newValue = randomizable.getRandomValue();
      if (newValue !== undefined) {
        const comparator = name === "glyph" ? glyph : style[name];
        if (newValue !== comparator) {
          if (name === "glyph") {
            setGlyph(newValue);
          } else {
            setStyle({ [name]: newValue });
          }
        }
      }
      timeouts.current[name] = setTimeout(
        () => timeoutFunction(_randomizables.current[name], name),
        Randomizable.number(300, 3000)
      );
    },
    [_randomizables.current, style, timeouts.current]
  );

  // randomizables changed
  useEffect(() => {
    _randomizables.current = { ...randomizables };
    const newStyle: Style = {};
    let update = false;
    Object.entries(_randomizables.current).forEach(([_, randomizable]) => {
      const key = _ as OptionName;
      if (randomizable == null) {
        if (timeouts.current[key] == null) {
          return;
        }
        if (key === "glyph") {
          setGlyph(character);
        } else {
          update = true;
          newStyle[key] = defaults.current[key];
        }
        timeouts.current[key] = null;
      } else if (timeouts.current[key]) {
        /**
         * We don't need to add a new timeout for this one because it already
         * has a timeout.
         */
        return;
      } else {
        /**
         * This option was just enabled. There is no need to do setTimeout
         * here because that will happen at the end of timeoutFunction.
         */
        timeoutFunction(randomizable, key);
      }
    });
    if (update) {
      setStyle(newStyle);
    }
  }, [randomizables]);

  const getClassName = useCallback(
    () =>
      [
        unsafe === false
          ? `random-css-character-${String(size).replaceAll(".", "-")}`
          : null,
        ...Object.keys(style).map(
          (cssProperty: CssProperty) =>
            `random-css-${cssProperty}-${style[cssProperty]
              .replaceAll('"', "")
              .replaceAll(" ", "-")
              .replaceAll("%", "")}`
        ),
      ]
        .filter(Boolean)
        .join(" "),
    [size, style, unsafe]
  );

  // TODO: Figure out why unchecking border color sets classname to
  // random-css-borderColor-rgb(0,-0,-0)
  return (
    <div
      className={unsafe ? "random-css-character" : getClassName()}
      data-testid="character"
      id={id}
      style={
        unsafe === false
          ? null
          : {
              height: `${size * 1.1875}rem`,
              width: `${size}rem`,
              ...style,
              ...(style.fontWeight !== undefined && {
                fontWeight: style.fontWeight as CssPropertyType.FontWeight,
              }),
              ...(style.textDecorationStyle !== undefined && {
                textDecorationStyle:
                  style.textDecorationStyle as CssPropertyType.TextDecorationStyle,
              }),
            }
      }
    >
      {glyph}
    </div>
  );
}
