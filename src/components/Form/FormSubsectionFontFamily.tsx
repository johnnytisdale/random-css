import FontFamilyName from "../../enums/FontFamilyName";
import FontGenericName from "../../enums/FontGenericName";
import { FontFamilyOptions } from "../../classes/CSS/FontFamily";
import FormOptionArray from "./FormOptionArray";
import FormOptionBoolean from "./FormOptionBoolean";
import FormOptionProbability from "./FormOptionProbability";
import FormSubsection from "./FormSubsection";

import * as React from "react";
import { useMemo } from "react";

interface Props {
  option: FontFamilyOptions;
  setOption: (option: FontFamilyOptions) => void,
}

export default function FormSubsectionFontFamily ({
  option,
  setOption
}: Props): React.ReactNode {
  const disabled = useMemo(
    () => option?.enabled !== true,
    [option?.enabled]
  );
  return (
    <FormOptionBoolean
      checked={option?.enabled === true}
      label="fontFamily"
      setChecked={enabled => setOption({ enabled })}
    >
      <FormSubsection label="value types">
        <FormOptionBoolean
          checked={option?.includeFamilyNames === true}
          label="includeFamilyNames"
          setChecked={includeFamilyNames => (
            !includeFamilyNames &&
            !option.includeFallbacks &&
            !option.includeGenericNames ||
            setOption({ includeFamilyNames })
          )}
        />
        <FormOptionBoolean
          checked={option?.includeGenericNames === true}
          label="includeGenericNames"
          setChecked={includeGenericNames => (
            !includeGenericNames &&
            !option.includeFallbacks &&
            !option.includeFamilyNames ||
            setOption({ includeGenericNames })
          ) }
        />
        <FormOptionBoolean
          checked={option?.includeFallbacks === true}
          label="includeFallbacks"
          setChecked={includeFallbacks => (
            !includeFallbacks &&
            !option.includeFamilyNames &&
            !option.includeGenericNames ||
            setOption({ includeFallbacks })
          )}
        />
        <FormOptionProbability
          label="fallbackProbability"
          disabled={disabled || !option?.includeFallbacks}
          value={option?.fallbackProbability}
          setProbability={
            fallbackProbability => setOption({ fallbackProbability })
          }
        />
      </FormSubsection>
      <FormSubsection label="family names">
        <FormOptionArray
          disabled={disabled}
          displayValue={family => String(family).replaceAll('"', '')}
          possibleValues={Object.values(FontFamilyName)}
          setValues={fontFamilyNames => (
            fontFamilyNames.length &&
            setOption({ fontFamilyNames })
          )}
          values={option.fontFamilyNames}
        />
      </FormSubsection>
      <FormSubsection label="generic names">
        <FormOptionArray
          disabled={disabled}
          possibleValues={Object.values(FontGenericName)}
          setValues={fontGenericNames => (
            fontGenericNames.length &&
            setOption({ fontGenericNames })
          )}
          values={option.fontGenericNames}
        />
      </FormSubsection>
    </FormOptionBoolean>
  );
}
