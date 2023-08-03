import {
  AnimationIterationCountOptions,
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
  option: AnimationIterationCountOptions;
  setOption: (option: AnimationIterationCountOptions) => void,
}

export default function FormSubsectionAnimationIterationCount ({
  enabled,
  option,
  setOption
}: Props): React.ReactNode {
  return (
    <FormSubsection label="iteration count">
      <FormOptionBoolean
        checked={option?.infinite === true}
        disabled={enabled !== true}
        label="infinite"
        setChecked={infinite => setOption({ infinite })}
      />
      <FormOption
        label="infiniteProbability"
        input={{
          disabled: !enabled || !option?.infinite,
          max: "1",
          min: ".1",
          step: ".01",
          type: "range",
          value: option?.infiniteProbability,
          onChange: e => setOption({
            infiniteProbability: parseFloat(e.target.value)
          })
        }}
      />
      <FormOptionBoolean
        checked={option?.integersOnly === true}
        disabled={enabled !== true}
        label="integers only"
        setChecked={integersOnly => setOption({ integersOnly })}
      />
      <FormOptionRange
        disabled={!enabled}
        max={DEFAULT_ANIMATION_ITERATION_COUNT_MAX}
        min={DEFAULT_ANIMATION_ITERATION_COUNT_MIN}
        maxValue={
          option?.max ?? DEFAULT_ANIMATION_ITERATION_COUNT_MAX
        }
        minValue={
          option?.min ?? DEFAULT_ANIMATION_ITERATION_COUNT_MIN
        }
        setValues={(min, max) => setOption({ max, min })}
        step="0.01"
      />
      <FormOptionBoolean
        checked={option.zero === true}
        disabled={enabled !== true}
        label="zero"
        setChecked={zero => setOption({ zero })}
      />
    </FormSubsection>
  );
}