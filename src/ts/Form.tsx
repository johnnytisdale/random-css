import * as React from "react";
import Animation from "./Form/Css/Animation/Animation";
import Checkbox from "./Form/Input/Checkbox";
import { CssOptions } from "./Randomizables/Css/CssOptions";
import defaultOptions from "./defaultOptions";
import BackgroundColor from "./Form/Css/ColorProperties/BackgroundColor";
import BorderColor from "./Form/Css/ColorProperties/BorderColor";
import BorderRadius from "./Form/Css/ArrayProperties/BorderRadius";
import BorderStyle from "./Form/Css/ArrayProperties/BorderStyle";
import BorderWidth from "./Form/Css/RangeProperties/BorderWidth";
import Color from './Form/Css/ColorProperties/Color';
import FontFamily from "./Form/Css/ArrayProperties/FontFamily";
//import FontKerning from "./Form/Css/ArrayProperties/FontKerning";
//import FontStretch from "./Form/Css/ArrayProperties/FontStretch";
import FontStyle from "./Form/Css/ArrayProperties/FontStyle";
import FontVariant from "./Form/Css/ArrayProperties/FontVariant";
import FontWeight from "./Form/Css/ArrayProperties/FontWeight";
import Options from './Options';
import RandomCSS from "./RandomCss";
import TextDecorationColor from './Form/Css/ColorProperties/TextDecorationColor';
import TextDecorationLine from "./Form/Css/ArrayProperties/TextDecorationLine";

interface Props {};

interface State {
    allCss?: boolean;
    options: Options;
};

export default class Form extends React.Component <Props, State> {

    //instance variables
    cssPropertyNames: string[];

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
        this.setState                   = this.setState.bind(this);
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
        Object.keys(defaultOptions.css).some((name: keyof CssOptions) => {
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
        const currentValue = options.css[name].enabled;
        const newValue = currentValue === true ? false : true;
        //options.css[name].enabled = !options.css[name].enabled;
        options.css[name].enabled = newValue;
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

                            
                                {/* ignore spaces */}
                                <div className='option'>
                                    <div className='label'>ignore spaces</div>
                                    <div className='input'>
                                        <input
                                            type='checkbox'
                                            checked={this.state.options.global.ignoreSpaces}
                                            onChange={() => {
                                                let options = this.state.options;
                                                options.global.ignoreSpaces = !this.state.options.global.ignoreSpaces;
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
                            {/* todo: loop through cssPropertyCapitalizedNames and render components dynamically */}
                            <Animation 
                                options={this.state.options}
                                toggle={() => this.toggleCss('animation')}
                                setState={this.setState}
                            />
                            <BackgroundColor
                                options={this.state.options}
                                toggle={() => this.toggleCss('backgroundColor')}
                                setState={this.setState}
                            />
                            <BorderColor
                                options={this.state.options}
                                toggle={() => this.toggleCss('borderColor')}
                                setState={this.setState}
                            />
                            <BorderRadius
                                options={this.state.options}
                                toggle={() => this.toggleCss('borderRadius')}
                                setState={this.setState}
                            />
                            <BorderWidth
                                options={this.state.options}
                                toggle={() => this.toggleCss('borderWidth')}
                                setState={this.setState}
                            />
                            <BorderStyle
                                options={this.state.options}
                                toggle={() => this.toggleCss('borderStyle')}
                                setState={this.setState}
                            />
                            <Color
                                options={this.state.options}
                                toggle={() => this.toggleCss('color')}
                                setState={this.setState}
                            />
                            <FontFamily
                                options={this.state.options}
                                toggle={() => this.toggleCss('fontFamily')}
                                setState={this.setState}
                            />
                            {/*<FontKerning
                                options={this.state.options}
                                toggle={() => this.toggleCss('fontKerning')}
                                setState={this.setState}
                            />
                            <FontStretch
                                options={this.state.options}
                                toggle={() => this.toggleCss('fontStretch')}
                                setState={this.setState}
                            />*/}
                            <FontStyle
                                options={this.state.options}
                                toggle={() => this.toggleCss('fontStyle')}
                                setState={this.setState}
                            />
                            <FontVariant
                                options={this.state.options}
                                toggle={() => this.toggleCss('fontVariant')}
                                setState={this.setState}
                            />
                            <FontWeight
                                options={this.state.options}
                                toggle={() => this.toggleCss('fontWeight')}
                                setState={this.setState}
                            />
                            <TextDecorationColor
                                options={this.state.options}
                                toggle={() => this.toggleCss('textDecorationColor')}
                                setState={this.setState}
                            />
                            <TextDecorationLine
                                options={this.state.options}
                                toggle={() => this.toggleCss('textDecorationLine')}
                                setState={this.setState}
                            />
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
                                onChange={
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
                                onChange={
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
                                onChange={
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