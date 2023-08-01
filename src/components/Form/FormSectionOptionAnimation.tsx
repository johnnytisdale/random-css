import { AnimationOption } from "../../classes/CSS/Animation";
import AnimationTransformation from "../../enums/AnimationTransformation";
import FormSectionOption from "../FormSectionOption";

import * as React from "react";
import { useMemo } from "react";

interface Props {
  option: AnimationOption | undefined;
  setOption: (option: AnimationOption) => void,
}

const FormSectionOptionAnimation = ({
  option,
  setOption
}: Props): React.ReactNode => {
  const enabled = useMemo(
    () =>  option?.enabled === true,
    [option?.enabled]
  );
  console.log({animationOption: option});
  return (
    <FormSectionOption
      label="animation"
      expandedContent={
        <div className="subsection">
          <div className="label">transformations</div>
          <div className="options">
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
          </div> 
        </div>
      }
    >
      <input
        checked={enabled}
        type="checkbox"
        onChange={e => {
          setOption({
            ...(option ?? {
              enabled: false,
              transformations: Object.values(AnimationTransformation)
            }),
            ...{ enabled: e.target.checked }
          });
        }}
      />
    </FormSectionOption>
  );
}

export default FormSectionOptionAnimation;