import FormOption from "./FormOption";

import * as React from "react";

interface Props<T> {
  disabled?: (value: T) => boolean;
  displayValue?: (value: T) => string;
  possibleValues: T[];
  setValues: (values: T[]) => void;
  values: T[];
}

export default function FormOptionArray<T>({
  disabled,
  displayValue,
  possibleValues,
  setValues,
  values,
}: Props<T>): React.ReactNode {
  return possibleValues.map((value) => (
    <FormOption
      label={displayValue === undefined ? String(value) : displayValue(value)}
      input={{
        checked: values.includes(value),
        disabled: disabled == null ? false : disabled(value),
        type: "checkbox",
        onChange: (e) =>
          setValues(
            e.target.checked === true
              ? [value, ...values]
              : values.filter((v) => v !== value)
          ),
      }}
      key={String(value)}
    />
  ));
}
