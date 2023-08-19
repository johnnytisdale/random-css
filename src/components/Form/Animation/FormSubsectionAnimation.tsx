import AnimationDirection from "../../../enums/AnimationDirection";
import AnimationEasingFunction from "../../../enums/AnimationEasingFunction";
import AnimationFillMode from "../../../enums/AnimationFillMode";
import AnimationIterationCountOptions from "../../../interfaces/AnimationIterationCountOptions";
import AnimationOptions from "../../../interfaces/AnimationOptions";
import AnimationTransformation from "../../../enums/AnimationTransformation";
import CssProperty from "../../../enums/CssPropertyName";
import {
  DEFAULT_ANIMATION_DURATION_MAX,
  DEFAULT_ANIMATION_DURATION_MAX_EXTERNAL,
  DEFAULT_ANIMATION_DURATION_MIN,
  DEFAULT_ANIMATION_DURATION_MIN_EXTERNAL,
  DEFAULT_ANIMATION_ITERATION_COUNT_MIN,
  DEFAULT_ANIMATION_ITERATION_COUNT_MIN_EXTERNAL,
} from "../../../values/defaults/css/AnimationDefaults";
import FormOptionArray from "../FormOptionArray";
import FormOptionBoolean from "../FormOptionBoolean";
import FormOptionRange from "../FormOptionRange";
import FormSubsection from "../FormSubsection";
import FormSubsectionAnimationIterationCount from "./FormSubsectionAnimationIterationCount";
import FormSubsectionCssProps from "../../../interfaces/FormSubsectionCssProps";

import * as React from "react";
import { useCallback, useEffect, useMemo, useRef } from "react";

export default function FormSubsectionAnimation({
  external,
  option,
  setOption,
  toggle,
}: FormSubsectionCssProps<AnimationOptions>): React.ReactNode {
  const disabled = option?.enabled !== true;
  const setIterationCountOption = useCallback(
    (options: AnimationIterationCountOptions) => {
      setOption({
        iterationCount: {
          ...option.iterationCount,
          ...options,
        },
      });
    },
    [option?.iterationCount, setOption]
  );
  const durationMaxLimit = useMemo(
    () =>
      external
        ? DEFAULT_ANIMATION_DURATION_MAX_EXTERNAL
        : DEFAULT_ANIMATION_DURATION_MAX,
    [external]
  );
  const durationMinLimit = useMemo(
    () =>
      external
        ? DEFAULT_ANIMATION_DURATION_MIN_EXTERNAL
        : DEFAULT_ANIMATION_DURATION_MIN,
    [external]
  );
  const iterationCountMinLimit = useMemo(
    () =>
      external
        ? DEFAULT_ANIMATION_ITERATION_COUNT_MIN_EXTERNAL
        : DEFAULT_ANIMATION_ITERATION_COUNT_MIN,
    [external]
  );
  const mounted = useRef(false);
  useEffect(() => {
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
    const newIterationCount: AnimationIterationCountOptions = {};
    if (external && option?.iterationCount?.integersOnly !== true) {
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
          ...option?.iterationCount,
          ...newIterationCount,
        };
      }
      setOption(newState);
    }
  }, [external]);
  return (
    <FormOptionBoolean
      checked={!disabled}
      label="animation"
      setChecked={(checked) => toggle(CssProperty.ANIMATION, checked)}
    >
      <FormSubsection label="directions">
        <FormOptionArray
          disabled={() => disabled}
          possibleValues={Object.values(AnimationDirection)}
          setValues={(directions) => setOption({ directions })}
          values={option?.directions ?? []}
        />
      </FormSubsection>
      <FormSubsection label="duration">
        <FormOptionRange
          {...{ disabled }}
          max={durationMaxLimit}
          min={durationMinLimit}
          maxValue={option?.durationMax ?? durationMaxLimit}
          minValue={option?.durationMin ?? durationMinLimit}
          setValues={(durationMin, durationMax) =>
            setOption({
              durationMax,
              durationMin,
            })
          }
        />
      </FormSubsection>
      <FormSubsection label="easing functions">
        <FormOptionArray
          disabled={(value) =>
            disabled ||
            (external &&
              (value === AnimationEasingFunction.CUBIC_BEZIER ||
                value === AnimationEasingFunction.STEPS))
          }
          possibleValues={Object.values(AnimationEasingFunction)}
          setValues={(easingFunctions) =>
            setOption({ ...option, ...{ easingFunctions } })
          }
          values={option?.easingFunctions ?? []}
        />
      </FormSubsection>
      <FormSubsection label="fill modes">
        <FormOptionArray
          disabled={() => disabled}
          possibleValues={Object.values(AnimationFillMode)}
          setValues={(fillModes) => setOption({ ...option, ...{ fillModes } })}
          values={option?.fillModes ?? []}
        />
      </FormSubsection>
      <FormSubsectionAnimationIterationCount
        {...{ disabled, external }}
        option={option?.iterationCount}
        setOption={setIterationCountOption}
      />
      <FormSubsection label="transformations">
        <FormOptionArray
          disabled={() => disabled}
          possibleValues={Object.values(AnimationTransformation)}
          setValues={(transformations) =>
            setOption({ ...option, ...{ transformations } })
          }
          values={option?.transformations ?? []}
        />
      </FormSubsection>
    </FormOptionBoolean>
  );
}
