import AnimationDirection from "../../../enums/AnimationDirection";
import AnimationEasingFunction from "../../../enums/AnimationEasingFunction";
import AnimationFillMode from "../../../enums/AnimationFillMode";
import { AnimationOption, DEFAULT_ANIMATION_DURATION_MAX, DEFAULT_ANIMATION_DURATION_MIN } from "../../../classes/CSS/Animation";
import AnimationTransformation from "../../../enums/AnimationTransformation";
import FormSectionOption from "../FormSectionOption";
import FormSectionOptionAnimationSubsectionIterationCount from "./FormSectionOptionAnimationSubsectionIterationCount";
import FormSectionOptionArray from "../FormSectionOptionArray";
import FormSectionOptionRange from "../FormSectionOptionRange";
import FormSectionOptionSubsection from "../FormSectionOptionSubsection";

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
    <FormSectionOption
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
      <FormSectionOptionSubsection label='directions'>
        <FormSectionOptionArray
          disabled={enabled === false}
          possibleValues={Object.values(AnimationDirection)}
          setValues={directions => setOption({...option, ...{ directions }})}
          values={option?.directions ?? []}
        />
      </FormSectionOptionSubsection>
      <FormSectionOptionSubsection label='duration'>
        <FormSectionOptionRange
          disabled={!enabled}
          max={DEFAULT_ANIMATION_DURATION_MAX}
          min={DEFAULT_ANIMATION_DURATION_MIN}
          maxValue={option?.durationMax ?? DEFAULT_ANIMATION_DURATION_MAX}
          minValue={option?.durationMin ?? DEFAULT_ANIMATION_DURATION_MIN}
          setValues={(min: number, max: number) => setOption(
            {...option, ...{durationMax: max, durationMin: min}}
          )}
        />
      </FormSectionOptionSubsection>
      <FormSectionOptionSubsection label='easing functions'>
        <FormSectionOptionArray
          disabled={enabled === false}
          possibleValues={Object.values(AnimationEasingFunction)}
          setValues={easingFunctions => setOption(
            {...option, ...{ easingFunctions }}
          )}
          values={option?.easingFunctions ?? []}
        />
      </FormSectionOptionSubsection>
      <FormSectionOptionSubsection label='fill modes'>
        <FormSectionOptionArray
          disabled={enabled === false}
          possibleValues={Object.values(AnimationFillMode)}
          setValues={fillModes => setOption({...option, ...{ fillModes }})}
          values={option?.fillModes ?? []}
        />
      </FormSectionOptionSubsection>
      <FormSectionOptionAnimationSubsectionIterationCount
        enabled={enabled}
        option={option}
        setOption={setOption}
      />
      <FormSectionOptionSubsection label='transformations'>
        <FormSectionOptionArray
          disabled={enabled === false}
          possibleValues={Object.values(AnimationTransformation)}
          setValues={transformations => setOption(
            {...option, ...{ transformations }}
          )}
          values={option?.transformations ?? []}
        />
      </FormSectionOptionSubsection>
    </FormSectionOption>
  );
}

export default FormSectionOptionAnimation;