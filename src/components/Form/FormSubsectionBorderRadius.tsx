import BorderRadiusOptions, {
  DEFAULT_BORDER_RADIUS_MAX_CORNERS,
  DEFAULT_BORDER_RADIUS_MAX_RADIUS,
  DEFAULT_BORDER_RADIUS_MIN_CORNERS,
  DEFAULT_BORDER_RADIUS_MIN_RADIUS,
} from "../../interfaces/BorderRadiusOptions";
import CssProperty from "../../enums/CssPropertyName";
import FormOptionBoolean from "./FormOptionBoolean";
import FormOptionProbability from "./FormOptionProbability";
import FormOptionRange from "./FormOptionRange";
import FormSubsection from "./FormSubsection";
import FormSubsectionCssProps from "../../interfaces/FormSubsectionCssProps";

import * as React from "react";

export default function FormSubsectionBorderRadius({
  option,
  setOption,
  toggle,
}: FormSubsectionCssProps<BorderRadiusOptions>): React.ReactNode {
  const disabled = option?.enabled !== true;
  return (
    <FormOptionBoolean
      checked={!disabled}
      label="borderRadius"
      setChecked={(checked) => toggle(CssProperty.BORDER_RADIUS, checked)}
    >
      <FormSubsection>
        <FormOptionBoolean
          checked={option?.slash === true}
          {...{ disabled }}
          label="slash"
          setChecked={(slash) => setOption({ slash })}
        />
        <FormOptionProbability
          label="slashProbability"
          disabled={disabled || !option?.slash}
          value={option?.slashProbability}
          setProbability={(slashProbability) => setOption({ slashProbability })}
        />
        <FormOptionRange
          {...{ disabled }}
          max={DEFAULT_BORDER_RADIUS_MAX_CORNERS}
          min={DEFAULT_BORDER_RADIUS_MIN_CORNERS}
          maxLabel="maxCorners"
          minLabel="minCorners"
          maxValue={option.maxCorners}
          minValue={option.minCorners}
          setValues={(minCorners, maxCorners) =>
            setOption({
              maxCorners,
              minCorners,
            })
          }
        />
        <FormOptionRange
          {...{ disabled }}
          max={DEFAULT_BORDER_RADIUS_MAX_RADIUS}
          min={DEFAULT_BORDER_RADIUS_MIN_RADIUS}
          maxLabel="maxRadius"
          minLabel="minRadius"
          maxValue={option.maxRadius}
          minValue={option.minRadius}
          setValues={(minRadius, maxRadius) =>
            setOption({
              maxRadius,
              minRadius,
            })
          }
        />
      </FormSubsection>
    </FormOptionBoolean>
  );
}
