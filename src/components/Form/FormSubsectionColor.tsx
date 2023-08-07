import Color from "../../enums/ColorKeyword";
import ColorOption from "../../interfaces/ColorOptions";
import { CommonOptionProps } from "./FormOption";
import FormOptionArray from "./FormOptionArray";
import FormOptionBoolean from "./FormOptionBoolean";
import FormOptionRange from "./FormOptionRange";
import FormSubsection from "./FormSubsection";

import * as React from "react";

interface Props extends CommonOptionProps {
  option: ColorOption;
  setOption: (option: ColorOption) => void;
  unsafe: boolean;
}

export default function FormSubsectionColor({
  label,
  option,
  setOption,
  unsafe,
}: Props): React.ReactNode {
  const disabled = option?.enabled !== true;
  return (
    <FormOptionBoolean
      checked={!disabled}
      label={label}
      setChecked={(enabled) => setOption({ enabled })}
    >
      {unsafe ? (
        <>
          <FormSubsection label="red">
            <FormOptionRange
              {...{ disabled }}
              max={255}
              min={0}
              maxValue={option?.rMax ?? 255}
              minValue={option?.rMin ?? 0}
              setValues={(rMin, rMax) => setOption({ rMax, rMin })}
            />
          </FormSubsection>
          <FormSubsection label="green">
            <FormOptionRange
              {...{ disabled }}
              max={255}
              min={0}
              maxValue={option?.gMax ?? 255}
              minValue={option?.gMin ?? 0}
              setValues={(gMin, gMax) => setOption({ gMax, gMin })}
            />
          </FormSubsection>
          <FormSubsection label="blue">
            <FormOptionRange
              {...{ disabled }}
              max={255}
              min={0}
              maxValue={option?.bMax ?? 255}
              minValue={option?.bMin ?? 0}
              setValues={(bMin, bMax) => setOption({ bMax, bMin })}
            />
          </FormSubsection>
        </>
      ) : (
        <FormSubsection label="keywords">
          <FormOptionArray
            {...{ disabled }}
            possibleValues={Object.values(Color)}
            setValues={(colorKeywords) => setOption({ colorKeywords })}
            values={option?.colorKeywords ?? []}
          />
        </FormSubsection>
      )}
    </FormOptionBoolean>
  );
}
