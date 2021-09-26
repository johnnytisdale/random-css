//imports
import * as React from "react";
import Checkbox   from "./Form/Checkbox";
import RandomCSS  from "./RandomCss";
import Animation from "./Form/Animation";

//interfaces
import {Options, defaultOptions} from './Options/Options';
import CssOptions                from "./Options/Randomizables/Css/CssOptions";

//react component props
interface Props {}

//react component state
interface State {
    allCss:  boolean;
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
        this.state = {
            allCss:  false,
            options: defaultOptions
        };

        //bind this to methods
        this.areAllCssPropertiesEnabled = this.areAllCssPropertiesEnabled.bind(this);
        this.toggleAllCss               = this.toggleAllCss.bind(this);
        this.toggleCss                  = this.toggleCss.bind(this);
    }

    areAllCssPropertiesEnabled(): boolean {
        let allEnabled = true;
        Object.keys(defaultOptions.css).some(
            (name: keyof CssOptions) => {
                if (!this.state.options.css[name].enabled) {
                    return allEnabled = false;
                }
            }
        );
        return allEnabled;
    }

    toggleAllCss(): void {
        let options = this.state.options;
        Object.keys(defaultOptions.css).map((name: keyof CssOptions) => {
            options.css[name].enabled = !this.state.allCss;
        });
        this.setState({
            allCss: !this.state.allCss,
            options: options
        });
    }

    //toggle randomization for an individual css property
    toggleCss(name: keyof CssOptions): void {
        let options = this.state.options;
        options.css[name].enabled = !options.css[name].enabled;
        this.setState({
            allCss:  this.areAllCssPropertiesEnabled() ? true : false,
            options: options
        });
    }

    render(): React.ReactNode {
        return (
            <>
                <div id="top">
                    <RandomCSS
                        center={this.state.options.global.center}
                        options={this.state.options}
                        size={this.state.options.global.size}
                        text={this.state.options.global.text}
                        unsafe={this.state.options.global.unsafe}
                    />
                </div>

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

                            {/* select all */}
                            <div id='select-all-css' className='option'>
                                <div className='label'>select all</div>
                                <div className='input'>
                                    <input
                                        type='checkbox'
                                        checked={this.state.allCss}
                                        onChange={this.toggleAllCss}
                                    />
                                </div>
                            </div>

                            {/* individual properties */}
                            <Animation 
                                options={this.state.options.css.animation}
                                toggle={() => this.toggleCss('animation')}
                                setState={
                                    (option: keyof typeof this.state.options.css.animation, value: boolean) => {
                                        let state = this.state;
                                        state.options.css.animation[option] = value;
                                        this.setState(state);
                                    }
                                }
                            />
                            {/*
                                Object.keys(defaultOptions.css).map((name: keyof CssOptions, i: number) => {
                                    return (
                                        <CssOption
                                            key={'CssOption-' + i}
                                            name={name}
                                            options={this.state.options.css[name]}
                                            toggleEnabled={() => this.toggleCss(name)}
                                        />
                                    );
                                })
                            */}
                        </div>
                    </div>

                    {/* glyph */}
                    <div className='section'>
                        <div className='title'>Glyph options</div>
                        <div className='options'>
                            <Checkbox
                                active={true}
                                checked={this.state.options.glyph.enabled}
                                expandable={false}
                                label="enabled"
                                toggle={
                                    () => {
                                        let options = this.state.options;
                                        options.glyph.enabled = !options.glyph.enabled;
                                        this.setState({options: options});
                                    }
                                }
                            />
                            <Checkbox
                                active={this.state.options.glyph.enabled}
                                checked={this.state.options.glyph.leet}
                                expandable={false}
                                label="1337"
                                toggle={
                                    () => {
                                        let options = this.state.options;
                                        options.glyph.leet = !options.glyph.leet;
                                        this.setState({options: options});
                                    }
                                }
                            />
                            <Checkbox
                                active={this.state.options.glyph.enabled}
                                checked={this.state.options.glyph.unicode}
                                expandable={false}
                                label="unicode"
                                toggle={
                                    () => {
                                        let options = this.state.options;
                                        options.glyph.unicode = !options.glyph.unicode;
                                        this.setState({options: options});
                                    }
                                }
                            />
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }
}