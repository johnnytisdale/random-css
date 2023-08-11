import RandomElement from "./RandomElement";
import RandomElementProps from "../interfaces/RandomElementGenericProps";

import * as React from "react";

export function RandomDiv(props: RandomElementProps): React.ReactNode {
  return <RandomElement element="div" {...props} />;
}
