import GlyphConfig from "../interfaces/GlyphConfig";
import RandomString from "./RandomString";
import StyleConfig from "../interfaces/StyleConfig";

import * as React from "react";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import useColorContrast from "../hooks/useColorContrast";
import { RandomDiv } from "./RandomElements";
import CssPropertyName from "../enums/CssPropertyName";

function Dev(): React.ReactNode {
  const [primary, secondary] = useColorContrast("backgroundColor", [
    "borderColor",
    "color",
  ]);
  const [glyph, setGlyph] = useState<GlyphConfig>({
    enabled: true,
    unicode: { enabled: true },
  });
  const [style, setStyle] = useState<StyleConfig>({
    animation: { enabled: true },
    borderColor: { enabled: true },
    borderRadius: { enabled: true },
    borderStyle: { enabled: true },
    borderWidth: { enabled: true },
  });
  // useEffect(() => {
  //   setTimeout(() => {
  //     setStyle({
  //       borderColor: { enabled: false },
  //       borderRadius: { enabled: true },
  //       borderStyle: { enabled: true },
  //       borderWidth: { enabled: true },
  //     });
  //     setTimeout(() => setGlyph({ enabled: false }), 3000);
  //   }, 3000);
  // }, []);
  return (
    <RandomDiv
      fixedStyle={{ borderStyle: "solid" }}
      style={[
        CssPropertyName.BORDER_COLOR,
        {
          backgroundColor: {
            maxDelay: 0,
            minDelay: 1000,
          },
        },
      ]}
      plugins={{ colorContrast: { primary, secondary: secondary.borderColor } }}
    >
      <RandomString
        center={true}
        ignoreSpaces={true}
        plugins={{ colorContrast: { secondary: secondary.color } }}
        size={8}
        text="random css"
        style={style}
      />
      {/* <RandomDiv
        fixedStyle={{ fontSize: "8rem" }}
        plugins={{ colorContrast: { secondary: secondary.color } }}
      >
        foo
      </RandomDiv> */}
    </RandomDiv>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const domNode = document.getElementById("app");
  if (!domNode) {
    return;
  }
  createRoot(domNode).render(<Dev />);
});
