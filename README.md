# Random CSS

Randomize your style.

## Installation

`npm i -D random-css`

## How To Use

Import the `RandomElement` corresponding to the HTML element you want to
randomize.

In this example, a `<div>` will be created. Its `borderWidth` will remain fixed
at `1rem`, while the `borderColor`, `borderRadius`, and `borderStyle` properties will be randomized.

```
import { RandomDiv } from "random-css";

function MyComponent() {
  return (
    <RandomDiv
      fixedStyle={{borderWidth: "1rem"}}
      style={["borderColor", "borderRadius", "borderStyle"]}
    >
      my super awesome div content!!!
    </RandomDiv>
  );
}
```

Suppose you wanted to specify which border styles will be used.

```
<RandomDiv
  fixedStyle={{borderWidth: "1rem"}}
  style={[
    "borderColor",
    "borderRadius",
    {
      borderStyle: {
        borderStyles: [
          "dashed",
          "dotted",
          "double",
          "groove",
          "solid"
        ]
      }
    }
  ]}
>
  dude, check out these border styles!
</RandomDiv>
```

## Configuration

### CSS Properties

#### [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

```
<RandomDiv
  style={{
    animation: {
      directions: [
        "alternate",
        "alternate-reverse",
        "normal",
        "reverse",
      ],
      durationMax: 3000,
      durationMin: 300,
      easingFunctions: [
        "cubic-bezier",
        "ease",
        "ease-in",
        "ease-out",
        "ease-in-out",
        "linear",
        "step-end",
        "step-start",
        "steps",
      ],
      fillModes: [
        "backwards",
        "both",
        "forwards",
      ],
      iterationCount: {
        infinite: true,
        infiniteProbability: 0.5,
        integersOnly: false,
        max: 3,
        min: 0.25,
      },
      stepPositions: [
        "end",
        "jump-both",
        "jump-end",
        "jump-none",
        "jump-start",
        "start",
      ],
      transformations: [
        "rotate",
        "scaleDown",
        "scaleUp",
        "skewX",
        "skewXY",
        "skewY",
      ],
    }
  }}
>
  my rad animated div content!
</RandomDiv>
```

##### [directions](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction): array

- "alternate"
- "alternate-reverse"
- "normal"
- "reverse"

##### [durationMax](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration): integer

The maximum value that may be generated for `transition-duration`.

External: 1-3 (s)<br>
Inline: 300-3000 (ms)

Must be greater than or equal to `durationMax`.

##### [durationMin](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration): integer

The minimum value that may be generated for `transition-duration`.

External: 1-3 (s)<br>
Inline: 300-3000 (ms)

Must be less than or equal to `durationMax`.

##### [easingFunctions](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function): array

- "cubic-bezier"
- "ease"
- "ease-in"
- "ease-out"
- "ease-in-out"
- "linear"
- "step-end"
- "step-start"
- "steps"

##### [fillModes](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode): array

- "backwards"
- "both"
- "forwards"

##### [iterationCount](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count): object

###### infinite: boolean

Whether the keyword "infinite" may be used.

###### infiniteProbability: float

The probability that the keyword "infinite" will be used.

Must be between 0 and 1, inclusive.

###### integersOnly: boolean

If true, then only whole numbers will be used for iteration counts. This option
is only meaningful when using inline CSS. When using external CSS, only integers
are supported.

###### max: float / integer

The maximum value that may be generated for iteration count.

External: Must be a whole number between 1 and 3, inclusive.<br>
Inline: Must be a float or integer between 0.25 and 3, inclusive.

Must be greater than or equal to `min`.

###### min: float / integer

The minimum value that may be generated for iteration count.

External: Must be a whole number between 1 and 3, inclusive.<br>
Inline: Must be a float or integer between 0.25 and 3, inclusive.

Must be less than or equal to `max`.

##### [stepPositions](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function): array

Jump terms to be used with the `steps` easing function.

- "end"
- "jump-both"
- "jump-end"
- "jump-none"
- "jump-start"
- "start"

##### [transformations](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes): array

- "rotate"
- "scaleDown"
- "scaleUp"
- "skewX"
- "skewXY"
- "skewY"

#### [backgroundColor](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color), [borderColor](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color), [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), [textDecorationColor](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color)

```
// external is false by default.

<RandomDiv
  style={{
    backgroundColor: {
      rMin: 0,
      rMax: 255,
      gMin: 0,
      gMax: 255,
      bMin: 0
      bMax: 255,
      alpha: true,
      aMin: 0,
      aMax: 1,
    },
  }}
>
  my rad div content with a randomized background color!
</RandomDiv>
```

```
// When using an external stylesheet, specify color keywords instead of rgba values.

<RandomDiv
  external={true}
  style={{
    backgroundColor: {
      colorKeywords: [
        "Aquamarine",
        "CornflowerBlue",
        "DeepSkyBlue",
        "FireBrick",
        "Indigo",
        "MediumSeaGreen",
        "PapayaWhip",
        "SteelBlue",
        "Turquoise",
      ],
    },
  }}
>
  my rad div content with a randomized background color, using an external stylesheet!
</RandomDiv>
```

