import CssProperty from "../../enums/CssPropertyName";
import {
  DEFAULT_FONT_STYLE_MAX_DEGREES,
  DEFAULT_FONT_STYLE_MIN_DEGREES,
} from "../../values/defaults/css/FontStyleDefaults";
import FontStyleKeyword from "../../enums/FontStyleKeyword";
import FontStyleOptions from "../../interfaces/FontStyleOptions";
import FormOptionArray from "./FormOptionArray";
import FormOptionBoolean from "./FormOptionBoolean";
import FormOptionProbability from "./FormOptionProbability";
import FormOptionRange from "./FormOptionRange";
import FormSubsection from "./FormSubsection";
import FormSubsectionCssProps from "../../interfaces/FormSubsectionCssProps";

import * as React from "react";

export default function FormSubsectionFontStyle({
  external,
  option,
  setOption,
  toggle,
}: FormSubsectionCssProps<FontStyleOptions>): React.ReactNode {
  const disabled = option?.enabled !== true;
  return (
    <FormOptionBoolean
      checked={option?.enabled === true}
      label="fontStyle"
      setChecked={(checked) => toggle(CssProperty.FONT_STYLE, checked)}
    >
      <FormSubsection label="styles">
        <FormOptionArray
          disabled={() => disabled}
          possibleValues={Object.values(FontStyleKeyword)}
          setValues={(fontStyles) =>
            fontStyles.length && setOption({ fontStyles })
          }
          values={option.fontStyles}
        />
      </FormSubsection>
      <FormSubsection label="oblique degrees">
        <FormOptionBoolean
          checked={option?.degrees === true}
          disabled={
            disabled ||
            external ||
            !(option?.fontStyles ?? []).includes(FontStyleKeyword.OBLIQUE)
          }
          label="degrees"
          setChecked={(degrees) => setOption({ degrees })}
        />
        <FormOptionProbability
          label="degreesProbability"
          disabled={
            disabled ||
            external ||
            !option?.degrees ||
            !(option?.fontStyles ?? []).includes(FontStyleKeyword.OBLIQUE)
          }
          value={option?.degreesProbability}
          setProbability={(degreesProbability) =>
            setOption({ degreesProbability })
          }
        />
        <FormOptionRange
          disabled={
            disabled ||
            external ||
            !option?.degrees ||
            !option?.fontStyles.includes(FontStyleKeyword.OBLIQUE)
          }
          max={DEFAULT_FONT_STYLE_MAX_DEGREES}
          min={DEFAULT_FONT_STYLE_MIN_DEGREES}
          maxValue={option?.maxDegrees}
          minValue={option?.minDegrees}
          setValues={(minDegrees, maxDegrees) =>
            setOption({ maxDegrees, minDegrees })
          }
        />
      </FormSubsection>
    </FormOptionBoolean>
  );
}
