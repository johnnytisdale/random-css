import { BorderRadiusOptions, DEFAULT_BORDER_RADIUS_MAX_CORNERS, DEFAULT_BORDER_RADIUS_MAX_RADIUS, DEFAULT_BORDER_RADIUS_MIN_CORNERS, DEFAULT_BORDER_RADIUS_MIN_RADIUS } from "../../classes/CSS/BorderRadius";
import FormOption from "./FormOption";
import FormOptionBoolean from "./FormOptionBoolean";
import FormOptionRange from "./FormOptionRange";

import * as React from "react";
import { useMemo } from "react";

interface Props {
  option: BorderRadiusOptions;
  setOption: (option: BorderRadiusOptions) => void,
}

export default function FormSubsectionBorderRadius ({
  option,
  setOption
}: Props): React.ReactNode {
  const enabled = useMemo(
    () => option.enabled === true,
    [option.enabled]
  );
  return (
    <FormOptionBoolean
      checked={enabled === true}
      label="borderRadius"
      setChecked={enabled => setOption({ enabled })}
    >
      <FormOptionBoolean
        checked={option?.slash === true}
        disabled={!enabled}
        label="slash"
        setChecked={slash => setOption({ slash })}
      />
      {
        /**
         * TODO: FormOptionProbability. Use here and for infiniteProbability
         * in animation iteration count subsection.
         */
      }
      <FormOption
        label="slashProbability"
        input={{
          disabled: !enabled || !option?.slash,
          max: "1",
          min: ".1",
          step: ".01",
          type: "range",
          value: option?.slashProbability,
          onChange: e => setOption({
            slashProbability: parseFloat(e.target.value)
          })
        }}
      />
      <FormOptionRange
        disabled={!enabled}
        max={DEFAULT_BORDER_RADIUS_MAX_CORNERS}
        min={DEFAULT_BORDER_RADIUS_MIN_CORNERS}
        maxLabel="maxCorners"
        minLabel="minCorners"
        maxValue={option.maxCorners}
        minValue={option.minCorners}
        setValues={(minCorners, maxCorners) => setOption({
          maxCorners,
          minCorners
        })}
      />
      <FormOptionRange
        disabled={!enabled}
        max={DEFAULT_BORDER_RADIUS_MAX_RADIUS}
        min={DEFAULT_BORDER_RADIUS_MIN_RADIUS}
        maxLabel="maxRadius"
        minLabel="minRadius"
        maxValue={option.maxRadius}
        minValue={option.minRadius}
        setValues={(minRadius, maxRadius) => setOption({
          maxRadius,
          minRadius
        })}
      />
    </FormOptionBoolean>
  );
}