##### alpha: boolean

If `true`, the optional `alpha` argument will be passed to [`rgb()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb).

##### aMax: float

The maximum alpha value that may be generated.

Must be between 0 and 1, inclusive.

Must be greater than or equal to aMin.

##### aMin: float

The minimum alpha value that may be generated.

Must be between 0 and 1, inclusive.

Must be less than or equal to aMax.

##### bMax: integer

The maximum blue value that may be generated.

Must be a whole number between 0 and 255, inclusive.

Must be greater than or equal to bMin.

##### bMin: integer

The minimum blue value that may be generated.

Must be a whole number between 0 and 255, inclusive.

Must be less than or equal to bMax.

##### gMax: integer

The maximum green value that may be generated.

Must be a whole number between 0 and 255, inclusive.

Must be greater than or equal to gMin.

##### gMin: integer

The minimum green value that may be generated.

Must be a whole number between 0 and 255, inclusive.

Must be less than or equal to gMax.

##### rMax: integer

The maximum red value that may be generated.

Must be a whole number between 0 and 255, inclusive.

Must be greater than or equal to rMin.

##### rMin: integer

The minimum red value that may be generated.

Must be a whole number between 0 and 255, inclusive.

Must be less than or equal to rMax.

##### colorKeywords: array

- "AliceBlue"
- "AntiqueWhite"
- "Aqua"
- "Aquamarine"
- "Azure"
- "Beige"
- "Bisque"
- "Black"
- "BlanchedAlmond"
- "Blue"
- "BlueViolet"
- "Brown"
- "BurlyWood"
- "CadetBlue"
- "Chartreuse"
- "Chocolate"
- "Coral"
- "CornflowerBlue"
- "Cornsilk"
- "Crimson"
- "Cyan"
- "DarkBlue"
- "DarkCyan"
- "DarkGoldenrod"
- "DarkGray"
- "DarkGreen"
- "DarkKhaki"
- "DarkMagenta"
- "DarkOliveGreen"
- "DarkOrange"
- "DarkOrchid"
- "DarkRed"
- "DarkSalmon"
- "DarkSeaGreen"
- "DarkSlateBlue"
- "DarkSlateGray"
- "DarkTurquoise"
- "DarkViolet"
- "DeepPink"
- "DeepSkyBlue"
- "DimGray"
- "DodgerBlue"
- "FireBrick"
- "FloralWhite"
- "ForestGreen"
- "Fuchsia"
- "Gainsboro"
- "GhostWhite"
- "Gold"
- "Goldenrod"
- "Gray"
- "Green"
- "GreenYellow"
- "Honeydew"
- "HotPink"
- "IndianRed"
- "Indigo"
- "Ivory"
- "Khaki"
- "Lavender"
- "LavenderBlush"
- "LawnGreen"
- "LemonChiffon"
- "LightBlue"
- "LightCoral"
- "LightCyan"
- "LightGoldenrodYellow"
- "LightGreen"
- "LightGrey"
- "LightPink"
- "LightSalmon"
- "LightSeaGreen"
- "LightSkyBlue"
- "LightSlateGray"
- "LightSteelBlue"
- "LightYellow"
- "Lime"
- "LimeGreen"
- "Linen"
- "Magenta"
- "Maroon"
- "MediumAquamarine"
- "MediumBlue"
- "MediumOrchid"
- "MediumPurple"
- "MediumSeaGreen"
- "MediumSlateBlue"
- "MediumSpringGreen"
- "MediumTurquoise"
- "MediumVioletRed"
- "MidnightBlue"
- "MintCream"
- "MistyRose"
- "Moccasin"
- "NavajoWhite"
- "Navy"
- "OldLace"
- "Olive"
- "OliveDrab"
- "Orange"
- "OrangeRed"
- "Orchid"
- "PaleGoldenrod"
- "PaleGreen"
- "PaleTurquoise"
- "PaleVioletRed"
- "PapayaWhip"
- "PeachPuff"
- "Peru"
- "Pink"
- "Plum"
- "PowderBlue"
- "Purple"
- "RebeccaPurple"
- "Red"
- "RosyBrown"
- "RoyalBlue"
- "SaddleBrown"
- "Salmon"
- "SandyBrown"
- "SeaGreen"
- "Seashell"
- "Sienna"
- "Silver"
- "SkyBlue"
- "SlateBlue"
- "SlateGray"
- "Snow"
- "SpringGreen"
- "SteelBlue"
- "Tan"
- "Teal"
- "Thistle"
- "Tomato"
- "Turquoise"
- "Violet"
- "Wheat"
- "White"
- "WhiteSmoke"
- "Yellow"
- "YellowGreen"

#### [borderRadius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)

##### maxCorners: integer;

The maximum number of corners to which a radius may be applied.

Must be between 1 and 4, inclusive.

Must be greater than or equal to `minCorners`.

##### minCorners: integer;

The minimum number of corners to which a radius may be applied.

Must be between 1 and 4, inclusive.

Must be less than or equal to `maxCorners`.

##### maxRadius: integer;

The maximum radius (as a percentage) that may be generated.

Must be between 1 and 100, inclusive.

Must be greater than or equal to `minRadius`.

##### minRadius: integer;

The minimum radius (as a percentage) that may be generated.

Must be between 1 and 100, inclusive.

Must be less than or equal to `maxRadius`.

##### slash: boolean;

Whether a corner may be made elliptical by providing two values separated by a slash.

##### slashProbability: float;

The probability that a corner may be made elliptical.

Must be between 0 and 1, inclusive.

#### [borderStyle](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)

##### borderStyles: array

- "dashed"
- "dotted"
- "double"
- "groove"
- "hidden"
- "inset"
- "none"
- "outset"
- "ridge"
- "solid"

#### [borderWidth](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)

##### max: integer

The maximum value that may be generated.

Must be greater than or equal to `min`.

##### min: integer

The maximum value that may be generated.

Must be less than or equal to `max`.

##### units: array

- "mm"
- "pt"
- "px"

#### [fontFamily](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)

##### fallbackProbability: float

The probability that a fallback will be provided.

> Generic font families are a fallback mechanism, a means of preserving some of the style sheet author's intent when none of the specified fonts are available. Generic family names are keywords and must not be quoted. A generic font family should be the last item in the list of font family names.

Must be between 0 and 1, inclusive.

##### fontFamilyNames: array

- "Arial"
- '"Arial Black"'
- "Bookman"
- "Candara"
- '"Comic Sans MS"'
- "Courier"
- '"Courier New"'
- "Garamond"
- "Georgia"
- "Impact"
- "Palatino"
- "Roboto"
- '"Times New Roman"'
- "Times"
- "Verdana"

##### fontGenericNames: array

- "cursive"
- "emoji"
- "fangsong"
- "fantasy"
- "math"
- "monospace"
- "sans-serif"
- "serif"
- "system-ui"
- "ui-monospace"
- "ui-sans-serif"
- "ui-serif"
- "ui-rounded"

##### includeFallbacks: boolean

Whether the value generated may consist two font names: a font family name and a "fallback" generic name.

##### includeFamilyNames: boolean

Whether the value generated may consist solely of a font family name.

##### includeGenericNames: boolean

Whether the value generated may consist solely of a generic font name.

#### [fontStyle](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)

##### degrees: boolean

Whether to include a `degrees` value when the font style is `oblique`.

##### degreesProbability: float

The probability that a `degrees` value will be included when the font style is `oblique`.

##### fontStyles: array

- "italic"
- "normal"
- "oblique"

##### maxDegrees: integer

The maximum value that may be generated for `degrees` when the font style is `oblique`.

Must be between -90 and 90, inclusive.

Must be greater than or equal to `minDegrees`.

##### minDegrees: integer

The minimum value that may be generated for `degrees` when the font style is `oblique`.

Must be between -90 and 90, inclusive.

Must be less than or equal to `maxDegrees`.

#### [fontWeight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)

##### fontWeights: array

- "100"
- "200"
- "300"
- "400"
- "500"
- "600"
- "700"
- "800"
- "900"
- "bold"
- "bolder"
- "lighter"
- "normal"

#### [textDecorationLine](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line)

##### textDecorationLines: array

- "line-through"
- "line-through underline"
- "line-through overline"
- "none"
- "overline"
- "overline underline"
- "underline"

#### [textDecorationStyle](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style)

##### styles: array

- "dashed"
- "dotted"
- "double"
- "solid"
- "wavy"

## What's New?

- CI/CD: Github Actions
- Formatting: Prettier
- Linting: ESLint
- Testing: Jest and React Testing Library

### Content Security Policy

Random CSS is now compatible with a _strict_
[Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP),
i.e., one that forbids inline CSS. There is now an `external` prop which defaults to `false`. If you set it to `true`, then external CSS is used and you must be sure to link to the [stylesheet](https://randomcss.org/random.css) in your `<head>`.

While using external CSS is considered safer, it comes with a tradeoff: It
significantly limits the number of possible values supported for some CSS
properties, particularly color properties.

To use an external stylesheet, we have to create a rule for every value that we
want to support for a given property. This means that using `rgb()` is pretty
much out of the question. `rgb()` accepts three integers, each ranging from 0 to 255. So to support every possible combination, we would have to create
256<sup>3</sup> = 16,777,216 rules for each color property. Creating that many
rules for just _one_ property results in a stylesheet that is over 1GB in size.

So when using external CSS, we use the
[color keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color),
of which there are only 142.

## Start Developing

1. `git clone https://github.com/johnnytisdale/random-css.git`
2. `cd random-css`
3. `npm install`
4. `npm run watch`
5. Open `dist/form.html` in browser.
6. As you make changes in `src`, refresh the form and test.

## Authors

- **Johnny Tisdale** - [github](https://github.com/johnnytisdale) | [website](https://johnnytisdale.com)

## License

This project is licensed under the ISC License. See [LICENSE.md](LICENSE.md) for details.

## Acknowledgements

- [Billie Thompson](https://github.com/PurpleBooth) - [README template](https://github.com/PurpleBooth/a-good-readme-template)
