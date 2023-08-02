import { AnimationOption } from "../../../classes/CSS/Animation";
import FormSectionOptionRange from "./FormSectionOptionRange";
import FormSectionOptionSubsection from "../FormSectionOptionSubsection";

import * as React from "react";

interface Props {
  enabled: boolean,
  option: AnimationOption | undefined;
  setOption: (option: AnimationOption) => void,
}

const max = 3000;
const min = 300;

const FormSectionOptionAnimationSubsectionDuration = ({
  enabled,
  option,
  setOption
}: Props): React.ReactNode => {
  return (
    <FormSectionOptionSubsection label='duration'>
      <FormSectionOptionRange
        disabled={!enabled}
        max={max}
        min={min}
        maxValue={option?.durationMax ?? max}
        minValue={option?.durationMin ?? min}
        setValues={(min: number, max: number) => setOption(
          {...option, ...{durationMax: max, durationMin: min}}
        )}
      />
    </FormSectionOptionSubsection>
  );
}

export default FormSectionOptionAnimationSubsectionDuration;