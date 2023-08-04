import "../../styles/Form.scss";

import { AnimationOptions, DEFAULT_ANIMATION } from "../../classes/CSS/Animation";
import { BorderRadiusOptions, DEFAULT_BORDER_RADIUS } from "../../classes/CSS/BorderRadius";
import BorderStyleKeyword from "../../enums/BorderStyleKeyword";
import ColorOption from "../../interfaces/ColorOptions";
import CssOptions from "../../interfaces/CssOptions";
import CssProperty from "../../enums/CssProperty";
import { DEFAULT_BORDER_STYLE } from "../../classes/CSS/BorderStyle";
import { DEFAULT_COLOR_OPTIONS } from "../../classes/CSS/ColorProperty";
import { DEFAULT_FONT_FAMILY, FontFamilyOptions } from "../../classes/CSS/FontFamily";
import FormOption from "./FormOption";
import FormOptionArray from "./FormOptionArray";
import FormOptionBoolean from "./FormOptionBoolean";
import FormSection from "./FormSection";
import FormSubsection from "./FormSubsection";
import FormSubsectionAnimation from "./Animation/FormSubsectionAnimation";
import FormSubsectionBorderRadius from "./FormSubsectionBorderRadius";
import FormSubsectionColor from "./FormSubsectionColor";
import FormSubsectionFontFamily from "./FormSubsectionFontFamily";
import GlyphOption from "../../enums/GlyphOption";
import Options from "../../types/Options";
import RandomCss from "../RandomCss";

import * as React from "react";
import { useCallback, useMemo, useReducer } from "react";
import { createRoot } from 'react-dom/client';
import { DEFAULT_FONT_STYLE, FontStyleOptions } from "../../classes/CSS/FontStyle";
import FormSubsectionFontStyle from "./FormSubsectionFontStyle";
import { DEFAULT_FONT_WEIGHT } from "../../classes/CSS/FontWeight";
import FontWeightValue from "../../enums/FontWeightValue";
import { DEFAULT_TEXT_DECORATION_LINE } from "../../classes/CSS/TextDecorationLine";
import TextDecorationLineKeyword from "../../enums/TextDecorationLineKeyword";
import { DEFAULT_TEXT_DECORATION_STYLE } from "../../classes/CSS/TextDecorationStyle";
import TextDecorationStyleKeyword from "../../enums/TextDecorationStyleKeyword";
import { DEFAULT_BORDER_WIDTH } from "../../classes/CSS/BorderWidth";
import FormOptionLength from "./FormOptionLength";
import { LengthOptions } from "../../classes/CSS/LengthProperty";

interface State {
  copied: boolean | null,
  form: {
    css: {
      selectAll: boolean,
      selectNone: boolean
    }
  };
  options: Options;
}

const initialState: State = {
  copied: null,
  form: {
    css: {
      selectAll: false,
      selectNone: false
    }
  },
  options: {
    css: {
      animation: { ...DEFAULT_ANIMATION },
      backgroundColor: { ...DEFAULT_COLOR_OPTIONS },
      borderColor: { ...DEFAULT_COLOR_OPTIONS },
      borderRadius: { ...DEFAULT_BORDER_RADIUS },
      borderStyle: { ...DEFAULT_BORDER_STYLE },
      borderWidth: { ...DEFAULT_BORDER_WIDTH },
      color: { ...DEFAULT_COLOR_OPTIONS },
      fontFamily: { ...DEFAULT_FONT_FAMILY },
      fontStyle: { ...DEFAULT_FONT_STYLE },
      fontWeight: { ...DEFAULT_FONT_WEIGHT },
      textDecorationColor: { ...DEFAULT_COLOR_OPTIONS },
      textDecorationLine: { ...DEFAULT_TEXT_DECORATION_LINE },
      textDecorationStyle: { ...DEFAULT_TEXT_DECORATION_STYLE }
    },
    global: {
      ignoreSpaces: true,
      size: 3,
      text: 'random css',
      unsafe: true
    },
    glyph: {}
  },
};

