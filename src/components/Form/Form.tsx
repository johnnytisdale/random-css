import "../../styles/Form.scss";

import BorderStyleKeyword from "../../enums/BorderStyleKeyword";
import StyleConfig, {
  DEFAULT_STYLE_CONFIG,
} from "../../interfaces/StyleConfig";
import CssPropertyName from "../../enums/CssPropertyName";
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
import GlyphConfig, {
  DEFAULT_GLYPH_OPTIONS,
} from "../../interfaces/GlyphConfig";
import GlyphInput from "../../interfaces/GlyphInput";
import GlyphType from "../../enums/GlyphType";
import RandomCssUtils from "../../classes/RandomCssUtils";
import { RandomDiv } from "../RandomElements";
import RandomString from "../RandomString";
import StyleInput from "../../interfaces/StyleInput";

import * as React from "react";
import { useMemo, useReducer, useState } from "react";
import { createRoot } from "react-dom/client";

export default function Form(): React.ReactNode {
  const [center, setCenter] = useState<boolean>(true);
  const [styleConfig, setStyleConfig] = useReducer(
    RandomCssUtils.reducer<StyleConfig>,
    DEFAULT_STYLE_CONFIG
  );
  const [glyphConfig, setGlyphConfig] = useReducer(
    RandomCssUtils.reducer<GlyphConfig>,
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

  const styleExport: StyleInput = useMemo(
    () =>
      Object.assign(
        {},
        ...Object.values(CssPropertyName).map(
          (cssProperty) =>
            styleConfig?.[cssProperty]?.enabled === true && {
              [cssProperty]: styleConfig[cssProperty],
            }
        )
      ),
    [styleConfig]
  );

  const glyphExport: GlyphInput = useMemo(
    () =>
      Object.assign(
        {},
        ...Object.values(GlyphType).map(
          (glyphOption) =>
            glyphConfig?.[glyphOption]?.enabled && {
              [glyphOption]: glyphConfig[glyphOption],
            }
        )
      ),
    [glyphConfig]
  );

  return (
    <>
      <RandomDiv
        fixedStyle={{ borderWidth: ".5rem" }}
        id="top"
        style={[
          CssPropertyName.BORDER_COLOR,
          {
            borderStyle: {
              borderStyles: [
                BorderStyleKeyword.DASHED,
                BorderStyleKeyword.DOTTED,
                BorderStyleKeyword.DOUBLE,
                BorderStyleKeyword.GROOVE,
                BorderStyleKeyword.SOLID,
              ],
            },
          },
        ]}
        testID="top"
      >
        <RandomString
          center={center}
          external={external}
          glyphConfig={glyphConfig}
          ignoreSpaces={ignoreSpaces}
          size={size}
          style={styleConfig}
          text={text}
        />
      </RandomDiv>

      <RandomDiv id="dev-form" style={{ borderColor: { enabled: true } }}>
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

        <FormSectionCss
          styleConfig={styleConfig}
          setStyleConfig={setStyleConfig}
          external={external}
        />

        <FormSectionGlyph config={glyphConfig} setConfig={setGlyphConfig} />

        <FormSectionExport
          external={external}
          glyphConfig={glyphExport}
          styleConfig={styleExport}
        />
      </RandomDiv>
    </>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  createRoot(document.getElementById("app")).render(<Form />);
});
