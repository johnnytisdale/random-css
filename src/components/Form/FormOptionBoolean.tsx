import FormOption from "./FormOption";

import * as React from "react";

interface Props {
  checked: boolean;
  disabled?: boolean,
  label: string,
  setChecked: (checked: boolean) => void,
}

export default function FormOptionBoolean ({
  checked,
  disabled = false,
  label,
  setChecked
}: Props): React.ReactNode {
  return (
    <FormOption
      label={label}
      input={{
        checked,
        disabled,
        type: "checkbox",
        onChange: e => setChecked(e.target.checked)
      }}
    />
  );
}