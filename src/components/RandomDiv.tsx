import CssPropertyName from "../enums/CssPropertyName";
import { Property as CssPropertyNameType } from "csstype";
import RandomCssUtils from "../classes/RandomCssUtils";
import RandomElementProps from "../interfaces/RandomElementProps";
import Randomizable from "../classes/Randomizable";
import Randomizables from "../interfaces/Randomizables";
import Style from "../types/Style";
import Timeouts from "../interfaces/Timeouts";

import * as React from "react";
import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";

const DEFAULTS: Style = {
  borderWidth: "1px",
};

export default function Div({
  children,
  className: _className,
  id,
  external,
  fixedStyle,
  style: _style,
  testID,
}: RandomElementProps): React.ReactNode {
  const defaults = useRef<Style>({});
  const [style, setStyle] = useReducer(RandomCssUtils.reducer<Style>, {});
  const _randomizables = useRef<Randomizables>(
    RandomCssUtils.getRandomizables(_style, external !== true)
  );
  const timeouts = useRef(
    Object.values(CssPropertyName).reduce(
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
    Object.values(CssPropertyName).forEach((cssProperty: CssPropertyName) => {
      defaults.current[cssProperty] = Object.prototype.hasOwnProperty.call(
        DEFAULTS,
        cssProperty
      )
        ? DEFAULTS[cssProperty]
        : computedStyle[cssProperty];
    });
  }, []);

  const timeoutFunction = useCallback(
    (randomizable: Randomizable, key: CssPropertyName) => {
      if (randomizable == null || _randomizables.current[key] == null) {
        return;
      }
      const name = randomizable.name as CssPropertyName;
      const newValue = randomizable.getRandomValue();
      if (newValue !== undefined && newValue !== style[name]) {
        setStyle({ [name]: newValue });
      }
      timeouts.current[name] = setTimeout(
        () => timeoutFunction(_randomizables.current[name], name),
        Randomizable.number(300, 3000)
      );
    },
    [_randomizables.current, style, timeouts.current]
  );

  // style/external changed
  useEffect(() => {
    _randomizables.current = RandomCssUtils.getRandomizables(
      _style,
      external !== true
    );
    const newStyle: Style = {};
    let update = false;
    Object.entries(_randomizables.current).forEach(([_, randomizable]) => {
      const key = _ as CssPropertyName;
      if (randomizable == null) {
        if (timeouts.current[key] == null) {
          return;
        }
        update = true;
        newStyle[key] = defaults.current[key];
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
  }, [_style, external]);

  const className = useMemo(() => {
    const classes = [];
    if (_className) {
      classes.push(_className);
    }
    if (external === true) {
      classes.push(
        ...Object.keys(style).map(
          (cssProperty: CssPropertyName) =>
            `random-css-${cssProperty}-${style[cssProperty]
              .replaceAll('"', "")
              .replaceAll(" ", "-")
              .replaceAll("%", "")}`
        )
      );
    }
    return classes.filter(Boolean).join(" ");
  }, [external, style]);

  const memoizedStyle = useMemo(
    () => ({
      ...fixedStyle,
      ...(external === true
        ? null
        : {
            ...style,
            ...(style.fontWeight !== undefined && {
              fontWeight: style.fontWeight as CssPropertyNameType.FontWeight,
            }),
            ...(style.textDecorationStyle !== undefined && {
              textDecorationStyle:
                style.textDecorationStyle as CssPropertyNameType.TextDecorationStyle,
            }),
          }),
    }),
    [external, fixedStyle, style]
  );

  // TODO: Figure out why unchecking border color sets classname to
  // random-css-borderColor-rgb(0,-0,-0)
  return (
    <div
      className={className}
      id={id}
      style={memoizedStyle}
      {...(testID && { "data-testid": testID })}
    >
      {children}
    </div>
  );
}