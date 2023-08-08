import FormOption from "./FormOption";
import FormOptionBoolean from "./FormOptionBoolean";
import FormSection from "./FormSection";

import * as React from "react";

interface Props {
  center: boolean;
  ignoreSpaces: boolean;
  setCenter: (center: boolean) => void;
  setIgnoreSpaces: (ignoreSpaces: boolean) => void;
  setSize: (size: number) => void;
  setText: (text: string) => void;
  setUnsafe: (unsafe: boolean) => void;
  size: number;
  text: string;
  unsafe: boolean;
}

export default function FormSectionGlobal({
  center,
  ignoreSpaces,
  setCenter,
  setIgnoreSpaces,
  setSize,
  setText,
  setUnsafe,
  size,
  text,
  unsafe,
}: Props): React.ReactNode {
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
          }),
          step: "0.25",
          type: "number",
          value: size,
          onChange: (e) =>
            setSize(
              unsafe === true
                ? parseFloat(e.target.value)
                : getValidSize(parseFloat(e.target.value))
            ),
        }}
        label="size"
      />
      <FormOptionBoolean
        checked={unsafe}
        label="unsafe"
        setChecked={(unsafe) => {
          setUnsafe(unsafe);
          if (!unsafe) {
            setSize(getValidSize(size));
          }
        }}
      />
      <FormOptionBoolean
        checked={ignoreSpaces}
        label="ignore spaces"
        setChecked={(ignoreSpaces) => setIgnoreSpaces(ignoreSpaces)}
      />
      <FormOptionBoolean
        checked={center}
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
