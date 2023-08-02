import { AnimationOption } from "../../../classes/CSS/Animation";
import FormSectionOptionSubsection from "../FormSectionOptionSubsection";

import * as React from "react";

interface Props {
  enabled: boolean,
  option: AnimationOption | undefined;
  setOption: (option: AnimationOption) => void,
}

const FormSectionOptionAnimationSubsectionDuration = ({
  enabled,
  option,
  setOption
}: Props): React.ReactNode => {
  return (
    <FormSectionOptionSubsection label='duration'>
      <div className="option">
        <div className="label">min</div>
        <input
          disabled={enabled === false}
          max="3000"
          min="300"
          type="range"
          value={option.durationMin ?? 300}
          onChange={e => {
            const value = parseInt(e.target.value);
            setOption({
              ...option,
              ...{
                durationMin: parseInt(e.target.value),
                ...(
                  value > option.durationMax && {
                    durationMax: value
                  }
                )
              }
            });
          }}
        />
      </div>
      <div className="option">
        <div className="label">max</div>
        <input
          disabled={enabled === false}
          max="3000"
          min="300"
          type="range"
          value={option.durationMax ?? 3000}
          onChange={e => {
            const value = parseInt(e.target.value);
            setOption({
              ...option,
              ...{
                durationMax: value,
                ...(
                  value < option.durationMin && {
                    durationMin: value
                  }
                )
              }
            });
          }}
        />
      </div>
    </FormSectionOptionSubsection>
  );
}

export default FormSectionOptionAnimationSubsectionDuration;