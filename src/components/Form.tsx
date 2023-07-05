import "../styles/Form.scss";

import ECssProperty from "../enums/ECssProperty";
import RandomCss from "./RandomCss/RandomCss";

import * as React from "react";
import { createRoot } from 'react-dom/client';
import Options from "../types/Options";

type Props = Record<string, never>;

type State = {

  form: {
    css: {
      selectAll: boolean,
      selectNone: boolean
    }
  };

  options: Options;
}

class Form extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
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
        glyph: {
          leet: false,
          unicode: false
        }
      },
    }

    // Set CSS properties to false if they are undefined.
    Object.values(ECssProperty).forEach(propertyName => {
      if (typeof this.state.options.css[propertyName] == "undefined") {
        this.state.options.css[propertyName] = false;
      }
    });
  }

  componentDidMount() {
    console.log("Form mounted.");
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
      Object.values(ECssProperty).forEach(property => {
        options.css[property] = select;
      });
      this.setState({
        form: formOptions,
        options: options,
      });
    }
  }

  toggleCssProperty(propertyName: ECssProperty, checked: boolean): void {
    const form = this.state.form;
    const options = this.state.options;
    options.css[propertyName] = checked;
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
    console.log("Form rendered.");
    return (
      <>
        <div id="top">
          <RandomCss
            options={this.state.options}
            size={this.state.options.global.size}
            text={this.state.options.global.text}
          />
        </div>

        {/* dev form */}
        <div id='dev-form'>

          {/* global options */}
          <div className='section'>
            <div className='title'>global options</div>
            <div className='options'>
              <div className='option'>
                <div className='label'>text</div>
                <div className='input'>
                  <input
                    type='text'
                    value={this.state.options.global.text}
                    onChange={e => {
                      const options = this.state.options;
                      options.global.text = e.target.value;
                      this.setState({ options: options });
                    }}
                  />
                </div>
              </div>
              <div className='option'>
                <div className='label'>unsafe</div>
                <div className='input'>
                  <input
                    type='checkbox'
                    checked={this.state.options.global.unsafe}
                    onChange={e => {
                      const options = this.state.options;
                      options.global.unsafe = e.target.checked;
                      this.setState({ options: options });
                    }}
                  />
                </div>
              </div>
              <div className='option'>
                <div className='label'>ignore spaces</div>
                <div className='input'>
                  <input
                    type='checkbox'
                    checked={this.state.options.global.ignoreSpaces}
                    onChange={e => {
                      const options = this.state.options;
                      options.global.ignoreSpaces = e.target.checked;
                      this.setState({ options: options });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* css */}
          <div className='section' id='css-options'>
            <div className='title'>css options</div>
            <div className='options'>
              <div id='select-all-css' className='option'>
                <div className='label'>select all</div>
                <div className='input'>
                  <input
                    type='checkbox'
                    checked={this.state.form.css.selectAll}
                    onChange={e => this.toggleAll(e, true)}
                  />
                </div>
              </div>
              <div id='select-none-css' className='option'>
                <div className='label'>select none</div>
                <div className='input'>
                  <input
                    type='checkbox'
                    checked={this.state.form.css.selectNone}
                    onChange={e => this.toggleAll(e, false)}
                  />
                </div>
              </div>
              {
                Object.values(ECssProperty).map((propertyName, index) => (
                  <div key={index} className='option'>
                    <div className='label'>{propertyName}</div>
                    <div className='input'>
                      <input
                        type='checkbox'
                        checked={this.state.options.css[propertyName]}
                        onChange={e => {
                          console.log(`toggling ${propertyName}`)
                          this.toggleCssProperty(ECssProperty[propertyName], e.target.checked);
                        }}
                      />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          { /* glyph */}
          <div className='section' id='glyph-options'>
            <div className='title'>glyph options</div>
            <div className='options'>
              <div id='1337' className='option'>
                <div className='label'>1337</div>
                <div className='input'>
                  <input
                    type='checkbox'
                    checked={this.state.options.glyph.leet}
                    onChange={e => {
                      const options = this.state.options;
                      options.glyph.leet = e.target.checked;
                      this.setState({ options });
                    }}
                  />
                </div>
              </div>
              <div id='unicode' className='option'>
                <div className='label'>unicode</div>
                <div className='input'>
                  <input
                    type='checkbox'
                    checked={this.state.options.glyph.unicode}
                    onChange={e => {
                      const options = this.state.options;
                      options.glyph.unicode = e.target.checked;
                      this.setState({ options });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("The page has loaded.")
  createRoot(document.getElementById('app')).render(<Form />);
});