import "../styles/RandomString.scss";

import CssPropertyName from "../enums/CssPropertyName";
import DEFAULT_GLYPH_CONFIG from "../values/defaults/DefaultGlyphConfig";
import { DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL } from "../values/defaults/RandomElementPropsDefaults";
import {
  DEFAULT_RANDOM_STRING_PROPS_CENTER,
  DEFAULT_RANDOM_STRING_PROPS_IGNORE_SPACES,
  DEFAULT_RANDOM_STRING_PROPS_SIZE,
  DEFAULT_RANDOM_STRING_PROPS_TEXT,
} from "../values/defaults/RandomStringPropsDefaults";
import GlyphConfig from "../interfaces/GlyphConfig";
import GlyphInput from "../types/GlyphInput";
import RandomCharacter from "./RandomCharacter";
import RandomCssUtils from "../classes/RandomCssUtils";
import { RandomDiv } from "./RandomElements";
import Randomizable from "../classes/Randomizable";
import RandomStringProps from "../interfaces/RandomStringProps";
import StyleConfig from "../interfaces/StyleConfig";
import StyleInput from "../types/StyleInput";

import * as React from "react";
import { useMemo } from "react";

export default function RandomString({
  center = DEFAULT_RANDOM_STRING_PROPS_CENTER,
  className,
  external = DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL,
  glyph: glyphInput = DEFAULT_GLYPH_CONFIG,
  ignoreSpaces = DEFAULT_RANDOM_STRING_PROPS_IGNORE_SPACES,
  size = DEFAULT_RANDOM_STRING_PROPS_SIZE,
  style: styleInput,
  text = DEFAULT_RANDOM_STRING_PROPS_TEXT,
  ...nativeProps
}: RandomStringProps): React.ReactNode {
  const glyphConfig = useMemo(
    () =>
      RandomCssUtils.getConfigFromInput<GlyphInput, GlyphConfig>(glyphInput),
    [glyphInput]
  );
  const memoizedClassName = useMemo(() => {
    const classNames = ["random-css-string"];
    if (external) {
      classNames.push(`random-css-string-${String(size).replaceAll(".", "-")}`);
      if (center) {
        classNames.push("random-css-string-center");
      }
    }
    if (className) {
      classNames.push(className);
    }
    return classNames.filter(Boolean).join(" ");
  }, [center, external, size]);

  const styleConfig = useMemo(
    () =>
      RandomCssUtils.getConfigFromInput<StyleInput, StyleConfig>(styleInput),
    [styleInput]
  );

  /**
   * This value serves as both the font size and the width of the divs
   * that contain the characters. The height of the divs will be equal to this
   * value multiplied by 1.1875.
   */
  const sizeString = useMemo(() => `${size}rem`, [size]);

  const containerStyle = useMemo(
    () => ({
      ...(!external && {
        style: {
          ...(center && { margin: "auto", width: "min-content" }),
          fontSize: sizeString,
        },
      }),
    }),
    [center, external, sizeString]
  );

  return (
    <div className={memoizedClassName} {...containerStyle}>
      {text.split("").map((character, i) => {
        return (
          <RandomDiv
            className="random-css-character"
            id={`character-${i}`}
            external={external}
            fixedStyle={{
              height: `${size * 1.1875}rem`,
              width: `${size}rem`,
            }}
            key={`${i}-${character}`}
            style={
              character != " "
                ? styleConfig
                : Object.assign(
                    {},
                    ...Object.keys(styleConfig).map(
                      (cssProperty: CssPropertyName) =>
                        ignoreSpaces ||
                        Randomizable.ignoreForSpaces[cssProperty]
                          ? {}
                          : { [cssProperty]: styleConfig[cssProperty] }
                    )
                  )
            }
            testID="character"
            {...nativeProps}
          >
            <RandomCharacter character={character} config={glyphConfig} />
          </RandomDiv>
        );
      })}
    </div>
  );
}
