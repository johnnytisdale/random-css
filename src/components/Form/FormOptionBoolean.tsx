import OptionProps from "../../interfaces/OptionProps";
import FormOption from "./FormOption";

import * as React from "react";

interface Props extends OptionProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

export default function FormOptionBoolean({
  checked,
  disabled = false,
  setChecked,
  ...optionProps
}: Props): React.ReactNode {
  return (
    <FormOption
      {...optionProps}
      input={{
        checked,
        disabled,
        type: "checkbox",
        onChange: (e) => setChecked(e.target.checked),
      }}
    />
  );
}
