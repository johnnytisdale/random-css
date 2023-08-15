import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { useState } from "react";

export function Tooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="tooltip-container"
      onMouseOut={() => setShow(false)}
      onMouseOver={() => setShow(true)}
    >
      <div className="tooltip-icon">
        <FontAwesomeIcon icon={faCircleInfo} size="xs" />
      </div>
      {show ? <div className="tooltip-content">{text}</div> : null}
    </div>
  );
}
