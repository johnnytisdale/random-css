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

#### animation

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

Must be greater than the value supplied for `durationMax`.

##### [durationMin](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration): integer

The minimum value that may be generated for `transition-duration`.

External: 1-3 (s)<br>
Inline: 300-3000 (ms)

Must be less than the value supplied for `durationMax`.

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

Must be greater than `min`.

###### min: float / integer

The minimum value that may be generated for iteration count.

External: Must be a whole number between 1 and 3, inclusive.<br>
Inline: Must be a float or integer between 0.25 and 3, inclusive.

Must be less than `max`.

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

#### backgroundColor, borderColor, color, textDecorationColor

<em>external = false</em>

```
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

<em>external = true</em>

```
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

Must be greater than aMin.

##### aMin: float

The minimum alpha value that may be generated.

Must be between 0 and 1, inclusive.

Must be less than aMax.

##### bMax: integer

The maximum blue value that may be generated.

Must be a whole number between 0 and 255, inclusive.

Must be greater than bMin.

##### bMin: integer

The minimum blue value that may be generated.

Must be a whole number between 0 and 255, inclusive.

Must be less than bMax.

##### gMax: integer

The maximum green value that may be generated.

Must be a whole number between 0 and 255, inclusive.

Must be greater than gMin.

##### gMin: integer

The minimum green value that may be generated.

Must be a whole number between 0 and 255, inclusive.

Must be less than gMax.

##### rMax: integer

The maximum red value that may be generated.

Must be a whole number between 0 and 255, inclusive.

Must be greater than rMin.

##### rMin: integer

The minimum red value that may be generated.

Must be a whole number between 0 and 255, inclusive.

Must be less than rMax.

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
