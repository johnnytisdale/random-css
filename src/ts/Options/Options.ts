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
            enabled: true
        },
        backgroundColor: {
            enabled: true
        },
        borderColor: {
            enabled: true
        },
        borderRadius: {
            enabled: true
        },
        borderStyle: {
            enabled: true,
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
            enabled: true
        },
        color: {
            enabled: true
        },
        fontFamily: {
            enabled: true,
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
            enabled: true,
            values:  [
                "none",
                "normal"
            ]
        }, 
        fontStretch: {
            enabled: true,
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
            enabled: true,
            values:  [
                "italic",
                "normal",
                "oblique"
            ]
        }, 
        fontVariant: {
            enabled: true,
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
            enabled: true,
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
            enabled: true
        },
        textDecorationLine: {
            enabled: true,
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
        enabled: true
    }
}

export {
    Options,
    defaultOptions
};