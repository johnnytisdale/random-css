import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { useMemo } from "react";
import OptionProps from "../../interfaces/OptionProps";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  "data-testid"?: string;
}

interface Props extends OptionProps {
  input: InputProps;
}

export default function FormOption({
  children,
  id,
  input,
  label,
}: Props): React.ReactNode {
  const [expanded, setExpanded] = React.useState(false);
  const className = useMemo(
    () =>
      [
        "option",
        children !== undefined ? "expandable" : null,
        expanded ? "expanded" : null,
      ]
        .filter(Boolean)
        .join(" "),
    [children, expanded]
  );
  return (
    <>
      <div id={id} className={className}>
        <div
          className="label"
          onClick={children !== undefined ? () => setExpanded(!expanded) : null}
        >
          {children !== undefined && (
            <span className="chevron">
              <FontAwesomeIcon
                icon={expanded ? faCaretDown : faCaretRight}
                size="sm"
              />
            </span>
          )}
          <div className="text">{label}</div>
        </div>
        <div className="input">
          <input {...input} />
        </div>
      </div>
      {expanded && children !== undefined && (
        <div className="expanded-content">{children}</div>
      )}
    </>
  );
}
