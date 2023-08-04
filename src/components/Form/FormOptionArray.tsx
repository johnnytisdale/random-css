import FormOption, { CommonOptionProps } from "./FormOption";

import * as React from "react";

interface Props<T> extends CommonOptionProps {
  disabled?: boolean,
  displayValue?: (value: T) => string,
  possibleValues: T[],
  setValues: (values: T[]) => void,
  values: T[],
}

export default function FormOptionArray<T>({
  disabled = false,
  displayValue,
  possibleValues,
  setValues,
  values
}: Props<T>): React.ReactNode {
  return possibleValues.map(value => (
    <FormOption
      label={displayValue === undefined ? String(value) : displayValue(value)}
      input={{
        checked: values.includes(value),
        disabled,
        type: "checkbox",
        onChange: e => setValues(
          e.target.checked === true
            ? [value, ...values]
            : values.filter(v => v !== value)
        )
      }}
      key={String(value)}
    />
  ));
}