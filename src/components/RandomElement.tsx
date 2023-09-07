import CssProperty from "../classes/CSS/CssProperty";
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
  plugins,
  style: styleInput,
  testID,
  ...nativeProps
}: RandomElementGenericProps<Attributes, Element>): React.ReactNode {
  const [style, setStyle] = useReducer(RandomCssUtils.reducer<Style>, {});
  const styleConfig = useMemo(
    () =>
      RandomCssUtils.addPluginsToStyleConfig(
        RandomCssUtils.getConfigFromInput<StyleInput, StyleConfig>(styleInput),
        plugins
      ),
    [plugins, styleInput]
  );
  const randomizables = useRef<Randomizables>(
    RandomCssUtils.getCssRandomizables(setStyle)
  );

  useEffect(() => {
    Object.entries(randomizables.current).forEach(
      ([cssPropertyName, randomizable]: [CssPropertyName, CssProperty]) => {
        randomizable.setConfig(
          RandomCssUtils.getConfigForCssProperty(cssPropertyName, styleConfig),
          external
        );
      }
    );
  }, [external, styleConfig]);

  const className = useMemo(() => {
    const classes = classNameInput ? [classNameInput] : [];
    if (external) {
      Object.keys(style).forEach((cssPropertyName: CssPropertyName) => {
        if (style[cssPropertyName]) {
          classes.push(
            `random-css-${cssPropertyName}-${style[cssPropertyName]
              .replaceAll('"', "")
              .replaceAll(" ", "-")
              .replaceAll("%", "")}`
          );
        }
      });
    }
    return classes.length ? classes.filter(Boolean).join(" ") : null;
  }, [external, style]);

  const styleFromPlugins = useMemo(
    () => ({
      [plugins?.colorContrast?.secondary?.cssPropertyName]:
        plugins?.colorContrast?.secondary?.style[
          plugins?.colorContrast?.secondary?.cssPropertyName
        ],
    }),
    [plugins?.colorContrast?.secondary]
  );

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
            ...styleFromPlugins,
          }),
    }),
    [external, fixedStyle, style, styleFromPlugins]
  );

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
