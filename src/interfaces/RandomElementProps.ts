import StyleInput from "../types/StyleInput";

import * as React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;

  /**
   * If true, use an external stylesheet instead of using JavaScript to change
   * styles.
   */
  external?: boolean;
  fixedStyle?: React.CSSProperties;
  id?: string;
  style?: StyleInput;
  testID?: string;
}

type RandomElementProps<Attributes, Element> = Props &
  Omit<React.DetailedHTMLProps<Attributes, Element>, "style">;

export default RandomElementProps;
