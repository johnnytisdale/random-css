import FontFamilyName from "../../enums/FontFamilyName";
import FontGenericName from "../../enums/FontGenericName";
import FontFamilyOptions from "../../interfaces/FontFamilyOptions";
import FormOptionArray from "./FormOptionArray";
import FormOptionBoolean from "./FormOptionBoolean";
import FormOptionProbability from "./FormOptionProbability";
import FormSubsection from "./FormSubsection";

import * as React from "react";

interface Props {
  option: FontFamilyOptions;
  setOption: (option: FontFamilyOptions) => void;
}

export default function FormSubsectionFontFamily({
  option,
  setOption,
}: Props): React.ReactNode {
  const disabled = option?.enabled !== true;
  return (
    <FormOptionBoolean
      checked={!disabled}
      label="fontFamily"
      setChecked={(enabled) => setOption({ enabled })}
    >
      <FormSubsection label="value types">
        <FormOptionBoolean
          checked={option?.includeFamilyNames === true}
          {...{ disabled }}
          label="includeFamilyNames"
          setChecked={(includeFamilyNames) =>
            (!includeFamilyNames &&
              !option.includeFallbacks &&
              !option.includeGenericNames) ||
            setOption({ includeFamilyNames })
          }
        />
        <FormOptionBoolean
          checked={option?.includeGenericNames === true}
          {...{ disabled }}
          label="includeGenericNames"
          setChecked={(includeGenericNames) =>
            (!includeGenericNames &&
              !option.includeFallbacks &&
              !option.includeFamilyNames) ||
            setOption({ includeGenericNames })
          }
        />
        <FormOptionBoolean
          checked={option?.includeFallbacks === true}
          {...{ disabled }}
          label="includeFallbacks"
          setChecked={(includeFallbacks) =>
            (!includeFallbacks &&
              !option.includeFamilyNames &&
              !option.includeGenericNames) ||
            setOption({ includeFallbacks })
          }
        />
        <FormOptionProbability
          label="fallbackProbability"
          disabled={disabled || !option?.includeFallbacks}
          value={option?.fallbackProbability}
          setProbability={(fallbackProbability) =>
            setOption({ fallbackProbability })
          }
        />
      </FormSubsection>
      <FormSubsection label="family names">
        <FormOptionArray
          {...{ disabled }}
          displayValue={(family) => String(family).replaceAll('"', "")}
          possibleValues={Object.values(FontFamilyName)}
          setValues={(fontFamilyNames) =>
            fontFamilyNames.length && setOption({ fontFamilyNames })
          }
          values={option.fontFamilyNames}
        />
      </FormSubsection>
      <FormSubsection label="generic names">
        <FormOptionArray
          {...{ disabled }}
          possibleValues={Object.values(FontGenericName)}
          setValues={(fontGenericNames) =>
            fontGenericNames.length && setOption({ fontGenericNames })
          }
          values={option.fontGenericNames}
        />
      </FormSubsection>
    </FormOptionBoolean>
  );
}
