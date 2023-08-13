import "../../styles/Form.scss";

import BorderStyleKeyword from "../../enums/BorderStyleKeyword";
import StyleConfig, {
  DEFAULT_STYLE_CONFIG,
} from "../../interfaces/StyleConfig";
import CssPropertyName from "../../enums/CssPropertyName";
import { DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL } from "../../interfaces/RandomElementGenericProps";
import {
  DEFAULT_RANDOM_STRING_PROPS_IGNORE_SPACES,
  DEFAULT_RANDOM_STRING_PROPS_SIZE,
  DEFAULT_RANDOM_STRING_PROPS_TEXT,
} from "../../interfaces/RandomStringProps";
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
import { useLayoutEffect, useMemo, useReducer, useState } from "react";
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
    DEFAULT_RANDOM_STRING_PROPS_IGNORE_SPACES
  );
  const [size, setSize] = useState<number>(DEFAULT_RANDOM_STRING_PROPS_SIZE);
  const [text, setText] = useState(DEFAULT_RANDOM_STRING_PROPS_TEXT);
  const [external, setExternal] = useState<boolean>(
    DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL
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

  useLayoutEffect(() => {
    if (window.matchMedia("(min-width: 1375px)").matches) {
      setSize(8);
    } else if (window.matchMedia("(min-width: 1200px)").matches) {
      setSize(7);
    } else if (window.matchMedia("(min-width: 1000px)").matches) {
      setSize(6);
    } else if (window.matchMedia("(min-width: 850px)").matches) {
      setSize(5);
    } else if (window.matchMedia("(min-width: 700px)").matches) {
      setSize(4);
    } else if (window.matchMedia("(min-width: 550px)").matches) {
      setSize(3);
    } else if (window.matchMedia("(min-width: 375px)").matches) {
      setSize(2);
    }
  }, []);

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
