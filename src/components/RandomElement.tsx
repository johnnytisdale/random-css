import CssPropertyName from "../enums/CssPropertyName";
import { DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL } from "../values/defaults/RandomElementPropsDefaults";
import RandomCssUtils from "../classes/RandomCssUtils";
import RandomElementGenericProps from "../types/RandomElementGenericProps";
import Randomizable from "../classes/Randomizable";
import Randomizables from "../types/Randomizables";
import Style from "../types/Style";
import StyleConfig from "../interfaces/StyleConfig";
import StyleInput from "../types/StyleInput";
import Timeouts from "../types/Timeouts";

import { Property as CssPropertyType } from "csstype";
import * as React from "react";
import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";

export default function RandomElement<Attributes, Element>({
  children,
  className: classNameInput,
  element,
  external = DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL,
  fixedStyle,
  id,
  style: styleInput,
  testID,
  ...nativeProps
}: RandomElementGenericProps<Attributes, Element>): React.ReactNode {
  const defaults = useRef<Style>({});
  const [style, setStyle] = useReducer(RandomCssUtils.reducer<Style>, {});
  const styleConfig = useMemo(
    () =>
      RandomCssUtils.getConfigFromInput<StyleInput, StyleConfig>(styleInput),
    [styleInput]
  );
  const randomizables = useRef<Randomizables>(
    RandomCssUtils.getCssRandomizables(styleConfig ?? {}, external)
  );
  const timeouts = useRef(
    Object.values(CssPropertyName).reduce(
      (accumulated, key) => ({ ...accumulated, [key]: null }),
      {}
    ) as Timeouts
  );

  // When the component mounts, record the default CSS values.
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
      if (randomizables.current[key]) {
        setStyle({ [key]: randomizables.current[key].getRandomValue() });
        if (randomizables.current[key].shouldRepeat) {
          timeouts.current[key] = setTimeout(
            () =>
              randomizables.current[key]?.shouldRepeat && timeoutFunction(key),
            Randomizable.number(
              randomizables.current[key].minDelay,
              randomizables.current[key].maxDelay
            )
          );
        }
      }
    },
    [style]
  );

  // style/external changed
  useEffect(() => {
    const previousRandomizables = { ...randomizables.current };
    randomizables.current = RandomCssUtils.getCssRandomizables(
      styleConfig,
      external
    );
    const newStyle: Style = {};
    let update = false;
    Object.entries(randomizables.current).forEach(([_, randomizable]) => {
      const key = _ as CssPropertyName;
      if (randomizable == null) {
        if (
          timeouts.current[key] == null &&
          previousRandomizables[key]?.shouldRepeat !== false
        ) {
          return;
        }
        update = true;
        newStyle[key] = defaults.current[key];
        timeouts.current[key] = null;
      } else if (timeouts.current[key]) {
        // Already has a timeout. But maybe they set shouldRepeat to false.
        if (!randomizable.shouldRepeat) {
          timeouts.current[key] = null;
        } else if (
          previousRandomizables[key]?.maxDelay !== randomizable.maxDelay ||
          previousRandomizables[key]?.minDelay !== randomizable.minDelay
        ) {
          clearTimeout(timeouts.current[key]);
          timeouts.current[key] = setTimeout(
            () =>
              randomizables.current[key]?.shouldRepeat && timeoutFunction(key),
            Randomizable.number(randomizable.minDelay, randomizable.maxDelay)
          );
        }
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
  }, [external, styleConfig]);

  const className = useMemo(() => {
    const classes = [];
    if (classNameInput) {
      classes.push(classNameInput);
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
    return classes.length ? classes.filter(Boolean).join(" ") : null;
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
