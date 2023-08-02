import { AnimationOption } from "../../../classes/CSS/Animation";
import FormSectionOptionAnimationSubsectionDirections from "./FormSectionOptionAnimationSubsectionDirections";
import FormSectionOptionAnimationSubsectionEasingFunctions from "./FormSectionOptionAnimationSubsectionEasingFunctions";
import FormSectionOptionAnimationSubsectionFillModes from "./FormSectionOptionAnimationSubsectionFillModes";
import FormSectionOptionAnimationSubsectionTransformations from "./FormSectionOptionAnimationSubsectionTransformations";
import FormSectionOption from "../FormSectionOption";

import * as React from "react";
import { useMemo } from "react";
import FormSectionOptionAnimationSubsectionDuration from "./FormSectionOptionAnimationSubsectionDuration";
import FormSectionOptionAnimationSubsectionIterationCount from "./FormSectionOptionAnimationSubsectionIterationCount";

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
      <FormSectionOptionAnimationSubsectionDirections
        enabled={enabled}
        option={option}
        setOption={setOption}
      />
      <FormSectionOptionAnimationSubsectionDuration
        enabled={enabled}
        option={option}
        setOption={setOption}
      />
      <FormSectionOptionAnimationSubsectionEasingFunctions
        enabled={enabled}
        option={option}
        setOption={setOption}
      />
      <FormSectionOptionAnimationSubsectionFillModes
        enabled={enabled}
        option={option}
        setOption={setOption}
      />
      <FormSectionOptionAnimationSubsectionIterationCount
        enabled={enabled}
        option={option}
        setOption={setOption}
      />
      <FormSectionOptionAnimationSubsectionTransformations
        enabled={enabled}
        option={option}
        setOption={setOption}
      />
    </FormSectionOption>
  );
}

export default FormSectionOptionAnimation;