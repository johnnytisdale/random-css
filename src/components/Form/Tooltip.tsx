import CssPropertyName from "../../enums/CssPropertyName";
import { RandomDiv } from "../RandomElements";

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
      {show ? (
        <RandomDiv
          className="tooltip-content"
          fixedStyle={{ borderWidth: ".5rem" }}
          style={CssPropertyName.BORDER_COLOR}
        >
          {text}
        </RandomDiv>
      ) : null}
    </div>
  );
}
