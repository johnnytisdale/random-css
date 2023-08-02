import {
  AnimationOption,
  DEFAULT_ANIMATION_ITERATION_COUNT_MAX,
  DEFAULT_ANIMATION_ITERATION_COUNT_MIN
} from "../../../classes/CSS/Animation";
import FormSectionOptionRange from "../FormSectionOptionRange";
import FormSectionOptionSubsection from "../FormSectionOptionSubsection";

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
    <FormSectionOptionSubsection label='iteration count'>
      <div className="option">
        <div className="label">infinite</div>
        <input
          checked={option.iterationCount.infinite === true}
          disabled={enabled !== true}
          type="checkbox"
          onChange={e => {
            setOption({
              ...option,
              ...{
                iterationCount: {
                  ...option.iterationCount ?? {},
                  ...{
                    infinite: e.target.checked
                  }
                }
              }
            });
          }}
        />
      </div>
      <div className="option">
        <div className="label">infiniteProbability</div>
        <input
          disabled={enabled !== true}
          max="1"
          min=".1"
          step=".01"
          type="range"
          value={option.iterationCount.infiniteProbability}
          onChange={e => {
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
          }}
        />
      </div>
      <div className="option">
        <div className="label">integers only</div>
        <input
          checked={option.iterationCount.integersOnly === true}
          disabled={enabled !== true}
          type="checkbox"
          onChange={e => {
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
          }}
        />
      </div>
      <FormSectionOptionRange
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
    </FormSectionOptionSubsection>
  );
}

export default FormSectionOptionAnimationSubsectionIterationCount;