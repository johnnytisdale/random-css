import {
  DEFAULT_LENGTH_MAX,
  DEFAULT_LENGTH_MIN,
} from "../../values/defaults/css/LengthDefaults";
import FormOptionArray from "./FormOptionArray";
import FormOptionBoolean from "./FormOptionBoolean";
import FormOptionRange from "./FormOptionRange";
import FormSubsection from "./FormSubsection";
import LengthOptions from "../../interfaces/LengthOptions";
import LengthUnit from "../../enums/LengthUnit";
import OptionProps from "../../interfaces/OptionProps";

import * as React from "react";

interface Props extends OptionProps {
  option: LengthOptions;
  setOption: (option: LengthOptions) => void;
}

export default function FormOptionLength({
  option,
  setOption,
  ...optionProps
}: Props): React.ReactNode {
  return (
    <FormOptionBoolean
      {...optionProps}
      checked={option?.enabled === true}
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
