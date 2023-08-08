import "../../styles/Form.scss";

import AnimationOptions from "../../interfaces/AnimationOptions";
import BorderRadiusOptions from "../../interfaces/BorderRadiusOptions";
import BorderStyleKeyword from "../../enums/BorderStyleKeyword";
import ColorOptions from "../../interfaces/ColorOptions";
import CssOptions, { DEFAULT_CSS_OPTIONS } from "../../interfaces/CssOptions";
import CssProperty from "../../enums/CssProperty";
import {
  DEFAULT_GLOBAL_OPTIONS,
  DEFAULT_GLOBAL_OPTIONS_TEXT,
} from "../../interfaces/GlobalOptions";
import FontFamilyOptions from "../../interfaces/FontFamilyOptions";
import FontStyleOptions from "../../interfaces/FontStyleOptions";
import FontWeightValue from "../../enums/FontWeightValue";
import FormOptionArray from "./FormOptionArray";
import FormOptionBoolean from "./FormOptionBoolean";
import FormOptionLength from "./FormOptionLength";
import FormSection from "./FormSection";
import FormSectionGlobal from "./FormSectionGlobal";
import FormSubsection from "./FormSubsection";
import FormSubsectionAnimation from "./Animation/FormSubsectionAnimation";
import FormSubsectionBorderRadius from "./FormSubsectionBorderRadius";
import FormSubsectionColor from "./FormSubsectionColor";
import FormSubsectionFontFamily from "./FormSubsectionFontFamily";
import FormSubsectionFontStyle from "./FormSubsectionFontStyle";
import GlyphOption from "../../enums/GlyphOption";
import LengthOptions from "../../interfaces/LengthOptions";
import Options from "../../interfaces/Options";
import RandomCss from "../RandomCss";
import TextDecorationLineKeyword from "../../enums/TextDecorationLineKeyword";
import TextDecorationStyleKeyword from "../../enums/TextDecorationStyleKeyword";

import * as React from "react";
import { useCallback, useMemo, useReducer, useState } from "react";
import { createRoot } from "react-dom/client";

