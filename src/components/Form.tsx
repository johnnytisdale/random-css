import "../styles/Form.scss";

import ECssProperty from "../enums/ECssProperty";
import IOptions from "../interfaces/IOptions";
import RandomCss from "./RandomCss/RandomCss";

import * as React from "react";
import { createRoot } from 'react-dom/client';

type Props = {};

type IState = {
  options: IOptions;

  /**
  * Properties that need to be reset. If a checkbox in this form is
  * unchecked, then the corresponding property needs to be reset to its
  * default value.
  */
  reset: string[];
}

class Form extends React.Component<Props, IState> {

  constructor(props: React.ReactPropTypes) {
    super(props);
    this.state = {
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
    for (const propertyName of Object.keys(ECssProperty)) {
      if (typeof this.state.options.css[propertyName] == "undefined") {
        this.state.options.css[propertyName] = false;
      }
    }
  }

  componentDidMount() {
    console.log("Form mounted.");
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
          <div className='section'>
            <div className='title'>CSS options</div>
            <div className='options'>
              {
                Object.values(ECssProperty).map((propertyName: string, index: number) => (
                  <div key={index} id='select-all-css' className='option'>
                    <div className='label'>{propertyName}</div>
                    <div className='input'>
                      <input
                        type='checkbox'
                        checked={this.state.options.css[propertyName]}
                        onChange={e => {
                          console.log(`toggling ${propertyName}`)
                          this.togglECssProperty(ECssProperty[propertyName], e.target.checked);
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

  togglECssProperty(propertyName: ECssProperty, checked: boolean): void {
    const options = this.state.options;
    const reset = this.state.reset;
    options.css[propertyName] = checked;
    if (!checked) {
      reset.push(propertyName);
    }
    this.setState({
      options: options,
      reset: reset
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("The page has loaded.")
  createRoot(document.getElementById('app')).render(<Form />);
});