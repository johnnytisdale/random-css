import CssOptions from "./CssOptions";

import * as React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  external?: boolean;
  fixedStyle?: React.CSSProperties;
  id?: string;
  style: CssOptions;
  testID?: string;
}

type RandomElementGenericProps<Attributes, Element> = Props &
  Omit<React.DetailedHTMLProps<Attributes, Element>, "style">;

export default RandomElementGenericProps;