interface ToggleCSS {
  all: boolean;
  none: boolean;
}

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
  const [center, setCenter] = useState(true);
  const [copied, setCopied] = useState<boolean>(null);
  const [state, setState] = useReducer(
    (state: State, newState: Partial<State>) => ({ ...state, ...newState }),
    initialState
  );
  const [text, setText] = useState(DEFAULT_GLOBAL_OPTIONS_TEXT);
  const [toggleCss, setToggleCss] = useState<ToggleCSS>({
    all: false,
    none: false,
  });

  const setAnimationOption = useCallback(
    (option: AnimationOptions) => {
      const options = state.options;
      options.css.animation = {
        ...options.css.animation,
        ...option,
      };
      setState({ options });
    },
    [setState, state.options]
  );

  const setBorderRadiusOption = useCallback(
    (option: BorderRadiusOptions) => {
      const options = state.options;
      options.css.borderRadius = {
        ...options.css.borderRadius,
        ...option,
      };
      setState({ options });
    },
    [setState, state.options]
  );

  const setLengthOption = useCallback(
    (key: Extract<keyof CssOptions, "borderWidth">, option: LengthOptions) => {
      const options = state.options;
      options.css[key] = { ...options.css[key], ...option };
      setState({ options });
    },
    [setState, state.options]
  );

  const setColorOption = useCallback(
    (
      key: Extract<
        keyof CssOptions,
        "backgroundColor" | "borderColor" | "color" | "textDecorationColor"
      >,
      option: ColorOptions
    ) => {
      const options = state.options;
      options.css[key] = {
        ...options.css[key],
        ...option,
      };
      setState({ options });
    },
    [setState, state.options]
  );

  const setFontFamilyOption = useCallback(
    (option: FontFamilyOptions) => {
      const options = state.options;
      options.css.fontFamily = {
        ...options.css.fontFamily,
        ...option,
      };
      setState({ options });
    },
    [setState, state.options]
  );

  const setFontStyleOption = useCallback(
    (option: FontStyleOptions) => {
      const options = state.options;
      options.css.fontStyle = {
        ...options.css.fontStyle,
        ...option,
      };
      setState({ options });
    },
    [setState, state.options]
  );

  const toggleCssProperty = useCallback(
    (cssProperty: CssProperty, checked: boolean) => {
      const options = state.options;
      if (options.css[cssProperty] === undefined) {
        options.css[cssProperty] = { enabled: false };
      }

      /**
       * Defining using the spread operator is necessary to avoid problems with
       * prevProps in componentDidUpdate of the RandomCss component. If we don't
       * create a clone like this then prevProps will point to the same object as
       * the new props so the values in prevProps will reflect the updated values
       * instead of the previous values.
       */
      options.css[cssProperty] = {
        ...options.css[cssProperty],
        ...{ enabled: checked },
      };
      const newToggleCss = { ...toggleCss };
      if (!checked) {
        newToggleCss.all = false;
      } else {
        newToggleCss.none = false;
      }
      setState({ options });
      setToggleCss(newToggleCss);
    },
    [setState, setToggleCss, state.options, toggleCss]
  );

  const toggleAll = useCallback(
    (checked: boolean, select: boolean) => {
      const newToggleCss = { ...toggleCss };
      if (!checked) {
        if (select) {
          newToggleCss.all = false;
        } else {
          newToggleCss.none = false;
        }
      } else {
        newToggleCss.all = select;
        newToggleCss.none = !select;
        const options = state.options;
        Object.values(CssProperty).forEach((cssProperty) => {
          toggleCssProperty(cssProperty, select);
        });
        setState({
          options: options,
        });
      }
      setToggleCss(newToggleCss);
    },
    [setState, setToggleCss, toggleCss, toggleCssProperty]
  );

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
            state.options.css?.[cssProperty]?.enabled === true && {
              [cssProperty]: state.options.css[cssProperty],
            }
        )
      ),
      global: state.options.global,
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
    /**
     * TODO: Why doesn't it work when I use dependencies:
     * [state.options.css, state.options.global, state.options.glyph]
     */
    [state]
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
          options={state.options.global}
          setCenter={setCenter}
          setOptions={(newOptions) =>
            setState({
              options: {
                ...state.options,
                ...{
                  global: {
                    ...state.options.global,
                    ...newOptions,
                  },
                },
              },
            })
          }
          setText={setText}
          text={text}
        />

        {/* css */}
        <FormSection id="css-options" title="css options">
          <FormOptionBoolean
            checked={toggleCss.all}
            id="select-all-css"
            label="select all"
            setChecked={(checked) => toggleAll(checked, true)}
          />
          <FormOptionBoolean
            checked={toggleCss.none}
            id="select-none-css"
            label="select none"
            setChecked={(checked) => toggleAll(checked, false)}
          />
          <FormSubsectionAnimation
            option={state.options.css?.animation}
            setOption={setAnimationOption}
            toggle={toggleCssProperty}
            unsafe={state.options.global?.unsafe === true}
          />
          <FormSubsectionColor
            cssPropertyName={CssProperty.BACKGROUND_COLOR}
            option={state.options.css?.backgroundColor}
            setOption={(option) =>
              setColorOption(CssProperty.BACKGROUND_COLOR, option)
            }
            toggle={toggleCssProperty}
            unsafe={state.options.global.unsafe}
          />
          <FormSubsectionColor
            cssPropertyName={CssProperty.BORDER_COLOR}
            option={state.options.css?.borderColor}
            setOption={(option) =>
              setColorOption(CssProperty.BORDER_COLOR, option)
            }
            toggle={toggleCssProperty}
            unsafe={state.options.global.unsafe}
          />
          <FormSubsectionBorderRadius
            option={state.options.css?.borderRadius}
            setOption={setBorderRadiusOption}
            toggle={toggleCssProperty}
          />
          <FormOptionBoolean
            checked={state.options.css?.borderStyle?.enabled === true}
            label="borderStyle"
            setChecked={(checked) =>
              toggleCssProperty(CssProperty.BORDER_STYLE, checked)
            }
          >
            <FormSubsection>
              <FormOptionArray
                disabled={() =>
                  state.options.css?.borderStyle?.enabled !== true
                }
                possibleValues={Object.values(BorderStyleKeyword)}
                setValues={(keywords) => {
                  const options = state.options;
                  options.css.borderStyle.borderStyles = keywords;
                  setState({ options });
                }}
                values={state.options.css?.borderStyle.borderStyles}
              />
            </FormSubsection>
          </FormOptionBoolean>
          <FormOptionLength
            label="borderWidth"
            option={state.options.css?.borderWidth}
            setOption={(option) =>
              setLengthOption(CssProperty.BORDER_WIDTH, option)
            }
          />
          <FormSubsectionColor
            cssPropertyName={CssProperty.COLOR}
            option={state.options.css?.color}
            setOption={(option) => setColorOption(CssProperty.COLOR, option)}
            toggle={toggleCssProperty}
            unsafe={state.options.global.unsafe}
          />
          <FormSubsectionFontFamily
            option={state.options.css?.fontFamily}
            setOption={(option) => setFontFamilyOption(option)}
            toggle={toggleCssProperty}
          />
          <FormSubsectionFontStyle
            option={state.options.css?.fontStyle}
            setOption={setFontStyleOption}
            toggle={toggleCssProperty}
            unsafe={state.options.global?.unsafe}
          />
          <FormOptionBoolean
            checked={state.options.css?.fontWeight?.enabled === true}
            label="fontWeight"
            setChecked={(checked) =>
              toggleCssProperty(CssProperty.FONT_WEIGHT, checked)
            }
          >
            <FormSubsection>
              <FormOptionArray
                disabled={() => state.options.css?.fontWeight?.enabled !== true}
                possibleValues={Object.values(FontWeightValue)}
                setValues={(keywords) => {
                  const options = state.options;
                  options.css.fontWeight.fontWeights = keywords;
                  setState({ options });
                }}
                values={state.options.css?.fontWeight?.fontWeights}
              />
            </FormSubsection>
          </FormOptionBoolean>
          <FormSubsectionColor
            cssPropertyName={CssProperty.TEXT_DECORATION_COLOR}
            option={state.options.css?.textDecorationColor}
            setOption={(option) =>
              setColorOption(CssProperty.TEXT_DECORATION_COLOR, option)
            }
            toggle={toggleCssProperty}
            unsafe={state.options.global.unsafe}
          />
          <FormOptionBoolean
            checked={state.options.css?.textDecorationLine?.enabled === true}
            label="textDecorationLine"
            setChecked={(checked) =>
              toggleCssProperty(CssProperty.TEXT_DECORATION_LINE, checked)
            }
          >
            <FormSubsection>
              <FormOptionArray
                disabled={() =>
                  state.options.css?.textDecorationLine?.enabled !== true
                }
                possibleValues={Object.values(TextDecorationLineKeyword)}
                setValues={(keywords) => {
                  const options = state.options;
                  options.css.textDecorationLine.lines = keywords;
                  setState({ options });
                }}
                values={state.options.css?.textDecorationLine.lines}
              />
            </FormSubsection>
          </FormOptionBoolean>
          <FormOptionBoolean
            checked={state.options.css?.textDecorationStyle?.enabled === true}
            label="textDecorationStyle"
            setChecked={(checked) =>
              toggleCssProperty(CssProperty.TEXT_DECORATION_STYLE, checked)
            }
          >
            <FormSubsection>
              <FormOptionArray
                disabled={() =>
                  state.options.css?.textDecorationStyle?.enabled !== true
                }
                possibleValues={Object.values(TextDecorationStyleKeyword)}
                setValues={(keywords) => {
                  const options = state.options;
                  options.css.textDecorationStyle.styles = keywords;
                  setState({ options });
                }}
                values={state.options.css?.textDecorationStyle.styles}
              />
            </FormSubsection>
          </FormOptionBoolean>
        </FormSection>

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
          {state.options.global.unsafe === false && (
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
