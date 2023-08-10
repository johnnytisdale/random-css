import Color from "../../enums/ColorKeyword";
import ColorOptions from "../../interfaces/ColorOptions";
import CssColorProperty from "../../types/CssColorProperty";
import FormOptionArray from "./FormOptionArray";
import FormOptionBoolean from "./FormOptionBoolean";
import FormOptionRange from "./FormOptionRange";
import FormSubsection from "./FormSubsection";
import FormSubsectionCssProps from "../../interfaces/FormSubsectionCssProps";

import * as React from "react";
import { useCallback } from "react";

interface Props extends FormSubsectionCssProps<ColorOptions> {
  cssPropertyName: CssColorProperty;
  setColorOption: (cssProperty: CssColorProperty, option: ColorOptions) => void;
}

export default function FormSubsectionColor({
  cssPropertyName,
  external,
  option,
  setColorOption: _setColorOption,
  toggle,
}: Props): React.ReactNode {
  const setOption = useCallback(
    (options: ColorOptions) => _setColorOption(cssPropertyName, options),
    [cssPropertyName, _setColorOption]
  );
  const disabled = option?.enabled !== true;
  return (
    <FormOptionBoolean
      checked={!disabled}
      label={cssPropertyName}
      setChecked={(checked) => toggle(cssPropertyName, checked)}
    >
      {external ? (
        <FormSubsection label="keywords">
          <FormOptionArray
            disabled={() => disabled}
            possibleValues={Object.values(Color)}
            setValues={(colorKeywords) => setOption({ colorKeywords })}
            values={option?.colorKeywords ?? []}
          />
        </FormSubsection>
      ) : (
        <>
          <FormSubsection label="red">
            <FormOptionRange
              {...{ disabled }}
              max={255}
              min={0}
              maxValue={option?.rMax ?? 255}
              minValue={option?.rMin ?? 0}
              setValues={(rMin, rMax) => setOption({ rMax, rMin })}
            />
          </FormSubsection>
          <FormSubsection label="green">
            <FormOptionRange
              {...{ disabled }}
              max={255}
              min={0}
              maxValue={option?.gMax ?? 255}
              minValue={option?.gMin ?? 0}
              setValues={(gMin, gMax) => setOption({ gMax, gMin })}
            />
          </FormSubsection>
          <FormSubsection label="blue">
            <FormOptionRange
              {...{ disabled }}
              max={255}
              min={0}
              maxValue={option?.bMax ?? 255}
              minValue={option?.bMin ?? 0}
              setValues={(bMin, bMax) => setOption({ bMax, bMin })}
            />
          </FormSubsection>
        </>
      )}
    </FormOptionBoolean>
  );
}
