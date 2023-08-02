import { AnimationOption } from "../../../classes/CSS/Animation";
import AnimationDirection from "../../../enums/AnimationDirection";
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
    <FormSectionOptionSubsection label='directions'>
      {
        Object.values(AnimationDirection).map(direction => (
          <div className="option" key={direction}>
            <div className="label">{direction}</div>
            <input
              checked={
                option?.directions !== undefined &&
                option.directions.includes(direction)
              }
              disabled={enabled !== true}
              type="checkbox"
              onChange={e => {
                const directions = option.directions ?? [];
                setOption({
                  ...option,
                  ...{
                    directions: e.target.checked === true
                      ? [
                        direction,
                        ...directions
                      ]
                      : directions.filter(
                        t => t !== direction
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