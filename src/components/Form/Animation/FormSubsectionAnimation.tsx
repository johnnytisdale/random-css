import AnimationDirection from "../../../enums/AnimationDirection";
import AnimationEasingFunction from "../../../enums/AnimationEasingFunction";
import AnimationFillMode from "../../../enums/AnimationFillMode";
import { AnimationIterationCountOptions, AnimationOptions, DEFAULT_ANIMATION_DURATION_MAX, DEFAULT_ANIMATION_DURATION_MAX_UNSAFE, DEFAULT_ANIMATION_DURATION_MIN, DEFAULT_ANIMATION_DURATION_MIN_UNSAFE, DEFAULT_ANIMATION_ITERATION_COUNT_MIN, DEFAULT_ANIMATION_ITERATION_COUNT_MIN_UNSAFE } from "../../../classes/CSS/Animation";
import AnimationTransformation from "../../../enums/AnimationTransformation";
import FormOptionArray from "../FormOptionArray";
import FormOptionBoolean from "../FormOptionBoolean";
import FormOptionRange from "../FormOptionRange";
import FormSubsectionAnimationIterationCount from "./FormSubsectionAnimationIterationCount";
import FormSubsection from "../FormSubsection";

import * as React from "react";
import { useCallback, useEffect, useMemo, useRef } from "react";

interface Props {
  option: AnimationOptions;
  setOption: (option: AnimationOptions) => void,
  unsafe: boolean
}

export default function FormSubsectionAnimation ({
  option,
  setOption,
  unsafe
}: Props): React.ReactNode {
  const disabled = option?.enabled !== true;
  const setIterationCountOption = useCallback(
    (options: AnimationIterationCountOptions) => {
      setOption({
        iterationCount: {
          ...option.iterationCount ?? {},
          ...options
        }
      });
    },
    [option?.iterationCount, setOption]
  );
  const durationMaxLimit = useMemo(
    () => unsafe
      ? DEFAULT_ANIMATION_DURATION_MAX_UNSAFE
      : DEFAULT_ANIMATION_DURATION_MAX,
    [unsafe]
  );
  const durationMinLimit = useMemo(
    () => unsafe
      ? DEFAULT_ANIMATION_DURATION_MIN_UNSAFE
      : DEFAULT_ANIMATION_DURATION_MIN,
    [unsafe]
  );
  const iterationCountMinLimit = useMemo(
    () => unsafe
      ? DEFAULT_ANIMATION_ITERATION_COUNT_MIN_UNSAFE
      : DEFAULT_ANIMATION_ITERATION_COUNT_MIN,
    [unsafe]
  );
  const mounted = useRef(false);
  useEffect(
    () => {
      if (!mounted.current) {
        mounted.current = true;
        return;
      }
      const newState: AnimationOptions = {};
      if (
        option?.durationMax > durationMaxLimit ||
        option?.durationMax < durationMinLimit
      ) {
        newState.durationMax = durationMaxLimit;
      }
      if (
        option?.durationMin < durationMinLimit ||
        option?.durationMin > durationMaxLimit
      ) {
        newState.durationMin = durationMinLimit;
      }
      const newIterationCount: AnimationIterationCountOptions = { };
      if (!unsafe && option?.iterationCount?.integersOnly !== true) {
        newIterationCount.integersOnly = true;
      }
      if (option?.iterationCount?.min < iterationCountMinLimit) {
        newIterationCount.min = iterationCountMinLimit;
      } else if (option?.iterationCount?.min % 1 > 0) {
        newIterationCount.min = Math.round(option?.iterationCount?.min);
      }
      if (option?.iterationCount?.max % 1 > 0) {
        newIterationCount.max = Math.round(option?.iterationCount?.max);
      }
      const updateIterationCount = Object.keys(newIterationCount).length > 0;
      if (Object.keys(newState).length > 0 || updateIterationCount) {
        if (updateIterationCount) {
          newState.iterationCount = {
            ...option?.iterationCount ?? {},
            ...newIterationCount
          }
        }
        setOption(newState);
      }
    },
    [unsafe]
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
          max={durationMaxLimit}
          min={durationMinLimit}
          maxValue={option?.durationMax ?? durationMaxLimit}
          minValue={option?.durationMin ?? durationMinLimit}
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
        {...{ disabled, unsafe }}
        minLimit={iterationCountMinLimit}
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
