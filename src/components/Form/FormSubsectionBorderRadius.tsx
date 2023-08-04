import { BorderRadiusOptions, DEFAULT_BORDER_RADIUS_MAX_CORNERS, DEFAULT_BORDER_RADIUS_MAX_RADIUS, DEFAULT_BORDER_RADIUS_MIN_CORNERS, DEFAULT_BORDER_RADIUS_MIN_RADIUS } from "../../classes/CSS/BorderRadius";
import FormOptionBoolean from "./FormOptionBoolean";
import FormOptionRange from "./FormOptionRange";

import * as React from "react";
import { useMemo } from "react";
import FormOptionProbability from "./FormOptionProbability";

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
      <FormOptionProbability
        label="slashProbability"
        disabled={!enabled || !option?.slash}
        value={option?.slashProbability}
        setProbability={slashProbability => setOption({ slashProbability })}
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
