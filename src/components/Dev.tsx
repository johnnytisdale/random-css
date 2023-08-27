import GlyphConfig from "../interfaces/GlyphConfig";
import RandomString from "./RandomString";

import * as React from "react";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import StyleConfig from "../interfaces/StyleConfig";

function Dev(): React.ReactNode {
  const [glyph, setGlyph] = useState<GlyphConfig>({
    enabled: true,
    unicode: { enabled: true },
  });
  const [style, setStyle] = useState<StyleConfig>({
    backgroundColor: { enabled: true },
  });
  useEffect(() => {
    setTimeout(() => {
      // console.log("disabling glyph");
      // setGlyph({ enabled: false });
      console.log("disabling animation");
      setStyle({ backgroundColor: { enabled: false } });
    }, 3000);
  }, []);
  return (
    <RandomString
      center={true}
      glyph={glyph}
      ignoreSpaces={true}
      size={8}
      text="random css"
      style={style}
    />
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const domNode = document.getElementById("app");
  if (!domNode) {
    return;
  }
  createRoot(domNode).render(<Dev />);
});
