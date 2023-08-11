import CssOptions from "./CssOptions";

import * as React from "react";

export default interface RandomElementGenericProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  external?: boolean;
  fixedStyle?: React.CSSProperties;
  style: CssOptions;
  testID?: string;
}
