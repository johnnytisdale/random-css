import GlobalOptions from "../../interfaces/GlobalOptions";
import FormOption from "./FormOption";
import FormOptionBoolean from "./FormOptionBoolean";
import FormSection from "./FormSection";

import * as React from "react";

interface Props {
  center: boolean;
  options: GlobalOptions;
  setCenter: (center: boolean) => void;
  setOptions: (options: Partial<GlobalOptions>) => void;
  setText: (text: string) => void;
  text: string;
}

export default function Form({
  center,
  options,
  setCenter,
  setOptions,
  setText,
  text,
}: Props): React.ReactNode {
  const { ignoreSpaces, size, unsafe } = options;
  return (
    <FormSection id="global-options" title="global options">
      <FormOption
        input={{
          "data-testid": "randomcss-form-text",
          type: "text",
          value: text,
          onChange: (e) => setText(e.target.value),
        }}
        label="text"
      />
      <FormOption
        input={{
          ...(unsafe === false && {
            max: "10",
            min: ".25",
            step: "0.25",
          }),
          type: "number",
          value: size,
          onChange: (e) =>
            setOptions({
              size:
                unsafe === true
                  ? parseFloat(e.target.value)
                  : getValidSize(parseFloat(e.target.value)),
            }),
        }}
        label="size"
      />
      <FormOptionBoolean
        checked={unsafe}
        label="unsafe"
        setChecked={(unsafe) =>
          setOptions({
            ...(!unsafe && { size: getValidSize(size) }),
            unsafe,
          })
        }
      />
      <FormOptionBoolean
        checked={ignoreSpaces === true}
        label="ignore spaces"
        setChecked={(ignoreSpaces) => setOptions({ ignoreSpaces })}
      />
      <FormOptionBoolean
        checked={center === true}
        label="center"
        setChecked={(center) => setCenter(center)}
      />
    </FormSection>
  );
}

function getValidSize(size: number): number {
  if (size > 10) {
    return 10;
  } else if (size < 0.25) {
    return 0.25;
  } else if (size % 0.25 !== 0) {
    return parseFloat((Math.round(size * 4) / 4).toFixed(2));
  }
  return size;
}
