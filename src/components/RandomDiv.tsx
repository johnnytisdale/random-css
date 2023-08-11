import RandomElement from "./RandomElement";
import RandomElementProps from "../interfaces/RandomElementGenericProps";

import * as React from "react";

export default function RandomDiv(props: RandomElementProps): React.ReactNode {
  return <RandomElement element="div" {...props} />;
}
