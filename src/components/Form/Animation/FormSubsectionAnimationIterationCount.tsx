import {
  AnimationIterationCountOptions,
  DEFAULT_ANIMATION_ITERATION_COUNT_MAX,
} from "../../../interfaces/AnimationOptions";
import FormOptionBoolean from "../FormOptionBoolean";
import FormOptionProbability from "../FormOptionProbability";
import FormOptionRange from "../FormOptionRange";
import FormSubsection from "../FormSubsection";

import * as React from "react";

interface Props {
  disabled: boolean;
  external: boolean;
  option: AnimationIterationCountOptions;
  setOption: (option: AnimationIterationCountOptions) => void;
}

export default function FormSubsectionAnimationIterationCount({
  disabled,
  external,
  option,
  setOption,
}: Props): React.ReactNode {
  return (
    <FormSubsection label="iteration count">
      <FormOptionBoolean
        checked={option?.infinite === true}
        disabled={disabled}
        label="infinite"
        setChecked={(infinite) => setOption({ infinite })}
      />
      <FormOptionProbability
        label="infiniteProbability"
        disabled={disabled || !option?.infinite}
        value={option?.infiniteProbability}
        setProbability={(infiniteProbability) =>
          setOption({ infiniteProbability })
        }
      />
      <FormOptionBoolean
        checked={option?.integersOnly === true}
        disabled={disabled || external}
        label="integers only"
        setChecked={(integersOnly) => setOption({ integersOnly })}
      />
      <FormOptionRange
        disabled={disabled}
        max={DEFAULT_ANIMATION_ITERATION_COUNT_MAX}
        min={0}
        maxValue={option?.max}
        minValue={option?.min}
        setValues={(min, max) => setOption({ max, min })}
        step={external ? "1" : "0.01"}
      />
    </FormSubsection>
  );
}
