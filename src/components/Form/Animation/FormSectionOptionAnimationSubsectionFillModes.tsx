import { AnimationOption } from "../../../classes/CSS/Animation";
import AnimationFillMode from "../../../enums/AnimationFillMode";
import FormSectionOptionSubsection from "../FormSectionOptionSubsection";

import * as React from "react";

interface Props {
  enabled: boolean,
  option: AnimationOption | undefined;
  setOption: (option: AnimationOption) => void,
}

const FormSectionOptionAnimationSubsectionFillModes = ({
  enabled,
  option,
  setOption
}: Props): React.ReactNode => {
  return (
    <FormSectionOptionSubsection label='fill modes'>
      {
        Object.values(AnimationFillMode).map(fillMode => (
          <div className="option" key={fillMode}>
            <div className="label">{fillMode}</div>
            <input
              checked={
                option?.fillModes !== undefined &&
                option.fillModes.includes(fillMode)
              }
              disabled={enabled !== true}
              type="checkbox"
              onChange={e => {
                const fillModes = option.fillModes ?? [];
                setOption({
                  ...option,
                  ...{
                    fillModes: e.target.checked === true
                      ? [
                        fillMode,
                        ...fillModes
                      ]
                      : fillModes.filter(
                        t => t !== fillMode
                      )
                  }
                });
              }}
            />
          </div>
        ))
      }
    </FormSectionOptionSubsection>
  );
}

export default FormSectionOptionAnimationSubsectionFillModes;