export default function Form(): React.ReactNode {
  const [state, setState] = useReducer(
    (state: State, newState: Partial<State>) => ({ ...state, ...newState }),
    initialState
  );

  const setAnimationOption = useCallback(
    (option: AnimationOptions) => {
      const options = state.options;
      options.css.animation = {
        ...options.css.animation,
        ...option
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
        ...option
      };
      setState({ options });
    },
    [setState, state.options]
  );

  const setLengthOption = useCallback(
    (
      key: Extract<keyof CssOptions, "borderWidth">,
      option: LengthOptions
    ) => {
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
        | 'backgroundColor'
        | 'borderColor'
        | 'color'
        | 'textDecorationColor'
      >,
      option: ColorOption
    ) => {
      const options = state.options;
      options.css[key] = {
        ...options.css[key],
        ...option
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
        ...option
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
        ...option
      };
      setState({ options });
    },
    [setState, state.options]
  );

  const toggleCssProperty = useCallback(
    (cssProperty: CssProperty, checked: boolean) => {
      const form = state.form;
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
        ...{ enabled: checked }
      };
      if (!checked) {
        form.css.selectAll = false;
      } else {
        form.css.selectNone = false;
      }
      setState({
        form: form,
        options: options,
      });
    },
    [setState, state.form, state.options]
  );

  const toggleAll = useCallback(
    (checked: boolean, select: boolean) => {
      const formOptions = state.form;
      if (!checked) {
        if (select) {
          formOptions.css.selectAll = false;
        } else {
          formOptions.css.selectNone = false;
        }
        setState({ form: formOptions });
      } else {
        formOptions.css.selectAll = select;
        formOptions.css.selectNone = !select;
        const options = state.options;
        Object.values(CssProperty).forEach(cssProperty => {
          toggleCssProperty(cssProperty, select);
        });
        setState({
          form: formOptions,
          options: options,
        });
      }
    },
    [setState, state.form, state.options, toggleCssProperty]
  );

  const toggleGlyphOption = useCallback(
    (glyphOption: GlyphOption, checked: boolean) => {
      const options = state.options;
      if (options.glyph[glyphOption] === undefined) {
        options.glyph[glyphOption] = { enabled: false };
      }
      options.glyph[glyphOption] = {
        ...options.glyph[glyphOption],
        ...{ enabled: checked }
      };
      setState({ options: options });
    },
    [setState, state.options]
  );

  const popupClassName = useMemo(
    () => 'popup-text' + (
      state.copied === true
        ? ' show'
        : state.copied === false
        ? ' hide'
        : ''
    ),
    [state.copied]
  );

  const optionsToExport: Options = useMemo(
    () => ({
      css: Object.assign(
        {},
        ...Object.values(CssProperty).map(cssProperty => (
          state.options.css?.[cssProperty]?.enabled === true &&
            { [cssProperty]: state.options.css[cssProperty] }
        ))
      ),
      global: state.options.global,
      glyph: Object.assign(
        {},
        ...Object.values(GlyphOption).map(glyphOption => (
          state.options.glyph?.[glyphOption]?.enabled === true &&
            { [glyphOption]: state.options.glyph[glyphOption] }
        ))
      )
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
        <RandomCss
          options={optionsToExport}
          text={state.options.global.text}
        />
      </div>

      {/* dev form */}
      <div id='dev-form'>

        {/* Global options */}
        <FormSection id="global-options" title="global options">
          <FormOption
            input={{
              'data-testid': "randomcss-form-text",
              type: "text",
              value: state.options.global.text,
              onChange: e => {
                const options = state.options;
                options.global.text = e.target.value;
                setState({ options: options });
              }
            }}
            label="text"
          />
          <FormOption
            input={{
              ...(
                state.options.global.unsafe === false &&
                {
                  max: "10",
                  min: ".25",
                  step: "0.25"
                }
              ),
              type: 'number',
              value: state.options.global.size,
              onChange: e => {
                const options = state.options;
                options.global.size = options.global.unsafe === true
                  ? parseFloat(e.target.value)
                  : getValidSize(parseFloat(e.target.value));
                setState({ options: options });
              }
            }}
            label="size"
          />
          <FormOptionBoolean
            checked={state.options.global.unsafe}
            label="unsafe"
            setChecked={unsafe => {
              const options = state.options;
              options.global.unsafe = unsafe;
              if (unsafe === false) {
                options.global.size = getValidSize(options.global.size);
              }
              setState({ options });
            }}
          />
          <FormOptionBoolean
            checked={state.options.global.ignoreSpaces === true}
            label="ignore spaces"
            setChecked={ignoreSpaces => {
              const options = state.options;
              options.global.ignoreSpaces = ignoreSpaces;
              setState({ options });
            }}
          />
        </FormSection>

        {/* css */}
        <FormSection id='css-options' title="css options">
          <FormOptionBoolean
            checked={state.form.css.selectAll === true}
            id='select-all-css'
            label="select all"
            setChecked={checked => toggleAll(checked, true)}
          />
          <FormOptionBoolean
            checked={state.form.css.selectNone}
            id='select-none-css'
            label="select none"
            setChecked={checked => toggleAll(checked, false)}
          />
          <FormSubsectionAnimation
            option={state.options.css?.animation}
            setOption={setAnimationOption}
          />
          <FormSubsectionColor
            label="backgroundColor"
            option={state.options.css?.backgroundColor}
            setOption={option => setColorOption("backgroundColor", option)}
            unsafe={state.options.global.unsafe}
          />
          <FormSubsectionColor
            label="borderColor"
            option={state.options.css?.borderColor}
            setOption={option => setColorOption("borderColor", option)}
            unsafe={state.options.global.unsafe}
          />
          <FormSubsectionBorderRadius
            option={state.options.css?.borderRadius}
            setOption={setBorderRadiusOption}
          />
          <FormOptionBoolean
            checked={state.options.css?.borderStyle?.enabled === true}
            label="borderStyle"
            setChecked={checked => toggleCssProperty(
              CssProperty.BORDER_STYLE,
              checked
            )}
          >
            <FormSubsection>
              <FormOptionArray
                disabled={state.options.css?.borderStyle?.enabled !== true}
                possibleValues={Object.values(BorderStyleKeyword)}
                setValues={keywords => {
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
            setOption={
              option => setLengthOption(CssProperty.BORDER_WIDTH, option)
            }
          />
          <FormSubsectionColor
            label="color"
            option={state.options.css?.color}
            setOption={option => setColorOption("color", option)}
            unsafe={state.options.global.unsafe}
          />
          <FormSubsectionFontFamily
            option={state.options.css?.fontFamily}
            setOption={option => setFontFamilyOption(option)}
          />
          <FormSubsectionFontStyle
            option={state.options.css?.fontStyle}
            setOption={setFontStyleOption}
          />
          <FormOptionBoolean
            checked={state.options.css?.fontWeight?.enabled === true}
            label="fontWeight"
            setChecked={checked => toggleCssProperty(
              CssProperty.FONT_WEIGHT,
              checked
            )}
          >
            <FormSubsection>
              <FormOptionArray
                disabled={state.options.css?.fontWeight?.enabled !== true}
                possibleValues={Object.values(FontWeightValue)}
                setValues={keywords => {
                  const options = state.options;
                  options.css.fontWeight.fontWeights = keywords;
                  setState({ options });
                }}
                values={state.options.css?.fontWeight?.fontWeights}
              />
            </FormSubsection>
          </FormOptionBoolean>
          <FormSubsectionColor
            label="textDecorationColor"
            option={state.options.css?.textDecorationColor}
            setOption={option => setColorOption("textDecorationColor", option)}
            unsafe={state.options.global.unsafe}
          />
          <FormOptionBoolean
            checked={state.options.css?.textDecorationLine?.enabled === true}
            label="textDecorationLine"
            setChecked={checked => toggleCssProperty(
              CssProperty.TEXT_DECORATION_LINE,
              checked
            )}
          >
            <FormSubsection>
              <FormOptionArray
                disabled={
                  state.options.css?.textDecorationLine?.enabled !== true
                }
                possibleValues={Object.values(TextDecorationLineKeyword)}
                setValues={keywords => {
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
            setChecked={checked => toggleCssProperty(
              CssProperty.TEXT_DECORATION_STYLE,
              checked
            )}
          >
            <FormSubsection>
              <FormOptionArray
                disabled={
                  state.options.css?.textDecorationStyle?.enabled !== true
                }
                possibleValues={Object.values(TextDecorationStyleKeyword)}
                setValues={keywords => {
                  const options = state.options;
                  options.css.textDecorationStyle.styles = keywords;
                  setState({ options });
                }}
                values={state.options.css?.textDecorationStyle.styles}
              />
            </FormSubsection>
          </FormOptionBoolean>
        </FormSection>

        { /* glyph */}
        <FormSection id='glyph-options' title="glyph options">
          <FormOptionBoolean
            checked={state.options.glyph?.leet?.enabled === true}
            id='1337'
            label="1337"
            setChecked={x => toggleGlyphOption(GlyphOption.LEET, x)}
          />
          <FormOptionBoolean
            checked={state.options.glyph?.unicode?.enabled === true}
            id='unicode'
            label="unicode"
            setChecked={x => toggleGlyphOption(GlyphOption.UNICODE, x)}
          />
        </FormSection>

        { /* export */}
        <FormSection id='export-options' title="export">
          {
            state.options.global.unsafe === false && (
              <div id='export-unsafe-css'>
                You didn't select the unsafe option. Thanks for being security
                minded! Don't forget to use the
                {' '}
                <a href="random.css" target="_blank">external CSS file</a>
                {' '}
                and ensure that it is specified in the
                {' '}
                <a
                  href={
                    "https://developer.mozilla.org/en-US/docs/Web/HTTP/" +
                      "Headers/Content-Security-Policy/style-src"
                  }
                  target="_blank"
                >
                  style-src
                </a>
                {' '}
                directive of your
                {' '}
                <a
                  href={
                    "https://developer.mozilla.org/en-US/docs/Web/HTTP/" +
                      "Headers/Content-Security-Policy"
                  }
                  target="_blank"
                >
                  Content Security Policy
                </a>.
              </div>
            )
          }
          <div id='export-textarea' className='option'>
            <div className='input'>
              <textarea
                disabled={true}
                value={JSON.stringify(optionsToExport)}
              />
            </div>
          </div>
          <div id='export-button' className='option'>
            <div className='input popup-container'>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    JSON.stringify(optionsToExport)
                  );
                  setState({ copied: true });
                  setTimeout(
                    () => setState({ copied: false }),
                    1500
                  );
                }}
              >
                copy
              </button>
              <div className={popupClassName}>
                copied!
              </div>
            </div>
          </div>
        </FormSection>
      </div>
    </>
  );
}

function getValidSize(size: number): number {
  if (size > 10) {
    return 10;
  } else if (size < .25) {
    return .25;
  } else if (size % .25 !== 0) {
    return parseFloat((Math.round(size * 4) / 4).toFixed(2));
  }
  return size;
}

document.addEventListener("DOMContentLoaded", () => {
  createRoot(document.getElementById('app')).render(<Form />);
});
