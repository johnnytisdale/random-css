import "../styles/RandomString.scss";

import CssPropertyName from "../enums/CssPropertyName";
import { DEFAULT_GLOBAL_OPTIONS_IGNORE_SPACES } from "../interfaces/GlobalOptions";
import GlyphConfig from "../interfaces/GlyphConfig";
import RandomCharacter from "./RandomCharacter";
import RandomCssUtils from "../classes/RandomCssUtils";
import { RandomDiv } from "./RandomElements";
import RandomElementGenericProps from "../interfaces/RandomElementGenericProps";
import Randomizable from "../classes/Randomizable";

import * as React from "react";
import { HTMLAttributes, useMemo } from "react";

interface Props
  extends RandomElementGenericProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  /**
   * If true, the text will be centered.
   */
  center?: boolean;

  glyphConfig: GlyphConfig;

  ignoreSpaces: boolean;

  size: number;

  /**
   * The text to be randomized.
   */
  text: string;
}

export default function RandomString({
  center = true,
  className,
  external,
  glyphConfig,
  ignoreSpaces = DEFAULT_GLOBAL_OPTIONS_IGNORE_SPACES,
  size,
  style: styleInput,
  text,
  ...nativeProps
}: Props): React.ReactNode {
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
    () => RandomCssUtils.getStyleConfigFromStyleInput(styleInput),
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
