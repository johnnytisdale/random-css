import * as React from "react";

interface Props {
  children: React.ReactNode,
  label: string,
}

export default function FormSubsection({
  children,
  label
}: Props): React.ReactNode {
  return (
    <div className="subsection">
      <div className="label">{label}</div>
      <div className="options">
        { children }
      </div>
    </div>
  );
}