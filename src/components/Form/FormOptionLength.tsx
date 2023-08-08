import FormOptionArray from "./FormOptionArray";
import FormOptionBoolean from "./FormOptionBoolean";
import FormOptionRange from "./FormOptionRange";
import FormSubsection from "./FormSubsection";
import LengthOptions, {
  DEFAULT_LENGTH_MAX,
  DEFAULT_LENGTH_MIN,
} from "../../interfaces/LengthOptions";
import LengthUnit from "../../enums/LengthUnit";
import OptionProps from "../../interfaces/OptionProps";

import * as React from "react";

interface Props extends OptionProps {
  option: LengthOptions;
  setOption: (option: LengthOptions) => void;
}

export default function FormOptionLength({
  label,
  option,
  setOption,
}: Props): React.ReactNode {
  return (
    <FormOptionBoolean
      checked={option?.enabled === true}
      label={label}
      setChecked={(enabled) => setOption({ enabled })}
    >
      <FormSubsection>
        <FormOptionRange
          disabled={option?.enabled !== true}
          max={DEFAULT_LENGTH_MAX}
          min={DEFAULT_LENGTH_MIN}
          maxValue={option?.max ?? DEFAULT_LENGTH_MAX}
          minValue={option?.min ?? DEFAULT_LENGTH_MIN}
          setValues={(min, max) => setOption({ max, min })}
        />
      </FormSubsection>
      <FormSubsection label="units">
        <FormOptionArray
          disabled={() => option?.enabled !== true}
          possibleValues={Object.values(LengthUnit)}
          setValues={(units) => setOption({ units })}
          values={option?.units ?? []}
        />
      </FormSubsection>
    </FormOptionBoolean>
  );
}
