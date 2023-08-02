import * as React from "react";

interface Props {
  disabled?: boolean,
  max: number,
  min: number,
  maxLabel?: string,
  minLabel?: string,
  maxValue: number,
  minValue: number,
  setValues: (min: number, max: number) => void,
  step?: string,
}

export default function FormSectionOptionRange ({
  disabled = false,
  max,
  min,
  maxLabel = "max",
  minLabel = "min",
  maxValue,
  minValue,
  setValues,
  step = "1"
}: Props): React.ReactNode {
  const sharedProps = React.useMemo(() => ({
      disabled,
      max,
      min,
      step,
      type: "range"
    }),
    [disabled, max, min, step]
  );
  return (
    <>
      <div className="option">
        <div className="label">{minLabel}</div>
        <input
          {...sharedProps}
          value={minValue}
          onChange={e => {
            const value = parseFloat(e.target.value);
            setValues(value, value > maxValue ? value : maxValue);
          }}
        />
      </div>
      <div className="option">
        <div className="label">{maxLabel}</div>
        <input
          {...sharedProps}
          value={maxValue}
          onChange={e => {
            const value = parseFloat(e.target.value);
            setValues(value < minValue ? value : minValue, value);
          }}
        />
      </div>
    </>
  );
}