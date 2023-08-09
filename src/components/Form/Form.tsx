import "../../styles/Form.scss";

import CssOptions, { DEFAULT_CSS_OPTIONS } from "../../interfaces/CssOptions";
import CssProperty from "../../enums/CssProperty";
import {
  DEFAULT_GLOBAL_OPTIONS_IGNORE_SPACES,
  DEFAULT_GLOBAL_OPTIONS_SIZE,
  DEFAULT_GLOBAL_OPTIONS_TEXT,
  DEFAULT_GLOBAL_OPTIONS_UNSAFE,
} from "../../interfaces/GlobalOptions";
import FormSectionCss from "./FormSectionCss";
import FormSectionExport from "./FormSectionExport";
import FormSectionGlobal from "./FormSectionGlobal";
import FormSectionGlyph from "./FormSectionGlyph";
import GlyphOption from "../../enums/GlyphOption";
import GlyphOptions, {
  DEFAULT_GLYPH_OPTIONS,
} from "../../interfaces/GlyphOptions";
import Options from "../../interfaces/Options";
import RandomCss from "../RandomCss";
import RandomCssUtils from "../../classes/RandomCssUtils";

import * as React from "react";
import { useMemo, useReducer, useState } from "react";
import { createRoot } from "react-dom/client";

export default function Form(): React.ReactNode {
  const [center, setCenter] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(null);
  const [css, setCss] = useReducer(
    RandomCssUtils.reducer<CssOptions>,
    DEFAULT_CSS_OPTIONS
  );
  const [glyph, setGlyph] = useReducer(
    RandomCssUtils.reducer<GlyphOptions>,
    DEFAULT_GLYPH_OPTIONS
  );
  const [ignoreSpaces, setIgnoreSpaces] = useState(
    DEFAULT_GLOBAL_OPTIONS_IGNORE_SPACES
  );
  const [size, setSize] = useState<number>(DEFAULT_GLOBAL_OPTIONS_SIZE);
  const [text, setText] = useState(DEFAULT_GLOBAL_OPTIONS_TEXT);
  const [unsafe, setUnsafe] = useState<boolean>(DEFAULT_GLOBAL_OPTIONS_UNSAFE);

  const optionsToExport: Options = useMemo(
    () => ({
      css: Object.assign(
        {},
        ...Object.values(CssProperty).map(
          (cssProperty) =>
            css?.[cssProperty]?.enabled === true && {
              [cssProperty]: css[cssProperty],
            }
        )
      ),
      global: { ignoreSpaces, size, unsafe },
      glyph: Object.assign(
        {},
        ...Object.values(GlyphOption).map(
          (glyphOption) =>
            glyph?.[glyphOption]?.enabled && {
              [glyphOption]: glyph[glyphOption],
            }
        )
      ),
    }),
    [css, glyph, ignoreSpaces, size, unsafe]
  );

  return (
    <>
      <div id="top" data-testid="top">
        <RandomCss center={center} options={optionsToExport} text={text} />
      </div>

      <div id="dev-form">
        <FormSectionGlobal
          center={center}
          ignoreSpaces={ignoreSpaces}
          setCenter={setCenter}
          setIgnoreSpaces={setIgnoreSpaces}
          setSize={setSize}
          setText={setText}
          setUnsafe={setUnsafe}
          size={size}
          text={text}
          unsafe={unsafe}
        />

        <FormSectionCss css={css} setCss={setCss} unsafe={unsafe} />

        <FormSectionGlyph options={glyph} setOptions={setGlyph} />

        <FormSectionExport
          copied={copied}
          optionsToExport={optionsToExport}
          setCopied={setCopied}
          unsafe={unsafe}
        />
      </div>
    </>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  createRoot(document.getElementById("app")).render(<Form />);
});
