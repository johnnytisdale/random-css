import { AnimationOption } from "../../../classes/CSS/Animation";
import AnimationTransformation from "../../../enums/AnimationTransformation";
import FormSectionOptionSubsection from "../FormSectionOptionSubsection";

import * as React from "react";

interface Props {
  enabled: boolean,
  option: AnimationOption | undefined;
  setOption: (option: AnimationOption) => void,
}

const FormSectionOptionAnimationSubsectionTransformations = ({
  enabled,
  option,
  setOption
}: Props): React.ReactNode => {
  return (
    <FormSectionOptionSubsection label='transformations'>
      {
        Object.values(AnimationTransformation).map(transformation => (
          <div className="option" key={transformation}>
            <div className="label">{transformation}</div>
            <input
              checked={
                option?.transformations !== undefined &&
                option.transformations.includes(transformation)
              }
              disabled={enabled !== true}
              type="checkbox"
              onChange={e => {
                const transformations = option.transformations ?? [];
                setOption({
                  ...option,
                  ...{
                    transformations: e.target.checked === true
                      ? [
                        transformation,
                        ...transformations
                      ]
                      : transformations.filter(
                        t => t !== transformation
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

export default FormSectionOptionAnimationSubsectionTransformations;