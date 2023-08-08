import "../../styles/Form.scss";

import CssOptions, { DEFAULT_CSS_OPTIONS } from "../../interfaces/CssOptions";
import CssProperty from "../../enums/CssProperty";
import {
  DEFAULT_GLOBAL_OPTIONS,
  DEFAULT_GLOBAL_OPTIONS_IGNORE_SPACES,
  DEFAULT_GLOBAL_OPTIONS_SIZE,
  DEFAULT_GLOBAL_OPTIONS_TEXT,
  DEFAULT_GLOBAL_OPTIONS_UNSAFE,
} from "../../interfaces/GlobalOptions";
import FormOptionBoolean from "./FormOptionBoolean";
import FormSection from "./FormSection";
import FormSectionCss from "./FormSectionCss";
import FormSectionGlobal from "./FormSectionGlobal";
import GlyphOption from "../../enums/GlyphOption";
import Options from "../../interfaces/Options";
import RandomCss from "../RandomCss";

import * as React from "react";
import { useCallback, useMemo, useReducer, useState } from "react";
import { createRoot } from "react-dom/client";

interface State {
  options: Options;
}

const initialState: State = {
  options: {
    css: { ...DEFAULT_CSS_OPTIONS },
    global: { ...DEFAULT_GLOBAL_OPTIONS },
    glyph: {},
  },
};

export default function Form(): React.ReactNode {
  const [center, setCenter] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(null);
  const [css, setCss] = useState<CssOptions>(DEFAULT_CSS_OPTIONS);
  const [ignoreSpaces, setIgnoreSpaces] = useState<boolean>(
    DEFAULT_GLOBAL_OPTIONS_IGNORE_SPACES
  );
  const [size, setSize] = useState<number>(DEFAULT_GLOBAL_OPTIONS_SIZE);
  const [state, setState] = useReducer(
    (state: State, newState: Partial<State>) => ({ ...state, ...newState }),
    initialState
  );
  const [text, setText] = useState(DEFAULT_GLOBAL_OPTIONS_TEXT);
  const [unsafe, setUnsafe] = useState<boolean>(DEFAULT_GLOBAL_OPTIONS_UNSAFE);

  const toggleGlyphOption = useCallback(
    (glyphOption: GlyphOption, checked: boolean) => {
      const options = state.options;
      if (options.glyph[glyphOption] === undefined) {
        options.glyph[glyphOption] = { enabled: false };
      }
      options.glyph[glyphOption] = {
        ...options.glyph[glyphOption],
        ...{ enabled: checked },
      };
      setState({ options: options });
    },
    [setState, state.options]
  );

  const popupClassName = useMemo(
    () =>
      "popup-text" +
      (copied === true ? " show" : copied === false ? " hide" : ""),
    [copied]
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
      global: { ignoreSpaces, size, unsafe },
      glyph: Object.assign(
        {},
        ...Object.values(GlyphOption).map(
          (glyphOption) =>
            state.options.glyph?.[glyphOption]?.enabled === true && {
              [glyphOption]: state.options.glyph[glyphOption],
            }
        )
      ),
    }),
    [css, ignoreSpaces, size, setCss, state, unsafe]
  );

  return (
    <>
      <div id="top" data-testid="top">
        <RandomCss center={center} options={optionsToExport} text={text} />
      </div>

      {/* dev form */}
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

        {/* glyph */}
        <FormSection id="glyph-options" title="glyph options">
          <FormOptionBoolean
            checked={state.options.glyph?.leet?.enabled === true}
            id="1337"
            label="1337"
            setChecked={(x) => toggleGlyphOption(GlyphOption.LEET, x)}
          />
          <FormOptionBoolean
            checked={state.options.glyph?.unicode?.enabled === true}
            id="unicode"
            label={GlyphOption.UNICODE}
            setChecked={(x) => toggleGlyphOption(GlyphOption.UNICODE, x)}
          />
        </FormSection>

        {/* export */}
        <FormSection id="export-options" title="export">
          {!unsafe && (
            <div id="export-unsafe-css">
              You didn't select the unsafe option. Thanks for being security
              minded! Don't forget to use the{" "}
              <a href="random.css" target="_blank">
                external CSS file
              </a>{" "}
              and ensure that it is specified in the{" "}
              <a
                href={
                  "https://developer.mozilla.org/en-US/docs/Web/HTTP/" +
                  "Headers/Content-Security-Policy/style-src"
                }
                target="_blank"
              >
                style-src
              </a>{" "}
              directive of your{" "}
              <a
                href={
                  "https://developer.mozilla.org/en-US/docs/Web/HTTP/" +
                  "Headers/Content-Security-Policy"
                }
                target="_blank"
              >
                Content Security Policy
              </a>
              .
            </div>
          )}
          <div id="export-textarea" className="option">
            <div className="input">
              <textarea
                disabled={true}
                value={JSON.stringify(optionsToExport)}
              />
            </div>
          </div>
          <div id="export-button" className="option">
            <div className="input popup-container">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    JSON.stringify(optionsToExport)
                  );
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
              >
                copy
              </button>
              <div className={popupClassName}>copied!</div>
            </div>
          </div>
        </FormSection>
      </div>
    </>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  createRoot(document.getElementById("app")).render(<Form />);
});
