import "../../styles/Form.scss";

import AnimationOptions from "../../interfaces/AnimationOptions";
import BorderRadiusOptions from "../../interfaces/BorderRadiusOptions";
import BorderStyleKeyword from "../../enums/BorderStyleKeyword";
import ColorOptions from "../../interfaces/ColorOptions";
import CssColorProperty from "../../types/CssColorProperty";
import CssOptions, { DEFAULT_CSS_OPTIONS } from "../../interfaces/CssOptions";
import CssProperty from "../../enums/CssProperty";
import {
  DEFAULT_GLOBAL_OPTIONS,
  DEFAULT_GLOBAL_OPTIONS_IGNORE_SPACES,
  DEFAULT_GLOBAL_OPTIONS_SIZE,
  DEFAULT_GLOBAL_OPTIONS_TEXT,
  DEFAULT_GLOBAL_OPTIONS_UNSAFE,
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
  const [toggleCss, setToggleCss] = useState<ToggleCSS>({
    all: false,
    none: false,
  });
  const [unsafe, setUnsafe] = useState<boolean>(DEFAULT_GLOBAL_OPTIONS_UNSAFE);

  const setAnimationOption = useCallback(
    (option: AnimationOptions) => {
      const newCss = { ...css };
      newCss.animation = {
        ...newCss.animation,
        ...option,
      };
      setCss(newCss);
    },
    [css, setCss]
  );

  const setBorderRadiusOption = useCallback(
    (option: BorderRadiusOptions) => {
      const newCss = { ...css };
      newCss.borderRadius = {
        ...newCss.borderRadius,
        ...option,
      };
      setCss(newCss);
    },
    [css, setCss]
  );

  const setLengthOption = useCallback(
    (key: Extract<keyof CssOptions, "borderWidth">, option: LengthOptions) => {
      const newCss = { ...css };
      newCss[key] = { ...newCss[key], ...option };
      setCss(newCss);
    },
    [css, setCss]
  );

  const setColorOption = useCallback(
    (key: CssColorProperty, option: ColorOptions) => {
      const newCss = { ...css };
      newCss[key] = {
        ...newCss[key],
        ...option,
      };
      setCss(newCss);
    },
    [css, setCss]
  );

  const setFontFamilyOption = useCallback(
    (option: FontFamilyOptions) => {
      const newCss = { ...css };
      newCss.fontFamily = {
        ...newCss.fontFamily,
        ...option,
      };
      setCss(newCss);
    },
    [css, setCss]
  );

  const setFontStyleOption = useCallback(
    (option: FontStyleOptions) => {
      const newCss = { ...css };
      newCss.fontStyle = {
        ...newCss.fontStyle,
        ...option,
      };
      setCss(newCss);
    },
    [css, setCss]
  );

  const toggleCssProperty = useCallback(
    (cssProperty: CssProperty, checked: boolean) => {
      const newCss = { ...css };
      if (newCss[cssProperty] === undefined) {
        newCss[cssProperty] = { enabled: false };
      }

      /**
       * Defining using the spread operator is necessary to avoid problems with
       * prevProps in componentDidUpdate of the RandomCss component. If we don't
       * create a clone like this then prevProps will point to the same object as
       * the new props so the values in prevProps will reflect the updated values
       * instead of the previous values.
       */
      newCss[cssProperty] = {
        ...newCss[cssProperty],
        ...{ enabled: checked },
      };
      const newToggleCss = { ...toggleCss };
      if (!checked) {
        newToggleCss.all = false;
      } else {
        newToggleCss.none = false;
      }
      setCss(newCss);
      setToggleCss(newToggleCss);
    },
    [css, setCss, setToggleCss, toggleCss]
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
        const newCss = { ...css };
        Object.values(CssProperty).forEach((cssProperty) => {
          newCss[cssProperty] = {
            ...(newCss[cssProperty] ?? {}),
            ...{ enabled: select },
          };
        });
        setCss(newCss);
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
            option={css?.animation}
            setOption={setAnimationOption}
            toggle={toggleCssProperty}
            unsafe={unsafe}
          />
          <FormSubsectionColor
            cssPropertyName={CssProperty.BACKGROUND_COLOR}
            option={css?.backgroundColor}
            setColorOption={setColorOption}
            toggle={toggleCssProperty}
            unsafe={unsafe}
          />
          <FormSubsectionColor
            cssPropertyName={CssProperty.BORDER_COLOR}
            option={css?.borderColor}
            setColorOption={setColorOption}
            toggle={toggleCssProperty}
            unsafe={unsafe}
          />
          <FormSubsectionBorderRadius
            option={css?.borderRadius}
            setOption={setBorderRadiusOption}
            toggle={toggleCssProperty}
          />
          <FormOptionBoolean
            checked={css?.borderStyle?.enabled === true}
            label="borderStyle"
            setChecked={(checked) =>
              toggleCssProperty(CssProperty.BORDER_STYLE, checked)
            }
          >
            <FormSubsection>
              <FormOptionArray
                disabled={() => css?.borderStyle?.enabled !== true}
                possibleValues={Object.values(BorderStyleKeyword)}
                setValues={(keywords) => {
                  const newCss = { ...css };
                  newCss.borderStyle.borderStyles = keywords;
                  setCss(newCss);
                }}
                values={css?.borderStyle.borderStyles}
              />
            </FormSubsection>
          </FormOptionBoolean>
          <FormOptionLength
            label="borderWidth"
            option={css?.borderWidth}
            setOption={(option) =>
              setLengthOption(CssProperty.BORDER_WIDTH, option)
            }
          />
          <FormSubsectionColor
            cssPropertyName={CssProperty.COLOR}
            option={css?.color}
            setColorOption={setColorOption}
            toggle={toggleCssProperty}
            unsafe={unsafe}
          />
          <FormSubsectionFontFamily
            option={css?.fontFamily}
            setOption={(option) => setFontFamilyOption(option)}
            toggle={toggleCssProperty}
          />
          <FormSubsectionFontStyle
            option={css?.fontStyle}
            setOption={setFontStyleOption}
            toggle={toggleCssProperty}
            unsafe={unsafe}
          />
          <FormOptionBoolean
            checked={css?.fontWeight?.enabled === true}
            label="fontWeight"
            setChecked={(checked) =>
              toggleCssProperty(CssProperty.FONT_WEIGHT, checked)
            }
          >
            <FormSubsection>
              <FormOptionArray
                disabled={() => css?.fontWeight?.enabled !== true}
                possibleValues={Object.values(FontWeightValue)}
                setValues={(keywords) => {
                  const newCss = { ...css };
                  newCss.fontWeight.fontWeights = keywords;
                  setCss(newCss);
                }}
                values={css?.fontWeight?.fontWeights}
              />
            </FormSubsection>
          </FormOptionBoolean>
          <FormSubsectionColor
            cssPropertyName={CssProperty.TEXT_DECORATION_COLOR}
            option={css?.textDecorationColor}
            setColorOption={setColorOption}
            toggle={toggleCssProperty}
            unsafe={unsafe}
          />
          <FormOptionBoolean
            checked={css?.textDecorationLine?.enabled === true}
            label="textDecorationLine"
            setChecked={(checked) =>
              toggleCssProperty(CssProperty.TEXT_DECORATION_LINE, checked)
            }
          >
            <FormSubsection>
              <FormOptionArray
                disabled={() => css?.textDecorationLine?.enabled !== true}
                possibleValues={Object.values(TextDecorationLineKeyword)}
                setValues={(keywords) => {
                  const newCss = { ...css };
                  newCss.textDecorationLine.lines = keywords;
                  setCss(newCss);
                }}
                values={css?.textDecorationLine.lines}
              />
            </FormSubsection>
          </FormOptionBoolean>
          <FormOptionBoolean
            checked={css?.textDecorationStyle?.enabled === true}
            label="textDecorationStyle"
            setChecked={(checked) =>
              toggleCssProperty(CssProperty.TEXT_DECORATION_STYLE, checked)
            }
          >
            <FormSubsection>
              <FormOptionArray
                disabled={() => css?.textDecorationStyle?.enabled !== true}
                possibleValues={Object.values(TextDecorationStyleKeyword)}
                setValues={(keywords) => {
                  const newCss = { ...css };
                  newCss.textDecorationStyle.styles = keywords;
                  setCss(newCss);
                }}
                values={css?.textDecorationStyle.styles}
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
