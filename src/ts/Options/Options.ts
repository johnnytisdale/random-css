import CssOptions           from './Randomizables/Css/CssOptions';
import GlobalOptions        from './GlobalOptions';
import GlyphOptions         from './Randomizables/GlyphOptions';

interface Options {
    global: GlobalOptions,
    css:    CssOptions;
    glyph:  GlyphOptions;
}

const defaultOptions:Options = {
    global: {
        center: true,
        size:   4,
        text:   'random css',
        unsafe: true
    },
    css: {
        animation: {
            enabled: false,
            rotate:  true,
            scale:   true,
            skew:    true
        },
        backgroundColor: {
            enabled: false
        },
        borderColor: {
            enabled: false
        },
        borderRadius: {
            enabled: false
        },
        borderStyle: {
            enabled: false,
            values: [
                "dashed",
                "dotted",
                "double",
                "groove",
                "inset",
                "none",
                "outset",
                "ridge",
                "solid"
            ]
        },
        borderWidth: {
            enabled: false
        },
        color: {
            enabled: false
        },
        fontFamily: {
            enabled: false,
            values: [
                "Arial",
                "\"Arial Black\"",
                "Bookman",
                "Candara",
                "\"Comic Sans MS\"",
                "Courier",
                "\"Courier New\"",
                "Garamond",
                "Georgia",
                "Impact",
                "Palatino",
                "Roboto",
                "\"Times New Roman\"",
                "Times",
                "Verdana"
            ]
        }, 
       fontKerning: {
            enabled: false,
            values:  [
                "none",
                "normal"
            ]
        }, 
        fontStretch: {
            enabled: false,
            values:  [
                "ultra-condensed",
                "extra-condensed",
                "condensed",
                "semi-condensed",
                "normal",
                "semi-expanded",
                "expanded",
                "extra-expanded",
                "ultra-expanded"
            ]
        }, 
        fontStyle: {
            enabled: false,
            values:  [
                "italic",
                "normal",
                "oblique"
            ]
        }, 
        fontVariant: {
            enabled: false,
            values: [
                "all-petite-caps",
                "all-small-caps",
                "normal",
                "small-caps",
                "petite-caps",
                "titling-caps",
                "unicase"
            ]
        }, 
        fontWeight: {
            enabled: false,
            values: [
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "700",
                "800",
                "900"
            ]
        },
        textDecorationColor: {
            enabled: false
        },
        textDecorationLine: {
            enabled: false,
            values: [
                "line-through",
                "line-through underline",
                "line-through overline",
                "none",
                "overline",
                "overline underline",
                "underline"
            ]
        }
    },
    glyph: {
        enabled: false,
        leet:    true,
        unicode: true
    }
}

export {
    Options,
    defaultOptions
};