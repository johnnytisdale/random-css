import FormSectionOptionSubsection from "./FormSectionOptionSubsection";

import * as React from "react";

export default function FormSectionOptionArray<T>({
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
    <FormSectionOptionSubsection label='transformations'>
      {
        possibleValues.map(value => (
          <div className="option" key={String(value)}>
            <div className="label">{String(value)}</div>
            <input
              checked={values.includes(value)}
              disabled={disabled}
              type="checkbox"
              onChange={e => setValues(
                e.target.checked === true
                  ? [value, ...values]
                  : values.filter(v => v !== value)
              )}
            />
          </div>
        ))
      }
    </FormSectionOptionSubsection>
  );
}