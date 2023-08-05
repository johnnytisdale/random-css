import FormOptionArray from "./FormOptionArray";
import FormOptionBoolean from "./FormOptionBoolean";
import FormOptionProbability from "./FormOptionProbability";
import FormSubsection from "./FormSubsection";

import * as React from "react";
import { DEFAULT_FONT_STYLE_MAX_DEGREES, DEFAULT_FONT_STYLE_MIN_DEGREES, FontStyleOptions } from "../../classes/CSS/FontStyle";
import FontStyleKeyword from "../../enums/FontStyleKeyword";
import FormOptionRange from "./FormOptionRange";

interface Props {
  option: FontStyleOptions;
  setOption: (option: FontStyleOptions) => void,
  unsafe: boolean
}

export default function FormSubsectionFontStyle ({
  option,
  setOption,
  unsafe
}: Props): React.ReactNode {
  const disabled = option?.enabled !== true;
  return (
    <FormOptionBoolean
      checked={option?.enabled === true}
      label="fontStyle"
      setChecked={enabled => setOption({ enabled })}
    >
      <FormSubsection label="styles">
        <FormOptionArray
          {...{ disabled }}
          possibleValues={Object.values(FontStyleKeyword)}
          setValues={fontStyles => (
            fontStyles.length &&
            setOption({ fontStyles })
          )}
          values={option.fontStyles}
        />
      </FormSubsection>
      <FormSubsection label="oblique degrees">
        <FormOptionBoolean
          checked={option?.degrees === true}
          disabled={
            disabled ||
            !unsafe ||
            !option?.fontStyles.includes(FontStyleKeyword.OBLIQUE)
          }
          label="degrees"
          setChecked={degrees => setOption({ degrees })}
        />
        <FormOptionProbability
          label="degreesProbability"
          disabled={
            disabled ||
            !unsafe ||
            !option?.degrees ||
            !option?.fontStyles.includes(FontStyleKeyword.OBLIQUE)
          }
          value={option?.degreesProbability}
          setProbability={
            degreesProbability => setOption({ degreesProbability })
          }
        />
        <FormOptionRange
          disabled={
            disabled ||
            !unsafe ||
            !option?.degrees ||
            !option?.fontStyles.includes(FontStyleKeyword.OBLIQUE)
          }
          max={DEFAULT_FONT_STYLE_MAX_DEGREES}
          min={DEFAULT_FONT_STYLE_MIN_DEGREES}
          maxValue={option?.maxDegrees}
          minValue={option?.minDegrees}
          setValues={
            (minDegrees, maxDegrees) => setOption({ maxDegrees, minDegrees })
          }
        />
      </FormSubsection>
    </FormOptionBoolean>
  );
}
