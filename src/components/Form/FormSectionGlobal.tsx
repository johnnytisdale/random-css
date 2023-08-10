import FormOption from "./FormOption";
import FormOptionBoolean from "./FormOptionBoolean";
import FormSection from "./FormSection";

import * as React from "react";

interface Props {
  center: boolean;
  external: boolean;
  ignoreSpaces: boolean;
  setCenter: (center: boolean) => void;
  setExternal: (external: boolean) => void;
  setIgnoreSpaces: (ignoreSpaces: boolean) => void;
  setSize: (size: number) => void;
  setText: (text: string) => void;
  size: number;
  text: string;
}

export default function FormSectionGlobal({
  center,
  external,
  ignoreSpaces,
  setCenter,
  setExternal,
  setIgnoreSpaces,
  setSize,
  setText,
  size,
  text,
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
          ...(external && {
            max: "10",
            min: ".25",
          }),
          step: "0.25",
          type: "number",
          value: size,
          onChange: (e) =>
            setSize(
              external
                ? getValidSize(parseFloat(e.target.value))
                : parseFloat(e.target.value)
            ),
        }}
        label="size"
      />
      <FormOptionBoolean
        checked={external}
        label="external"
        setChecked={(external) => {
          setExternal(external);
          if (external) {
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
