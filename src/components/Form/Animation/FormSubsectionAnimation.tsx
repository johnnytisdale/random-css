import AnimationDirection from "../../../enums/AnimationDirection";
import AnimationEasingFunction from "../../../enums/AnimationEasingFunction";
import AnimationFillMode from "../../../enums/AnimationFillMode";
import { AnimationIterationCountOptions, AnimationOptions, DEFAULT_ANIMATION_DURATION_MAX, DEFAULT_ANIMATION_DURATION_MIN } from "../../../classes/CSS/Animation";
import AnimationTransformation from "../../../enums/AnimationTransformation";
import FormOptionArray from "../FormOptionArray";
import FormOptionRange from "../FormOptionRange";
import FormSubsectionAnimationIterationCount from "./FormSubsectionAnimationIterationCount";
import FormSubsection from "../FormSubsection";

import * as React from "react";
import FormOptionBoolean from "../FormOptionBoolean";

interface Props {
  option: AnimationOptions;
  setOption: (option: AnimationOptions) => void,
}

export default function FormSubsectionAnimation ({
  option,
  setOption
}: Props): React.ReactNode {
  const disabled = option?.enabled !== true;
  const setIterationCountOption = React.useCallback(
    (options: AnimationIterationCountOptions) => {
      setOption({
        iterationCount: {
          ...option.iterationCount ?? {},
          ...options
        }
      })
    },
    [option?.iterationCount, setOption]
  );
  return (
    <FormOptionBoolean
      checked={!disabled}
      label="animation"
      setChecked={enabled => setOption({ enabled })}
    >
      <FormSubsection label='directions'>
        <FormOptionArray
          {...{ disabled }}
          possibleValues={Object.values(AnimationDirection)}
          setValues={directions => setOption({ directions })}
          values={option?.directions ?? []}
        />
      </FormSubsection>
      <FormSubsection label='duration'>
        <FormOptionRange
          {...{ disabled }}
          max={DEFAULT_ANIMATION_DURATION_MAX}
          min={DEFAULT_ANIMATION_DURATION_MIN}
          maxValue={option?.durationMax ?? DEFAULT_ANIMATION_DURATION_MAX}
          minValue={option?.durationMin ?? DEFAULT_ANIMATION_DURATION_MIN}
          setValues={(durationMin, durationMax) => setOption({
            durationMax,
            durationMin
          })}
        />
      </FormSubsection>
      <FormSubsection label='easing functions'>
        <FormOptionArray
          {...{ disabled }}
          possibleValues={Object.values(AnimationEasingFunction)}
          setValues={easingFunctions => setOption(
            {...option, ...{ easingFunctions }}
          )}
          values={option?.easingFunctions ?? []}
        />
      </FormSubsection>
      <FormSubsection label='fill modes'>
        <FormOptionArray
          {...{ disabled }}
          possibleValues={Object.values(AnimationFillMode)}
          setValues={fillModes => setOption({...option, ...{ fillModes }})}
          values={option?.fillModes ?? []}
        />
      </FormSubsection>
      <FormSubsectionAnimationIterationCount
        // TODO: Change prop name to disabled.
        enabled={!disabled}
        option={option?.iterationCount}
        setOption={setIterationCountOption}
      />
      <FormSubsection label='transformations'>
        <FormOptionArray
          {...{ disabled }}
          possibleValues={Object.values(AnimationTransformation)}
          setValues={transformations => setOption(
            {...option, ...{ transformations }}
          )}
          values={option?.transformations ?? []}
        />
      </FormSubsection>
    </FormOptionBoolean>
  );
}
