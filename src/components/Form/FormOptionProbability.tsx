import FormOption, { CommonOptionProps } from "./FormOption";

import * as React from "react";

interface Props extends CommonOptionProps {
  setProbability: (probability: number) => void,
  value: number
}

export default function FormOptionProbability ({
  disabled,
  label,
  setProbability,
  value
}: Props): React.ReactNode {
  return (
    <FormOption
      label={label}
      input={{
        disabled,
        max: "1",
        min: ".1",
        step: ".01",
        type: "range",
        value,
        onChange: e => setProbability(parseFloat(e.target.value))
      }}
    />
  );
}
