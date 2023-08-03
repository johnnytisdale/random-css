import AnimationDirection from "../../../enums/AnimationDirection";
import AnimationEasingFunction from "../../../enums/AnimationEasingFunction";
import AnimationFillMode from "../../../enums/AnimationFillMode";
import { AnimationOption, DEFAULT_ANIMATION_DURATION_MAX, DEFAULT_ANIMATION_DURATION_MIN } from "../../../classes/CSS/Animation";
import AnimationTransformation from "../../../enums/AnimationTransformation";
import FormOption from "../FormOption";
import FormSectionOptionAnimationSubsectionIterationCount from "./FormSectionOptionAnimationSubsectionIterationCount";
import FormOptionArray from "../FormOptionArray";
import FormOptionRange from "../FormOptionRange";
import FormSubsection from "../FormSubsection";

import * as React from "react";
import { useMemo } from "react";

interface Props {
  option: AnimationOption;
  setOption: (option: AnimationOption) => void,
}

const FormSectionOptionAnimation = ({
  option,
  setOption
}: Props): React.ReactNode => {
  const enabled = useMemo(
    () =>  option.enabled === true,
    [option.enabled]
  );
  return (
    <FormOption
      label="animation"
      input={{
        checked: enabled,
        type: "checkbox",
        onChange: e => {
          setOption({
            ...option,
            ...{ enabled: e.target.checked }
          });
          }
      }}
    >
      <FormSubsection label='directions'>
        <FormOptionArray
          disabled={enabled === false}
          possibleValues={Object.values(AnimationDirection)}
          setValues={directions => setOption({...option, ...{ directions }})}
          values={option?.directions ?? []}
        />
      </FormSubsection>
      <FormSubsection label='duration'>
        <FormOptionRange
          disabled={!enabled}
          max={DEFAULT_ANIMATION_DURATION_MAX}
          min={DEFAULT_ANIMATION_DURATION_MIN}
          maxValue={option?.durationMax ?? DEFAULT_ANIMATION_DURATION_MAX}
          minValue={option?.durationMin ?? DEFAULT_ANIMATION_DURATION_MIN}
          setValues={(min: number, max: number) => setOption(
            {...option, ...{durationMax: max, durationMin: min}}
          )}
        />
      </FormSubsection>
      <FormSubsection label='easing functions'>
        <FormOptionArray
          disabled={enabled === false}
          possibleValues={Object.values(AnimationEasingFunction)}
          setValues={easingFunctions => setOption(
            {...option, ...{ easingFunctions }}
          )}
          values={option?.easingFunctions ?? []}
        />
      </FormSubsection>
      <FormSubsection label='fill modes'>
        <FormOptionArray
          disabled={enabled === false}
          possibleValues={Object.values(AnimationFillMode)}
          setValues={fillModes => setOption({...option, ...{ fillModes }})}
          values={option?.fillModes ?? []}
        />
      </FormSubsection>
      <FormSectionOptionAnimationSubsectionIterationCount
        enabled={enabled}
        option={option}
        setOption={setOption}
      />
      <FormSubsection label='transformations'>
        <FormOptionArray
          disabled={enabled === false}
          possibleValues={Object.values(AnimationTransformation)}
          setValues={transformations => setOption(
            {...option, ...{ transformations }}
          )}
          values={option?.transformations ?? []}
        />
      </FormSubsection>
    </FormOption>
  );
}

export default FormSectionOptionAnimation;