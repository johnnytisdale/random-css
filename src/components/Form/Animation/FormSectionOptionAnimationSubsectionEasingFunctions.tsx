import { AnimationOption } from "../../../classes/CSS/Animation";
import AnimationEasingFunction from "../../../enums/AnimationEasingFunction";
import FormSectionOptionSubsection from "../FormSectionOptionSubsection";

import * as React from "react";

interface Props {
  enabled: boolean,
  option: AnimationOption | undefined;
  setOption: (option: AnimationOption) => void,
}

const FormSectionOptionAnimationSubsectionDirections = ({
  enabled,
  option,
  setOption
}: Props): React.ReactNode => {
  return (
    <FormSectionOptionSubsection label='easing functions'>
      {
        Object.values(AnimationEasingFunction).map(easingFunction => (
          <div className="option" key={easingFunction}>
            <div className="label">{easingFunction}</div>
            <input
              checked={
                option?.easingFunctions !== undefined &&
                option.easingFunctions.includes(easingFunction)
              }
              disabled={enabled !== true}
              type="checkbox"
              onChange={e => {
                const easingFunctions = option.easingFunctions ?? [];
                setOption({
                  ...option,
                  ...{
                    easingFunctions: e.target.checked === true
                      ? [
                        easingFunction,
                        ...easingFunctions
                      ]
                      : easingFunctions.filter(
                        t => t !== easingFunction
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

export default FormSectionOptionAnimationSubsectionDirections;