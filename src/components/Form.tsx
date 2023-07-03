import "../styles/Form.scss";

import ECssProperty from "../enums/ECssProperty";
import IOptions from "../interfaces/IOptions";
import RandomCss from "./RandomCss/RandomCss";

import * as React from "react";
import { createRoot } from 'react-dom/client';

type Props = {};

type State = {

  form: {
    css: {
      selectAll: boolean,
      selectNone: boolean
    }
  };

  options: IOptions;

  /**
  * Properties that need to be reset. If a checkbox in this form is
  * unchecked, then the corresponding property needs to be reset to its
  * default value.
  */
  reset: string[];
}

class Form extends React.Component<Props, State> {

  constructor(props: React.ReactPropTypes) {
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
          size: 3,
          text: 'random css',
          unsafe: false
        }
      },
      reset: [],
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
      const reset = this.state.reset;
      Object.values(ECssProperty).forEach(property => {
        options.css[property] = select;
        if (!select) {
          reset.push(property);
        }
      });
      this.setState({
        form: formOptions,
        options: options,
        reset: reset,
      });
    }
  }

  toggleCssProperty(propertyName: ECssProperty, checked: boolean): void {
    const form = this.state.form;
    const options = this.state.options;
    const reset = this.state.reset;
    options.css[propertyName] = checked;
    if (!checked) {
      reset.push(propertyName);
      form.css.selectAll = false;
    } else {
      form.css.selectNone = false;
    }
    this.setState({
      form: form,
      options: options,
      reset: reset
    });
  }

  render(): React.ReactNode {
    console.log("Form rendered.");
    return (
      <>
        <div id="top">
          <RandomCss
            clearReset={() => this.setState({ reset: [] })}
            options={this.state.options}
            reset={this.state.reset}
            size={this.state.options.global.size}
            text={this.state.options.global.text}
          />
        </div>

        {/* dev form */}
        <div id='dev-form'>

          {/* global options */}
          <div className='section'>
            <div className='title'>Global options</div>
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
            </div>
          </div>

          {/* css */}
          <div className='section' id='css-options'>
            <div className='title'>CSS options</div>
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
        </div>
      </>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("The page has loaded.")
  createRoot(document.getElementById('app')).render(<Form />);
});