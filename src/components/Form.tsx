import "../styles/Form.scss";

import FormSection from "./FormSection";
import Options from "../types/Options";
import RandomCss from "./RandomCss";

import * as React from "react";
import { createRoot } from 'react-dom/client';
import FormSectionOption from "./FormSectionOption";
import CssProperty from "../enums/CssProperty";
import GlyphOption from "../enums/GlyphOption";

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
        css: {},
        global: {
          ignoreSpaces: false,
          size: 3,
          text: 'random css',
          unsafe: false
        },
        glyph: {}
      },
    }
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
    options.css[cssProperty].enabled = checked;
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
            size={this.state.options.global.size}
            text={this.state.options.global.text}
          />
        </div>

        {/* dev form */}
        <div id='dev-form'>

          {/* Global options */}
          <FormSection title="global options">
            <FormSectionOption
              label="text"
              testID="randomcss-form-text"
              type="text"
              value={this.state.options.global.text}
              onChange={e => {
                const options = this.state.options;
                options.global.text = e.target.value;
                this.setState({ options: options });
              }}
            />
            <FormSectionOption
              label="unsafe"
              type='checkbox'
              checked={this.state.options.global.unsafe}
              onChange={e => {
                const options = this.state.options;
                options.global.unsafe = e.target.checked;
                this.setState({ options: options });
              }}
            />
            <FormSectionOption
              checked={this.state.options.global.ignoreSpaces}
              label="ignore spaces"
              type='checkbox'
              onChange={e => {
                const options = this.state.options;
                options.global.ignoreSpaces = e.target.checked;
                this.setState({ options: options });
              }}
            />
          </FormSection>

          {/* css */}
          <FormSection id='css-options' title="css options">
            <FormSectionOption
              checked={this.state.form.css.selectAll}
              id='select-all-css'
              label="select all"
              onChange={e => this.toggleAll(e, true)}
              type='checkbox'
            />
            <FormSectionOption
              checked={this.state.form.css.selectNone}
              id='select-none-css'
              label="select none"
              onChange={e => this.toggleAll(e, false)}
              type='checkbox'
            />
            {
              Object.values(CssProperty).map((propertyName, index) => (
                <FormSectionOption
                  checked={
                    this.state.options.css?.[propertyName]?.enabled === true
                  }
                  key={index}
                  label={propertyName}
                  onChange={e => {
                    console.log(`toggling ${propertyName}`)
                    this.toggleCssProperty(
                      CssProperty[propertyName],
                      e.target.checked
                    );
                  }}
                  type='checkbox'
                />
              ))
            }
          </FormSection>

          { /* glyph */}
          <FormSection id='glyph-options' title="glyph options">
            <FormSectionOption
              checked={this.state.options.glyph?.leet?.enabled === true}
              id='1337'
              label="1337"
              onChange={e => {
                const options = this.state.options;
                if (options.glyph.leet === undefined) {
                  options.glyph.leet = { enabled: false };
                }
                options.glyph.leet.enabled = e.target.checked;
                this.setState({ options });
              }}
              type='checkbox'
            />
            <FormSectionOption
              checked={this.state.options.glyph?.unicode?.enabled === true}
              id='unicode'
              label="unicode"
              onChange={e => {
                const options = this.state.options;
                if (options.glyph.unicode === undefined) {
                  options.glyph.unicode = { enabled: false };
                }
                options.glyph.unicode.enabled = e.target.checked;
                this.setState({ options });
              }}
              type='checkbox'
            />
          </FormSection>

          { /* export */}
          <FormSection id='export-options' title="export">
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
  console.log("The page has loaded.")
  createRoot(document.getElementById('app')).render(<Form />);
});