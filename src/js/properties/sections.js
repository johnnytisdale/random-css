let sections = [
	{
		"name": "characters",
		"label": "Characters",
		"inputs": [
			{
				"label": "Randomize",
				"option": "enabled",
				"property": "character",
				"options": [
					{
						"label": "Blink",
						"default": true,
						"option": "blink"
					},
					{
						"label": "Force random character to resemble original",
						"default": true,
						"option": "resemble",
						"property": "character"
					},
					{
						"label": "Ignore spaces",
						"default": true,
						"option": "ignoreSpaces",
						"property": "character",
					},
					{
						"label": "Unicode",
						"default": true,
						"option": "unicode",
						"property": "character"
					},
					{
						"label": "1337",
						"default": true,
						"option": "leet",
						"property": "character",
						"type": "checkbox"
					}
				]
			},
		]
	},
	{
		"name": "css",
		"label": "CSS",
		"inputs": [
			{
				"label": "animation",
				"option": "enabled",
				"property": "animation",
				"default": "",
				"value": "animate",
				"values": [
					"rotate",
					"scale",
					"skew"
				],
				"valueType": "function",
				"options": [
					{
						"default": true,
						"label": "Rotate",
						"option": "rotate",
						"type": "boolean"
					},
					{
						"default": true,
						"label": "Scale",
						"option": "scale",
						"type": "boolean"
					},
					{
						"default": true,
						"label": "Skew",
						"option": "skew",
						"type": "boolean"
					}
				]
			},
			{
				"label": "background-color",
				"option": "enabled",
				"property": "backgroundColor",
				"default": "rgba(0,0,0,0)",
				"value": "getColor",
				"valueType": "function"
			},
			{
				"label": "border-color",
				"option": "enabled",
				"property": "borderColor",
				"default": "black",
				"value": "getColor",
				"valueType": "function"
			},
			{
				"label": "border-radius",
				"option": "enabled",
				"property": "borderRadius",
				"default": 0,
				"value": "getBorderRadius",
				"valueType": "function",
				"options": [
					{
						"default": true,
						"label": "Give all four corners the same value",
						"option": "mono",
						"type": "boolean"
					}
				]
			},
			{
				"label": "border-style",
				"option": "enabled",
				"property": "borderStyle",
				"default": "solid",
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
				],
				"valueType": "array"
			},
			{
				"label": "border-width",
				"option": "enabled",
				"property": "borderWidth",
				"default": 0,
				"unit": "px",
				"value": [
					1,
					3
				],
				"valueType": "range"
			},
			{
				"label": "color",
				"option": "enabled",
				"property": "color",
				"default": "black",
				"value": "getColor",
				"valueType": "function"
			},
			{
				"label": "font-family",
				"option": "enabled",
				"property": "fontFamily",
				"default": "initial",
				"values": [
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
				],
				"valueType": "array"
			},
			{
				"label": "font-kerning",
				"option": "enabled",
				"property": "fontKerning",
				"default": "auto",
				"values": [
					"none",
					"normal"
				],
				"valueType": "array"
			},
			{
				"label": "font-stretch",
				"option": "enabled",
				"property": "fontStretch",
				"default": "normal",
				"values": [
					"ultra-condensed",
					"extra-condensed",
					"condensed",
					"semi-condensed",
					"normal",
					"semi-expanded",
					"expanded",
					"extra-expanded",
					"ultra-expanded"
				],
				"valueType": "array"
			},
			{
				"label": "font-style",
				"option": "enabled",
				"property": "fontStyle",
				"default": "normal",
				"values": [
					"italic",
					"normal",
					"oblique"
				],
				"valueType": "array"
			},
			{
				"label": "font-variant",
				"option": "enabled",
				"property": "fontVariant",
				"default": "normal",
				"values": [
					"normal",
					"small-caps"
				],
				"valueType": "array"
			},
			{
				"label": "font-variant-caps",
				"option": "enabled",
				"property": "fontVariantCaps",
				"default": "normal",
				"values": [
					"normal",
					"small-caps",
					"all-small-caps",
					"petite-caps",
					"all-petite-caps",
					"unicase",
					"titling-caps"
				],
				"valueType": "array"
			},
			{
				"label": "font-weight",
				"option": "enabled",
				"property": "fontWeight",
				"default": 400,
				"values": [
					100,
					200,
					300,
					400,
					500,
					600,
					700,
					800,
					900
				],
				"valueType": "array"
			},
			{
				"label": "text-decoration-color",
				"option": "enabled",
				"property": "textDecorationColor",
				"default": "black",
				"value": "getColor",
				"valueType": "function"
			},
			{
				"label": "text-decoration-line",
				"option": "enabled",
				"property": "textDecorationLine",
				"default": "none",
				"values": [
					"line-through",
					"none",
					"overline",
					"overline underline",
					"underline"
				],
				"valueType": "array"
			},
			{
				"label": "text-decoration-style",
				"option": "enabled",
				"property": "textDecorationStyle",
				"default": "solid",
				"values": [
					"solid",
					"double",
					"dotted",
					"dashed",
					"wavy"
				],
				"valueType": "array"
			}
		]
	}
];

/*for (let i in properties) {
	let input = {};
	input.label = properties[i].cssName;
	input.option = 'enabled';
	input.property = i;
	for (let thing in properties[i]) {
		if (thing == 'cssName' || thing == 'option') continue;		
		input[thing] = properties[i][thing];
	}
	/*if (properties[i].hasOwnProperty('options')) {
		input.options = [];
		for (let x = 0; x < properties[i].options.length; x++) {
			let option = properties[i].options[x];
			option.property = i;
			input.options.push(option);
		}
	}
	sections[1].inputs.push(input);
}*/

export {sections};