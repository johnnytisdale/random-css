import RandomString from "../components/RandomString";
import { createRoot } from "react-dom/client";

document.addEventListener("DOMContentLoaded", () => {
  const domNode = document.getElementById("app");
  if (!domNode) {
    return;
  }
  createRoot(domNode).render(
    <RandomString
      center={true}
      glyph="unicode"
      ignoreSpaces={true}
      size={8}
      text="random css"
      style={[
        "animation",
        "backgroundColor",
        "borderColor",
        "borderRadius",
        "borderStyle",
        "borderWidth",
        "color",
        "fontFamily",
        "fontStyle",
        "fontWeight",
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle",
      ]}
    />
  );
});
