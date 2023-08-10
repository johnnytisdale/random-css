import CssPropertyName from "../enums/CssPropertyName";
import RandomCssUtils from "../classes/RandomCssUtils";
import RandomElementProps from "../interfaces/RandomElementProps";
import Randomizable from "../classes/Randomizable";
import Randomizables from "../interfaces/Randomizables";
import Style from "../types/Style";
import Timeouts from "../interfaces/Timeouts";

import { Property as CssPropertyType } from "csstype";
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
    RandomCssUtils.getCssRandomizables(_style, external)
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
    (key: CssPropertyName) => {
      if (_randomizables.current[key] == null) {
        return;
      }
      const newValue = _randomizables.current[key].getRandomValue();
      if (newValue !== undefined && newValue !== style[key]) {
        setStyle({ [key]: newValue });
      }
      timeouts.current[key] = setTimeout(
        () => timeoutFunction(key),
        Randomizable.number(300, 3000)
      );
    },
    [style]
  );

  // style/external changed
  useEffect(() => {
    _randomizables.current = RandomCssUtils.getCssRandomizables(
      _style,
      external
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
        timeoutFunction(key);
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
    if (external) {
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
      ...(external
        ? null
        : {
            ...style,
            ...(style.fontWeight !== undefined && {
              fontWeight: style.fontWeight as CssPropertyType.FontWeight,
            }),
            ...(style.textDecorationStyle !== undefined && {
              textDecorationStyle:
                style.textDecorationStyle as CssPropertyType.TextDecorationStyle,
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
