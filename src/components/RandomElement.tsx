import CssPropertyName from "../enums/CssPropertyName";
import { DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL } from "../values/defaults/RandomElementPropsDefaults";
import RandomCssUtils from "../classes/RandomCssUtils";
import RandomElementGenericProps from "../types/RandomElementGenericProps";
import Randomizables from "../types/Randomizables";
import Style from "../types/Style";
import StyleConfig from "../interfaces/StyleConfig";
import StyleInput from "../types/StyleInput";

import { Property as CssPropertyType } from "csstype";
import * as React from "react";
import { useEffect, useMemo, useReducer, useRef } from "react";

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
  const styleConfig = useMemo(() => {
    return RandomCssUtils.getConfigFromInput<StyleInput, StyleConfig>(
      styleInput
    );
  }, [styleInput]);
  const randomizables = useRef<Randomizables>();

  useEffect(() => {
    // TODO: Is this relying on user-supplied ID? What if they don't supply it?
    const element = document.getElementById(id);
    if (element) {
      const computedStyle = getComputedStyle(element);
      Object.values(CssPropertyName).forEach((cssProperty) => {
        defaults.current[cssProperty] = computedStyle[cssProperty];
      });
      randomizables.current = RandomCssUtils.getCssRandomizables(
        computedStyle,
        setStyle
      );
    }
  }, []);

  useEffect(() => {
    Object.entries(randomizables.current).forEach(([_, randomizable]) => {
      randomizable.setConfig(
        RandomCssUtils.getConfigForCssProperty(
          _ as CssPropertyName,
          styleConfig
        ),
        external
      );
    });
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
