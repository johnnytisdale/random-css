import FormOption from "./FormOption";
import FormSubsection from "./FormSubsection";

import * as React from "react";

export default function FormOptionArray<T>({
  disabled = false,
  possibleValues,
  setValues,
  values
}: {
  disabled?: boolean,
  possibleValues: T[],
  setValues: (values: T[]) => void,
  values: T[],
}): React.ReactNode {
  return (
    <FormSubsection label='transformations'>
      {
        possibleValues.map(value => (
          <FormOption
            label={String(value)}
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
        ))
      }
    </FormSubsection>
  );
}