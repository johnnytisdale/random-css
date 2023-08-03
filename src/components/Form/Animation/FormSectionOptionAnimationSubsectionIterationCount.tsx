import {
  AnimationOption,
  DEFAULT_ANIMATION_ITERATION_COUNT_MAX,
  DEFAULT_ANIMATION_ITERATION_COUNT_MIN
} from "../../../classes/CSS/Animation";
import FormOption from "../FormOption";
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
  return (
    <FormSubsection label='iteration count'>
      <FormOption
        label="infinite"
        input={{
          checked: option.iterationCount.infinite === true,
          disabled: enabled !== true,
          type: "checkbox",
          onChange: e => setOption({
            ...option,
            ...{
              iterationCount: {
                ...option.iterationCount ?? {},
                ...{
                  infinite: e.target.checked
                }
              }
            }
          })
        }}
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
          onChange: e => {
            setOption({
              ...option,
              ...{
                iterationCount: {
                  ...option.iterationCount ?? {},
                  ...{
                    infiniteProbability: parseFloat(e.target.value)
                  }
                }
              }
            });
          }
        }}
      />
      <FormOption
        label="integers only"
        input={{
          checked: option.iterationCount.integersOnly === true,
          disabled: enabled !== true,
          type: "checkbox",
          onChange: e => {
            setOption({
              ...option,
              ...{
                iterationCount: {
                  ...option.iterationCount ?? {},
                  ...{
                    integersOnly: e.target.checked
                  }
                }
              }
            });
          }
        }}
      />
      <FormOptionRange
        disabled={!enabled}
        max={DEFAULT_ANIMATION_ITERATION_COUNT_MAX}
        min={DEFAULT_ANIMATION_ITERATION_COUNT_MIN}
        maxValue={option?.iterationCount?.max ?? DEFAULT_ANIMATION_ITERATION_COUNT_MAX}
        minValue={option?.iterationCount?.min ?? DEFAULT_ANIMATION_ITERATION_COUNT_MIN}
        setValues={(min: number, max: number) =>  setOption({
          ...option,
          ...{
            iterationCount: {
              ...option.iterationCount ?? {},
              ...{
                max: max,
                min: min
              }
            }
          }
        })}
        step="0.01"
      />
      <FormOption
        label="zero"
        input={{
          checked: option.iterationCount.zero === true,
          disabled: enabled !== true,
          type: "checkbox",
          onChange: e => {
            setOption({
              ...option,
              ...{
                iterationCount: {
                  ...option.iterationCount ?? {},
                  ...{
                    zero: e.target.checked
                  }
                }
              }
            });
          }
        }}
      />
    </FormSubsection>
  );
}

export default FormSectionOptionAnimationSubsectionIterationCount;