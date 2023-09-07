import Plugins from "../interfaces/Plugins";
import StyleInput from "./StyleInput";

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
  plugins?: Plugins;
  style?: StyleInput;
  testID?: string;
}

type RandomElementProps<Attributes, Element> = Props &
  Omit<React.DetailedHTMLProps<Attributes, Element>, "style">;

export default RandomElementProps;
