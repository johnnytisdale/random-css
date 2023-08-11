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

export default function RandomElement<Attributes, Element>({
  children,
  className: _className,
  element,
  external,
  fixedStyle,
  id,
  style: cssOptions,
  testID,
  ...nativeProps
}: RandomElementProps<Attributes, Element>): React.ReactNode {
  const defaults = useRef<Style>({});
  const [style, setStyle] = useReducer(RandomCssUtils.reducer<Style>, {});
  const _randomizables = useRef<Randomizables>(
    RandomCssUtils.getCssRandomizables(cssOptions, external)
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
    if (element) {
      const computedStyle = getComputedStyle(element);
      Object.values(CssPropertyName).forEach((cssProperty) => {
        defaults.current[cssProperty] = computedStyle[cssProperty];
      });
    }
  }, []);

  const timeoutFunction = useCallback(
    (key: CssPropertyName) => {
      if (_randomizables.current[key]) {
        setStyle({ [key]: _randomizables.current[key].getRandomValue() });
        timeouts.current[key] = setTimeout(
          () => timeoutFunction(key),
          Randomizable.number(300, 3000)
        );
      }
    },
    [style]
  );

  // style/external changed
  useEffect(() => {
    _randomizables.current = RandomCssUtils.getCssRandomizables(
      cssOptions,
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
  }, [cssOptions, external]);

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
  return React.createElement(
    element,
    {
      className,
      "data-testid": testID,
      id,
      style: memoizedStyle,
      ...nativeProps,
    },
    children
  );
}
