import {
  AnimationIterationCountOptions,
  AnimationOption,
  DEFAULT_ANIMATION_ITERATION_COUNT_MAX,
  DEFAULT_ANIMATION_ITERATION_COUNT_MIN
} from "../../../classes/CSS/Animation";
import FormOption from "../FormOption";
import FormOptionBoolean from "../FormOptionBoolean";
import FormOptionRange from "../FormOptionRange";
import FormSubsection from "../FormSubsection";

import * as React from "react";

interface Props {
  enabled: boolean,
  option: AnimationOption;
  setOption: (option: AnimationOption) => void,
}

const FormSectionOptionAnimationSubsectionIterationCount = ({
  enabled,
  option,
  setOption
}: Props): React.ReactNode => {

  const setIterationCountOption = React.useCallback(
    (value: AnimationIterationCountOptions) => setOption({
      ...option,
      ...{
        iterationCount: {
          ...option.iterationCount ?? {},
          ...{value}
        }
      }
    }),
    [option, setOption]
  );

  return (
    <FormSubsection label="iteration count">
      <FormOptionBoolean
        checked={option?.iterationCount?.infinite === true}
        disabled={enabled !== true}
        label="infinite"
        setChecked={infinite => setIterationCountOption({ infinite })}
      />
      <FormOption
        label="infiniteProbability"
        input={{
          disabled: enabled !== true,
          max: "1",
          min: ".1",
          step: ".01",
          type: "range",
          value: option.iterationCount.infiniteProbability,
          onChange: e => setIterationCountOption({
            infiniteProbability: parseFloat(e.target.value)
          })
        }}
      />
      <FormOptionBoolean
        checked={option?.iterationCount?.integersOnly === true}
        disabled={enabled !== true}
        label="integers only"
        setChecked={integersOnly => setIterationCountOption({ integersOnly })}
      />
      <FormOptionRange
        disabled={!enabled}
        max={DEFAULT_ANIMATION_ITERATION_COUNT_MAX}
        min={DEFAULT_ANIMATION_ITERATION_COUNT_MIN}
        maxValue={
          option?.iterationCount?.max ?? DEFAULT_ANIMATION_ITERATION_COUNT_MAX
        }
        minValue={
          option?.iterationCount?.min ?? DEFAULT_ANIMATION_ITERATION_COUNT_MIN
        }
        setValues={(min, max) => setIterationCountOption({ max, min })}
        step="0.01"
      />
      <FormOptionBoolean
        checked={option.iterationCount.zero === true}
        disabled={enabled !== true}
        label="zero"
        setChecked={zero => setIterationCountOption({ zero })}
      />
    </FormSubsection>
  );
}

export default FormSectionOptionAnimationSubsectionIterationCount;