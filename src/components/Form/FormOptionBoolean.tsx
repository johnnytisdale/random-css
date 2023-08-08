import OptionProps from "../../interfaces/OptionProps";
import FormOption from "./FormOption";

import * as React from "react";

interface Props extends OptionProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

export default function FormOptionBoolean({
  checked,
  children,
  disabled = false,
  id,
  label,
  setChecked,
}: Props): React.ReactNode {
  return (
    <FormOption
      children={children}
      label={label}
      id={id}
      input={{
        checked,
        disabled,
        type: "checkbox",
        onChange: (e) => setChecked(e.target.checked),
      }}
    />
  );
}
