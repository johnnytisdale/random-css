import "../../styles/Form.scss";

import {
  AnimationOption,
  DEFAULT_ANIMATION_DIRECTIONS,
  DEFAULT_ANIMATION_DURATION_MAX,
  DEFAULT_ANIMATION_DURATION_MIN,
  DEFAULT_ANIMATION_EASING_FUNCTIONS,
  DEFAULT_ANIMATION_FILL_MODES,
  DEFAULT_ANIMATION_ITERATION_COUNT,
  DEFAULT_ANIMATION_TRANSFORMATIONS
} from "../../classes/CSS/Animation";
import CssProperty from "../../enums/CssProperty";
import FormSection from "./FormSection";
import FormOption from "./FormOption";
import FormSectionOptionAnimation from "./Animation/FormSectionOptionAnimation";
import GlyphOption from "../../enums/GlyphOption";
import Options from "../../types/Options";
import RandomCss from "../RandomCss";

import * as React from "react";
import { createRoot } from 'react-dom/client';

type Props = Record<string, never>;

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

export default class Form extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      copied: null,
      form: {
        css: {
          selectAll: false,
          selectNone: false
        }
      },
      options: {
        css: {
          animation: {
            enabled: false,
            directions: DEFAULT_ANIMATION_DIRECTIONS,
            durationMax: DEFAULT_ANIMATION_DURATION_MAX,
            durationMin: DEFAULT_ANIMATION_DURATION_MIN,
            easingFunctions: DEFAULT_ANIMATION_EASING_FUNCTIONS,
            fillModes: DEFAULT_ANIMATION_FILL_MODES,
            iterationCount: DEFAULT_ANIMATION_ITERATION_COUNT,
            transformations: DEFAULT_ANIMATION_TRANSFORMATIONS
          }
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
  }

  private getValidSize(size: number): number {
    if (size > 10) {
      return 10;
    } else if (size < .25) {
      return .25;
    } else if (size % .25 !== 0) {
      return parseFloat((Math.round(size * 4) / 4).toFixed(2));
    }
    return size;
  }

  private toggleAll(e: React.ChangeEvent<HTMLInputElement>, select: boolean) {
    const formOptions = this.state.form;
    if (!e.target.checked) {
      if (select) {
        formOptions.css.selectAll = false;
      } else {
        formOptions.css.selectNone = false;
      }
      this.setState({ form: formOptions });
    } else {
      formOptions.css.selectAll = select;
      formOptions.css.selectNone = !select;
      const options = this.state.options;
      Object.values(CssProperty).forEach(cssProperty => {
        this.toggleCssProperty(cssProperty, select);
      });
      this.setState({
        form: formOptions,
        options: options,
      });
    }
  }

  toggleCssProperty(cssProperty: CssProperty, checked: boolean): void {
    const form = this.state.form;
    const options = this.state.options;
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
    this.setState({
      form: form,
      options: options,
    });
  }

  toggleGlyphOption(glyphOption: GlyphOption, checked: boolean): void {
    const options = this.state.options;
    if (options.glyph[glyphOption] === undefined) {
      options.glyph[glyphOption] = { enabled: false };
    }
    options.glyph[glyphOption] = {
      ...options.glyph[glyphOption],
      ...{ enabled: checked }
    };
    this.setState({ options: options });
  }

  render(): React.ReactNode {
    const popupClassName = 'popup-text' + (
      this.state.copied === true
        ? ' show'
        : this.state.copied === false
        ? ' hide'
        : ''
    );
    const optionsToExport: Options = {
      css: {},
      global: this.state.options.global,
      glyph: {}
    };
    Object.values(CssProperty).forEach(cssProperty => {
      if (this.state.options.css?.[cssProperty]?.enabled === true) {
        optionsToExport.css[cssProperty] = this.state.options.css[cssProperty];
      }
    });
    Object.values(GlyphOption).forEach(glyphOption => {
      if (this.state.options.glyph?.[glyphOption]?.enabled === true) {
        optionsToExport.glyph[glyphOption] =
          this.state.options.glyph[glyphOption];
      }
    });
    return (
      <>
        <div id="top" data-testid="top">
          <RandomCss
            options={optionsToExport}
            text={this.state.options.global.text}
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
                value: this.state.options.global.text,
                onChange: e => {
                  const options = this.state.options;
                  options.global.text = e.target.value;
                  this.setState({ options: options });
                }
              }}
              label="text"
            />
            <FormOption
              input={{
                ...(
                  this.state.options.global.unsafe === false &&
                  {
                    max: "10",
                    min: ".25",
                    step: "0.25"
                  }
                ),
                type: 'number',
                value: this.state.options.global.size,
                onChange: e => {
                  const options = this.state.options;
                  options.global.size = options.global.unsafe === true
                    ? parseFloat(e.target.value)
                    : this.getValidSize(parseFloat(e.target.value));
                  this.setState({ options: options });
                }
              }}
              label="size"
            />
            <FormOption
              input={{
                checked: this.state.options.global.unsafe,
                type: "checkbox",
                onChange: e => {
                  const options = this.state.options;
                  options.global.unsafe = e.target.checked;
                  if (e.target.checked === false) {
                    options.global.size = this.getValidSize(
                      options.global.size
                    );
                  }
                  this.setState({ options: options });
                },
              }}
              label="unsafe"
            />
            <FormOption
              input={{
                checked: this.state.options.global.ignoreSpaces,
                type: "checkbox",
                onChange: e => {
                  const options = this.state.options;
                  options.global.ignoreSpaces = e.target.checked;
                  this.setState({ options: options });
                }
              }}
              label="ignore spaces"
            />
          </FormSection>

          {/* css */}
          <FormSection id='css-options' title="css options">
            <FormOption
              id='select-all-css'
              input={{
                checked: this.state.form.css.selectAll,
                type: "checkbox",
                onChange: e => this.toggleAll(e, true)
              }}
              label="select all"
            />
            <FormOption
              id='select-none-css'
              input={{
                checked: this.state.form.css.selectNone,
                type: "checkbox",
                onChange: e => this.toggleAll(e, false)
              }}
              label="select none"
            />
            <FormSectionOptionAnimation
              option={this.state.options.css.animation}
              setOption={(option: AnimationOption) => {
                const options = this.state.options;
                options.css.animation = option;
                this.setState({ options });
              }}
            />
            {
              Object.values(CssProperty).map((propertyName, index) => {
                if (propertyName === CssProperty.animation) {
                  return;
                }
                return (
                  <FormOption
                    input={{
                      checked: (
                        this.state.options.css?.[propertyName]?.enabled === true
                      ),
                      type: "checkbox",
                      onChange: e => {
                        this.toggleCssProperty(
                          CssProperty[propertyName],
                          e.target.checked
                        );
                      }
                    }}
                    key={index}
                    label={propertyName}
                  />
                );
              })
            }
          </FormSection>

          { /* glyph */}
          <FormSection id='glyph-options' title="glyph options">
            <FormOption
              id='1337'
              input={{
                checked: this.state.options.glyph?.leet?.enabled === true,
                type: "checkbox",
                onChange: e => {
                  this.toggleGlyphOption(GlyphOption.LEET, e.target.checked);
                }
              }}
              label="1337"
            />
            <FormOption
              id='unicode'
              input={{
                checked: this.state.options.glyph?.unicode?.enabled === true,
                type: "checkbox",
                onChange: e => {
                  this.toggleGlyphOption(GlyphOption.UNICODE, e.target.checked);
                }
              }}
              label="unicode"
            />
          </FormSection>

          { /* export */}
          <FormSection id='export-options' title="export">
            {
              this.state.options.global.unsafe === false && (
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
                    this.setState(
                      { copied: true },
                      () => {
                        setTimeout(
                          () => this.setState({ copied: false }),
                          1500
                        );
                      }
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
}

document.addEventListener("DOMContentLoaded", () => {
  createRoot(document.getElementById('app')).render(<Form />);
});