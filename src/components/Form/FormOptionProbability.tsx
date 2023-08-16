import OptionProps from "../../interfaces/OptionProps";
import FormOption from "./FormOption";

import * as React from "react";

interface Props extends OptionProps {
  setProbability: (probability: number) => void;
  value: number;
}

export default function FormOptionProbability({
  disabled,
  setProbability,
  value,
  ...optionProps
}: Props): React.ReactNode {
  return (
    <FormOption
      {...optionProps}
      input={{
        disabled,
        max: "1",
        min: ".1",
        step: ".01",
        type: "range",
        value,
        onChange: (e) => setProbability(parseFloat(e.target.value)),
      }}
    />
  );
}
