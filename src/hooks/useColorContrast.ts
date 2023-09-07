import {
  ColorContrastPrimary,
  ColorContrastSecondary,
} from "../interfaces/ColorContrastPlugin";
import CssColorPropertyName from "../types/CssColorPropertyName";
import { RandomCssUtils } from "..";
import Style from "../types/Style";

import { useReducer } from "react";

export default function useColorContrast(
  primary: CssColorPropertyName,
  secondary: CssColorPropertyName | Array<CssColorPropertyName>
): [ColorContrastPrimary, ColorContrastSecondary] {
  const [secondaryStyle, setSecondaryStyle] = useReducer(
    RandomCssUtils.reducer<Style>,
    {}
  );

  const secondaryColors = Array.isArray(secondary) ? secondary : [secondary];
  return [
    {
      cssPropertyName: primary,
      secondary: secondaryColors,
      setSecondaryStyle,
    },
    Object.assign(
      {},
      ...secondaryColors.map((name: CssColorPropertyName) => ({
        [name]: {
          cssPropertyName: name,
          style: secondaryStyle,
        },
      }))
    ),
  ];
}
