import "../../styles/Form.scss";

import BorderStyleKeyword from "../../enums/BorderStyleKeyword";
import CssOptions, { DEFAULT_CSS_OPTIONS } from "../../interfaces/CssOptions";
import CssProperty from "../../enums/CssPropertyName";
import {
  DEFAULT_GLOBAL_OPTIONS_IGNORE_SPACES,
  DEFAULT_GLOBAL_OPTIONS_SIZE,
  DEFAULT_GLOBAL_OPTIONS_TEXT,
  DEFAULT_GLOBAL_OPTIONS_EXTERNAL,
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
import RandomCssUtils from "../../classes/RandomCssUtils";
import { RandomDiv } from "../RandomElements";
import RandomString from "../RandomString";

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
  const [external, setExternal] = useState<boolean>(
    DEFAULT_GLOBAL_OPTIONS_EXTERNAL
  );

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
      global: { ignoreSpaces, size, external },
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
    [css, external, glyph, ignoreSpaces, size]
  );

  return (
    <>
      <RandomDiv
        fixedStyle={{ borderWidth: "1rem", boxSizing: "border-box" }}
        id="top"
        style={{
          borderColor: { enabled: true },
          borderStyle: {
            enabled: true,
            borderStyles: [
              BorderStyleKeyword.DASHED,
              BorderStyleKeyword.DOTTED,
              BorderStyleKeyword.DOUBLE,
              BorderStyleKeyword.GROOVE,
              BorderStyleKeyword.SOLID,
            ],
          },
        }}
        testID="top"
      >
        <RandomString
          center={center}
          external={optionsToExport.global.external}
          glyphOptions={optionsToExport.glyph}
          ignoreSpaces={ignoreSpaces}
          size={optionsToExport.global.size}
          style={optionsToExport.css}
          text={text}
        />
      </RandomDiv>

      <div id="dev-form">
        <FormSectionGlobal
          center={center}
          external={external}
          ignoreSpaces={ignoreSpaces}
          setCenter={setCenter}
          setIgnoreSpaces={setIgnoreSpaces}
          setSize={setSize}
          setText={setText}
          setExternal={setExternal}
          size={size}
          text={text}
        />

        <FormSectionCss css={css} setCss={setCss} external={external} />

        <FormSectionGlyph options={glyph} setOptions={setGlyph} />

        <FormSectionExport
          copied={copied}
          optionsToExport={optionsToExport}
          setCopied={setCopied}
          external={external}
        />
      </div>
    </>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  createRoot(document.getElementById("app")).render(<Form />);
});
