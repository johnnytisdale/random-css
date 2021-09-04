const cssProperties = [
    /*{
        "name":     "animation",
        "type":     "animation",
        "default":  null,
        "values": [
            "rotate",
            "scale",
            "skew"
        ]
    },*/
    {
        "name":     "backgroundColor",
        "type":     "color",
        "default":  "rgb(255,255,255)"
    },
    {
        "name":     "borderColor",
        "default":  "rgb(0,0,0)",
        "type":     "color",
    },
    {
        "name":     "borderRadius",
        "type":     "function",
        "default":  0,
        "function": "getBorderRadius"
    },
    {
        "name": "borderStyle",
        "type": "array",
        "default": "none",
        "values": [
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
    {
        "name": "borderWidth",
        "type": "range",
        "default": 1,
        "range": [1, 5],
        "unit": "px"
    },
    {
        "name":     "color",
        "type":     "color",
        "default":  "rgb(0,0,0)"
    },
    {
        "name":     "text-decoration-line",
        "type":     "array",
        "default":  "none",
        "values": [
            "line-through",
            "none",
            "overline",
            "underline"
        ]
    }
];

export {cssProperties};