//imports
import * as React from "react";
import RandomCSS from "./RandomCss";
import CssOption from "./CssOption";

//interfaces
import {Options, defaultOptions} from './Options/Options';
import CssOptions from "./Options/Randomizables/Css/CssOptions";

//react component props
interface Props {}

//react component state
interface State {
    options: Options;
}

//react component
export default class Form extends React.Component <Props, State> {

    //instance variables
    cssPropertyNames:   string[];

    //create new instance
    constructor(props:Props) {

        //allow access to this.props in constructor
        super(props);

        //initial state
        this.state = {options: defaultOptions};
    }

    render() {
        return (
            <>
                <RandomCSS
                    center={this.state.options.global.center}
                    options={this.state.options}
                    size={this.state.options.global.size}
                    text={this.state.options.global.text}
                    unsafe={this.state.options.global.unsafe}
                />

                {/* dev form */}
                <div id='dev-form'>

                    {/* global options */}
                    <div className='section'>

                        {/* section title */}
                        <div className='title'>Global options</div>

                        {/* options */}
                        <div className='options'>
                            

                            {/* center */}
                            <div className='option'>
                                <div className='label'>center</div>
                                <div className='input'>
                                    <input
                                        type='checkbox'
                                        checked={this.state.options.global.center}
                                        onChange={() => {
                                            let options = this.state.options;
                                            options.global.center = !this.state.options.global.center;
                                            this.setState({options: options});
                                        }}
                                    />
                                </div>
                            </div>

                            {/* size */}
                            <div className='option'>
                                <div className='label'>size (rem)</div>
                                <div className='input'>
                                    <input
                                        type='number'
                                        value={this.state.options.global.size}
                                        max={10}
                                        min={1}
                                        step={1}
                                        onChange={e => {
                                            e.preventDefault();
                                            const size = Number(e.target.value);
                                            let options = this.state.options;
                                            options.global.size = isNaN(size) ? defaultOptions.global.size : size;
                                            this.setState({options: options});
                                        }}
                                    />
                                </div>
                            </div>

                            {/* text */}
                            <div className='option'>
                                <div className='label'>text</div>
                                <div className='input'>
                                    <input
                                        type='text'
                                        value={this.state.options.global.text}
                                        onChange={e => {
                                            e.preventDefault();
                                            let options = this.state.options;
                                            options.global.text = e.target.value;
                                            this.setState({options: options});
                                        }}
                                    />
                                </div>
                            </div>

                            {/* unsafe */}
                            <div className='option'>
                                <div className='label'>unsafe</div>
                                <div className='input'>
                                    <input
                                        type='checkbox'
                                        checked={this.state.options.global.unsafe}
                                        onChange={() => {
                                            let options = this.state.options;
                                            options.global.unsafe = !this.state.options.global.unsafe;
                                            this.setState({options: options});
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
                                Object.keys(defaultOptions.css).map((name: keyof CssOptions, i: number) => {
                                    return (
                                        <CssOption
                                            key={'CssOption-' + i}
                                            name={name}
                                            options={this.state.options.css[name]}
                                            toggleEnabled={() => {
                                                let options = this.state.options;
                                                options.css[name].enabled = !options.css[name].enabled;
                                                this.setState({options: options});
                                            }}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }

}