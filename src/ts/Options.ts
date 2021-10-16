import {CssOptions}          from './Randomizables/Css/CssOptions';
import GlobalOptions       from './GlobalOptions';
import GlyphOptions        from './Randomizables/Glyph/GlyphOptions';

export default interface Options {
    global: GlobalOptions,
    css:    CssOptions;
    glyph:  GlyphOptions;
}