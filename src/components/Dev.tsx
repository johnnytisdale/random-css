import GlyphConfig from "../interfaces/GlyphConfig";
import RandomString from "./RandomString";
import StyleConfig from "../interfaces/StyleConfig";

import * as React from "react";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

function Dev(): React.ReactNode {
  const [glyph, setGlyph] = useState<GlyphConfig>({
    enabled: true,
    unicode: { enabled: true },
  });
  const [style, setStyle] = useState<StyleConfig>({
    borderColor: { enabled: true },
    borderRadius: { enabled: true },
    borderStyle: { enabled: true },
    borderWidth: { enabled: true },
  });
  useEffect(() => {
    setTimeout(() => {
      setStyle({
        borderColor: { enabled: false },
        borderRadius: { enabled: true },
        borderStyle: { enabled: true },
        borderWidth: { enabled: true },
      });
      setTimeout(() => setGlyph({ enabled: false }), 3000);
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
